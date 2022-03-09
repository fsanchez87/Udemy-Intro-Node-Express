import { Response } from 'express';
import { Types } from 'mongoose';

export const validatObjectId = (productId: string): void => {
  if (!Types.ObjectId.isValid(productId)) {
    throw { code: 400, message: `Invalid Object Id ${productId}` };
  }
};

export const sendError = (res: Response, e: any): void => {
  console.log(e);
  const statusCode: number = e.code || 500;
  res.status(statusCode).send(e.message);
};
