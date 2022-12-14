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

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

app.use('/api/movies', moviesRouter);

//Users router
app.use('/api/users', usersRouter);

//genres router
app.use('/api/genres', genresRouter);

app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});