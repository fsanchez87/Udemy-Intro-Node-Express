import { Router } from 'express';
import * as productController from '../../controllers/v1/products-controllers';
import { checkAuth } from '../../middlewares/auth-middleware';
import { handleReqErrors } from '../../middlewares/validator_middleware';
import { validateNewProductBody } from '../../validators/v1/products-validator';

const routes = Router();

routes.get('/', checkAuth, productController.getProducts);
routes.get('/:productId', checkAuth, productController.getProductById);
routes.post(
  '/create',
  checkAuth,
  validateNewProductBody,
  handleReqErrors,
  productController.createProduct
);
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
