const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");
module.exports = function (app) {
    
  app.get(
    "/api/user/all",
    [authJwt.verifyToken],
    controller.findAll
  );

  app.delete(
    "/api/user/delete/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );
};