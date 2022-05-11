import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name."],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name."],
    },
    password: {
      type: String,
      required: [true, "Please enter your desired password."],
    },
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
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
    id: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
