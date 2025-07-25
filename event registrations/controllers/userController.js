const User = require("../models/User");
const sendEmail = require("../utils/sendMail");

exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, phone, companyName, city, role } = req.body;

    // Basic field validation
    if (!fullname || !email || !phone || !companyName || !city || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    // create user
    const user = new User({
      fullname,
      email,
      phone,
      companyName,
      city,
      role,
    });
    await user.save();

    try {
      const subject = "Registration Successful";
      const message = `Dear ${fullname},\n\nThank you for registering as a ${role}.\n\nYour registration is successful!\n\n`;
      await sendEmail(email, subject, message);
    } catch (emailError) {
      console.error("Email send failed:", emailError.message);
    }

    res.status(201).json({
      message: "Registration successful!",
      user,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      message: "Something went wrong while registering the user.",
      error: error.message,
    });
  }
};
