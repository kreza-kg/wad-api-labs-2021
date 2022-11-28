import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import usersRouter from './api/users';
import './db';
import './seedData';
dotenv.config();


const app = express();

const port = process.env.PORT;

app.use('/api/movies', moviesRouter);

//Users router
app.use('/api/users', usersRouter);

//genres router
app.use('/api/genres', genresRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});