import { Router, Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import * as productController from '../../controllers/v1/products-controllers';
import { checkAuth } from '../../middlewares/auth-middleware';
import { validateNewProductBody } from '../../validators/v1/products-validator';

const routes = Router();

routes.get('/', checkAuth, productController.getProducts);
routes.get('/:productId', checkAuth, productController.getProductById);
routes.post(
  '/create',
  checkAuth,
  validateNewProductBody,
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      next()
    }else{
      res.status(404).send(errors.array());
    }
  },

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
