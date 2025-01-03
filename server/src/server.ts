import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { connectToDB } from './database';

dotenv.config();
const app = express();

const { ATLAS_URI } = process.env;
const PORT = process.env['PORT'] || 5200;

if (!ATLAS_URI) {
  console.error(
    'No ATLAS_URI environment variable has been defined in config.env'
  );
  process.exit(1);
}

connectToDB(ATLAS_URI)
  .then(() => {
    app.use(cors());

    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}...`);
    });

    app.get('/', (req, res) => {
      res.json({ message: 'Hello World' });
    });
  })
  .catch((error: any) => console.error(error));

export default app;
