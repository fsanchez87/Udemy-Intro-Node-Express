const userController = require("../../controllers/v1/users-controller");
const productController = require("../../controllers/v1/products-controllers");

const createRoutesV1 = (app) => {
  app.get("/api/v1/users", userController.getUsers);
  app.get("/api/v1/users/:userId", userController.getUserById);
  app.get("/api/v1/products", productController.getProducts);
  app.get("/api/v1/products/:productId", productController.getProductById);
  app.post("/api/v1/products/create", productController.createProduct);
};

module.exports = createRoutesV1;
