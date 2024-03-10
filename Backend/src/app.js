import express from 'express';
import { router } from './routes.js';

import cors from 'cors';

const app = express()

app.use(cors());

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE',],
        allowedHeaders: ['Content-Type',],
    }
));
  
app.use(express.json())
app.use(router)

export { app };