const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const authService = {

    create: (userBody) => {
        return User.create({
            username: userBody.username,
            email: userBody.email,
            password: bcrypt.hashSync(userBody.password, 8)
        });
    },

    findByUsername: (username) => {
        return User.findOne({
            where: {
            username: username
            }
        });
    },

    validatePassword: (dbPassword, reqPassword) => {
        return bcrypt.compareSync(
            reqPassword,
            dbPassword
        );
    },

    accessToken: (userId) => {
        return jwt.sign({ id: userId }, config.secret, {
            expiresIn: 86400 // 24 hours
        });
    },

    roles: (reqBody) => {
        return Role.findAll({
            where: {
                name: {
                    [Op.or]: reqBody.roles
                }
            }
        });
    }

};

module.exports = authService;