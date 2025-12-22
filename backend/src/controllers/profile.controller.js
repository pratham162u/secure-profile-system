const User = require("../models/User");
const { decrypt } = require("../utils/encrypt");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    res.json({
      name: user.name,
      email: user.email,
      aadhaar: decrypt(user.aadhaarEncrypted)
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
