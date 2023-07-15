import express from 'express';
import morgan from 'morgan';
import movementRoute from './routes/movements.routes.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(express.json());

app.use('/api', movementRoute);

app.listen(PORT, () => {
    console.log('Sv on port ', PORT);
});