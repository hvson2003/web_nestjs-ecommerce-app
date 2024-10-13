import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  seller: {
    type: Boolean,
    default: false,
  },
  address: {
    addr1: String,
    addr2: String,
    district: String,
    province: String,
    country: String,
    zip: Number,
  },
});
