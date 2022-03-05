/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mongoose from 'mongoose';

const connection = async (): Promise<boolean> => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI!
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default connection;
