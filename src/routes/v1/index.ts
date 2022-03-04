import {Application} from 'express';

import * as userController from '../../controllers/v1/users-controller';
import * as productController from '../../controllers/v1/products-controllers';

const createRoutesV1 = (app: Application):void => {
  app.get("/api/v1/users", userController.getUsers);
  app.get("/api/v1/users/:userId", userController.getUserById);
  app.get("/api/v1/products", productController.getProducts);
  app.get("/api/v1/products/:productId", productController.getProductById);
  app.post("/api/v1/products/create", productController.createProduct);
  app.put("/api/v1/products/products/:productId", productController.updateProduct);
  app.delete("/api/v1/products/products/:productId", productController.deleteProductById);
  app.patch("/api/v1/products/products/:productId", productController.partialUpdateProduct);
  app.post("/api/v1/products/products/:productId/notify-client", productController.updateProductAndNotify);
};

export default createRoutesV1;