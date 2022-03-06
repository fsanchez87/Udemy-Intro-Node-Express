import { Request, Response } from 'express';

import Users from '../../db/schemas/user';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  const users = await Users.find();
  res.send(users);
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;

  const user = await Users.find({ userId });

  if (user) {
    res.send(user);
  } else {
    res.status(404).send({});
  }
};
