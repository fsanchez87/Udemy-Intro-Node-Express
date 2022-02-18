const userController = require("../../controllers/v1/users-controller");
const productController = require("../../controllers/v1/products-controllers");

const createRoutesV1 = (app) => {
  app.get("/api/v1/users", userController.getUsers);
  app.get("/api/v1/users/:userId", userController.getUserById);
  app.get("/api/v1/product", productController.getProducts);
};

module.exports = createRoutesV1;
