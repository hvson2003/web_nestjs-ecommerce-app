import { Document } from 'mongoose';

export interface Address {
  addr1: string;
  addr2: string;
  district: string;
  province: string;
  country: string;
  zip: number;
}

export interface User extends Document {
  username: string;
  readonly password: string;
  seller: boolean;
  address: Address;
  created: Date;
}
