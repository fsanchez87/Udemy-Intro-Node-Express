import { checkSchema } from 'express-validator';

export const validateNewProductBody = checkSchema({
  name: {
    isString: true,
    rtrim: {
      options: ' ',
    },
    isLength: {
      options: {
        min: 2,
      },
    },
    errorMessage: ' Name must be a valid string with at least 2 characters',
  },
  year: {
    isInt: true,
    isString: {
      negated: true,
    },
    errorMessage: 'Year must be an integer',
  },
  price: {
    isNumeric: true,
    isString: {
      negated: true,
    },
    custom: {
      options: (value: number) => {
        return value > 0;
      },
    },
    errorMessage: 'Price must be an numeric > 0',
  },
});
