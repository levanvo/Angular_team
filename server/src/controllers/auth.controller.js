const user = require("../models/user.model");
const { hashPassword, comparePassword } = require("../utils/password");
const { generateToken } = require("../utils/jwt");
const { register, login } = require("../validators/auth");

const registerController = async (req, res) => {
  try {
    const { error } = register.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const { name, email, password } = await register.validateAsync(req.body);
    const hashedPassword = await hashPassword(password);
    const newUser = await user.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = generateToken(newUser);
    res.status(201).json({
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
      message: "Register successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = await login.validateAsync(req.body);
    const { error } = login.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    const userFound = await user.findOne( { email } );
    if (!userFound) {
      return res.status(400).json({ error: "Email or password is wrong" });
    }

    const isMatch = await comparePassword(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Email or password is wrong" });
    }

    const token = generateToken(userFound);
    res.status(200).json({
      token,
      user: {
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
      },
      message: "Login successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { registerController, loginController };
