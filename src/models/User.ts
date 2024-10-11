import mongoose from "mongoose";

// Define the User schema
const UserSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  twitterLink: {
    type: String,
    required: true,
    trim: true,
  },
});

// Export the User model
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
