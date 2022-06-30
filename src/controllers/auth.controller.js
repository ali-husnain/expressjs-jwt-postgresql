const responder = require('../utils/responder');
const authService = require('../services/auth.service');

exports.signup = async (req, res) => {
    const userCreated = await authService.create(req.body);

    const roles = [1]; //default role user
    if (req.body.roles) {
        const foundRoles = await authService.roles(req.body);
        if (foundRoles) {
            roles = foundRoles;
        }
    }

    await userCreated.setRoles(roles);
    responder.sendResponse(res, 200, "success", userCreated, "User was registered successfully!");
};

exports.signin = async (req, res) => {
    const user = await authService.findByUsername(req.body.username);
    if (!user) {
        responder.sendResponse(res, 404, "error", null, "User not found.");
        return;
    }

    const passwordIsValid = authService.validatePassword(
        user.password,
        req.body.password
    );
    
    if (!passwordIsValid) {
        responder.sendResponse(res, 401, "error", null, "Invalid Password!");
        return;
    }

    const roles = await user.getRoles();
    let authorities = [];
    for (let i = 0; i < roles.length; i++) {
        authorities.push("ROLE_" + roles[i].name.toUpperCase());
    }

    const data = {
        id: user.id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: authService.accessToken(user.id)
    }
    responder.sendResponse(res, 200, "success", data, "User signed in.");
};