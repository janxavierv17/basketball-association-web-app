import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name."],
  },
  lastName: { type: String, required: [true, "Please enter your last name."] },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter a valid email address."],
  },
  role: {
    type: String,
    enum: ["player", "admin"],
    default: "player",
    required: true,
  },
  // Enabled as false for google signIn
  password: { type: String, required: false },
  googleId: { type: String, required: false },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
