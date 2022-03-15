import { checkSchema, Schema, ParamSchema } from 'express-validator';

const createProductSchema = (isStrict: boolean): Schema => {
  const nameSchema: ParamSchema = {
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
  };

  const yearSchema: ParamSchema = {
    isInt: true,
    isString: {
      negated: true,
    },
    errorMessage: 'Year must be an integer',
  };

  const priceSchema: ParamSchema = {
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
  };

  if (!isStrict) {
    const optional = {
      options: {
        nullable: true,
      },
    };
    nameSchema.optional = optional;
    yearSchema.optional = optional;
    priceSchema.optional = optional;
  }

  return {
    name: nameSchema,
    year: yearSchema,
    price: priceSchema,
  };
};

export const validateNewProductBody = checkSchema(createProductSchema(true));

export const validateDelete = checkSchema({
  productId: {
    in: 'params',
    isMongoId: true,
  },
});
