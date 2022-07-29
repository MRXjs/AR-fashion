import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema(
  {
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    avetar_img: {type: String},
    favourite: [],
    cart: [],
  },
  {timestamps: true},
);

const User = mongoose.model('users', UserSchema);

export default User;
