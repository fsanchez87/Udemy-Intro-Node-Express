import { Router } from 'express';

import * as productController from '../../controllers/v1/products-controllers';

const routes = Router();

routes.get('/', productController.getProducts);
routes.get('/:productId', productController.getProductById);
routes.post('/create', productController.createProduct);
routes.put(
  '/products/:productId',
  productController.updateProduct
);
routes.delete(
  '/products/:productId',
  productController.deleteProductById
);
routes.patch(
  '/products/:productId',
  productController.partialUpdateProduct
);

export default routes;
