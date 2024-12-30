import mongoose from 'mongoose';

export async function connectToDB(uri: string) {
  mongoose
    .connect(uri)
    .then(() => {
      console.log('Connected to database');
    })
    .catch((error: any) => {
      console.log('Connection failed');
      console.error(error);
    });
}
