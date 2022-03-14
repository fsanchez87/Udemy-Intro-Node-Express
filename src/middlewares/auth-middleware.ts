/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    export interface Request {
      session: {
        userId: string;
        email: string;
      };
    }
  }
}

export const checkAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { token } = req.headers;

    if (!token) {
      throw new Error('Missing header token');
    }

    const { userId, email } = jwt.verify(
      token as string,
      process.env.JWT_SECRET!
    ) as any;

    req.session = {
      userId,
      email,
    };
    next();
  } catch (e: any) {
    res.status(401).send(e.message);
  }
};

export const checkIP = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.hostname === 'localhost') {
    next();
  } else {
    res.status(403).send('Access denied');
  }
};
