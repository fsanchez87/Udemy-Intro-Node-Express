import { Request, Response } from 'express';
import { Types } from 'mongoose';

import Products from '../../db/schemas/products';
import { sendError, validatObjectId } from '../../utils/response_utils';

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const itemsPerPage: number = 6;
  const page: number = parseInt(req.query.page as string);
  const start = (page - 1) * itemsPerPage;
  const total: number = await Products.count();

  const products = await Products.find().skip(start).limit(itemsPerPage);

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

    const product = await Products.findById(productId);

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
    const { name, year, color, price, description, user } = req.body;
    validatObjectId(user);

    const newProduct = await Products.create({
      name,
      year,
      color,
      price,
      description,
      user,
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
    const { name, year, price, description, user } = req.body;
    const updateProduct = await Products.findByIdAndUpdate(id, {
      name,
      year,
      price,
      description,
      user,
    });

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
    const { name, year, price, description, user } = req.body;

    const product = await Products.findById(productId);

    if (product) {
      product.name = name || product.name;
      product.year = year || product.year;
      product.price = price || product.price;
      product.description = description || product.description;
      product.user = user || product.user;
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

    validatObjectId(productId);

    const deleted = await Products.deleteOne({ productId });

    if (deleted.deletedCount > 0) {
      res.send({});
    } else {
      res.status(404).send({});
    }
  } catch (e: any) {
    sendError(res, e);
  }
};
