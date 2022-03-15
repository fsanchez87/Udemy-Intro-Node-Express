import { Request, Response } from 'express';

import Products from '../../db/schemas/products';
import { sendError, validatObjectId } from '../../utils/response_utils';

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const itemsPerPage: number = 20;
  const page: number = parseInt(req.query.page as string);
  const start = (page - 1) * itemsPerPage;
  const total: number = await Products.count({ user: req.session.userId });

  const products = await Products.find({
    user: req.session.userId,
  })
    .skip(start)
    .limit(itemsPerPage);

  res.send({
    page: page,
    per_page: itemsPerPage,
    total: total,
    total_pages: Math.ceil(total / itemsPerPage),
    data: products,
  });
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId } = req.params;
    validatObjectId(productId);

    const product = await Products.findOne({
      _id: productId,
      user: req.session.userId,
    }).populate({
      path: 'user',
      select: {
        password: 0,
        __v: 0,
      },
    });

    if (product) {
      res.send(product);
    } else {
      res.status(404).send({});
    }
  } catch (e: any) {
    sendError(res, e);
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.session;
    const { name, year, color, price, description } = req.body;
    validatObjectId(userId);

    const newProduct = await Products.create({
      name,
      year,
      color,
      price,
      description,
      user: userId,
    });

    res.send(newProduct);
  } catch (e: any) {
    sendError(res, e);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.productId;
    validatObjectId(id);
    const { name, year, price, description } = req.body;
    const updateProduct = await Products.findOneAndUpdate(
      {
        _id: id,
        userId: req.session.userId,
      },
      {
        name,
        year,
        price,
        description,
        user: req.session.userId,
      }
    );

    if (updateProduct) {
      res.send({ data: 'Update ok' });
    } else {
      res.status(400).send({});
    }
  } catch (e: any) {
    sendError(res, e);
  }
};

export const partialUpdateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productId: string = req.params.productId;
    validatObjectId(productId);
    const { name, year, price, description } = req.body;

    const product = await Products.findOne({
      _id: productId,
      userId: req.session.userId,
    });

    if (product) {
      product.name = name || product.name;
      product.year = year || product.year;
      product.price = price || product.price;
      product.description = description || product.description;
      await product.save();

      res.send({ data: product });
    } else {
      res.status(400).send({});
    }
  } catch (e: any) {
    sendError(res, e);
  }
};

export const deleteProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const productId: string = req.params.productId;

    // validatObjectId(productId);

    const deleted = await Products.deleteOne({
      _id: productId,
      userId: req.session.userId,
    });

    if (deleted.deletedCount > 0) {
      res.send({});
    } else {
      res.status(404).send({});
    }
  } catch (e: any) {
    sendError(res, e);
  }
};
