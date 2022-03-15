import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const port = process.env.PORT || 8000;
const apiRoot = process.env.API_ROOT || '127.0.0.1';
const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.listen(port, () => console.log(`Listening from http://${apiRoot}:${port}`));

export default app;
