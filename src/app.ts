import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send({ Message: 'Hello World' });
});

export default app;
