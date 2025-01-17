import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  fullName: { type: String },
  userName: { type: String, unique: true },
  created_Date: { type: Date },
  isDeleted: { type: Boolean, default: false },
});

export const userModel = mongoose.model('User', userSchema);
