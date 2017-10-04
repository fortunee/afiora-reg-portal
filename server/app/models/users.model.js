import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * User Schema for product sellers
 */
const UserSchema = new Schema({
    businessName: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    phone: { type: Number },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    productCategory: String,
    address: String,
    createdAt: Date,
    updatedAt: Date
});
