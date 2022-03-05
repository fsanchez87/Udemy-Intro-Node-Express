import mongoose from 'mongoose';

const connection = async (): Promise<boolean> => {
  try {
    await mongoose.connect(
      'mongodb+srv://userMongo:MmM0NG0@cluster0.cvr5a.mongodb.net/hello_world?retryWrites=true&w=majority'
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default connection;
