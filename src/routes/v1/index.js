const userController = require("../../controllers/v1/users-controller");

const createRoutesV1 = (app) => {
  app.get("/api/v1/users", userController.getUsers);
};

module.exports = createRoutesV1;
