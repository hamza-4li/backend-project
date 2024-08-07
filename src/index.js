import dotenv from 'dotenv';
import connectDB from './db/database.js';

dotenv.config({ path: './env' });

connectDB()
  .then(() => {
    app.listen.process.env.PORT || 8000,
      () => {
        console.log(`Server is listening at port: ${process.env.PORT}`);
      };
  })
  .catch((err) => {
    console.log('MongoDB conneection failed !!!', err);
  });

/*
import express from 'express';

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`);
    app.on('error', (error) => {
      console.log('ERROR: ', error);
      throw error;
    });

    app.listen(process.env.PORT),
      () => {
        console.log(`App is lidtening on port ${process.env.PORT}`);
      };

  } catch (error) {
    console.error('ERROR: ', error);
    throw error;
  }
})();
*/
