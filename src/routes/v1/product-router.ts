import { Router } from 'express';

import * as productController from '../../controllers/v1/products-controllers';
import { checkAuth, checkIP } from '../../middlewares/auth-middleware';

const routes = Router();

routes.get('/', checkAuth, productController.getProducts);
routes.get('/:productId', checkAuth, productController.getProductById);
routes.post('/create', checkAuth, productController.createProduct);
routes.put('/products/:productId', checkAuth, productController.updateProduct);
routes.delete(
  '/products/:productId',
  checkAuth,
  productController.deleteProductById
);
routes.patch(
  '/products/:productId',
  checkAuth,
  productController.partialUpdateProduct
);

export default routes;
