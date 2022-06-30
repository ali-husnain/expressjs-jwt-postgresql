const responder = require('../utils/responder');
const db = require("../models");
const User = db.user;

exports.findAll = async (req, res) => {
  const allUsers = await User.findAll({
      attributes: { exclude: ['password'] }
  });
  responder.sendResponse(res, 200, "success", allUsers, "All user list.");
};

exports.delete = async (req, res) => {
    const user = await User.findByPk(req.param.id);
    if (!user) {
        responder.sendResponse(res, 404, "error", null, "User not found.");
        return;
    }
    responder.sendResponse(res, 200, "success", null, "User deleted successfully.");
};
