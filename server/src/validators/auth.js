const Joi = require("joi");

const register = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Name should be a type of 'text'",
    "string.empty": "Name cannot be an empty field",
    "any.required": "Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email cannot be an empty field",
    "string.email": "Email should be a valid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "Password cannot be an empty field",
    "string.min": "Password should have a minimum length of {#limit}",
    "any.required": "Password is required",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "Confirm Password cannot be an empty field",
    "any.only": "Confirm Password should match Password",
    "any.required": "Confirm Password is required",
  }),
});

const login = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email cannot be an empty field",
    "string.email": "Email should be a valid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "Password cannot be an empty field",
    "string.min": "Password should have a minimum length of {#limit}",
    "any.required": "Password is required",
  }),
});

module.exports = {
  register,
  login,
};
