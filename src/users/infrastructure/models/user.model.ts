import { Schema, model } from 'mongoose';
import { User } from '../../domain';

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  completeName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (email: string) => {
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return re.test(email);
      },
      message: 'Email is not valid!'
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
    required: true,
    trim: true,
  },
}, { timestamps: true, versionKey: false });

export default model<User>('User', userSchema);