import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import Users from '../../db/schemas/user';
import Products from '../../db/schemas/products';
import { sendError, validatObjectId } from '../../utils/response_utils';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await Users.find().select({ password: 0, __v: 0 });
  res.send(users);
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;

  const user = await Users.findById(userId).select({ password: 0, __v: 0 });

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({});
  }
};

export const deleteById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;
    validatObjectId(userId);
    const user = await Users.findByIdAndDelete(userId )

    if (user) {
      await Products.deleteMany({ 
         user: user._id,
      });
      res.send('ok')
    }else {
      res.status(404).send({})
    }

  } catch (e: any) {
    sendError(res, e);
  }
};


export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, first_name, last_name, avatar, password } = req.body;
    const hash: string = await bcrypt.hash(password, 15);
    const newUser = await Users.create({
      email,
      first_name,
      last_name,
      avatar,
      password: hash,
    });

    res.send(newUser);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
};
