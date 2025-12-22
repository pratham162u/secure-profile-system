const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { encrypt } = require("../utils/encrypt");
const { generateToken } = require("../utils/token");

exports.register = async (req, res) => {
  try {
    const { name, email, password, aadhaar } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const encryptedAadhaar = encrypt(aadhaar);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      aadhaarEncrypted: encryptedAadhaar
    });

    res.status(201).json({
      token: generateToken(user._id),
      message: "Registration successful"
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      token: generateToken(user._id),
      message: "Login successful"
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
