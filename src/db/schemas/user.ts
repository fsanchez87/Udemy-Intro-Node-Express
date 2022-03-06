import { Schema, model } from 'mongoose';

const schema = new Schema({
  email: String,
  first_name: String,
  last_name: String,
  avatar: String,
});

const Users = model('user', schema);

export default Users;
