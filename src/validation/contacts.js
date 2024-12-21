import Joi from 'joi';

export const contactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.min': 'Name should have at least 3 characters',
    'string.max': 'Name should have at most 20 characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.number().required().messages({
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().required().messages({
    'string.email': 'Email must be a valid email address',
  }),
  isFavourire: Joi.boolean(),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'any.only': 'Contact type must be one of work, home, or personal',
      'any.required': 'Contact type is required',
    }),
});
