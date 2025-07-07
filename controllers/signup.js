const bcrypt = require("bcrypt");
const User = require("../models/user");
const signup = async (req, res) => {
  try {
    const saltRounds = 10;
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "Signup successful!", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports = { signup };
