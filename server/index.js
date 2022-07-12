const MONGO_LINK = require('./API/mongoLink');
const mongoose = require('mongoose'); // ODM (Object Document Mappe) - like ORM (Object Relational Mapper) but for nosql
const authRouter = require('./authRouter');
const express = require('express');

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
  console.log('request');
});

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(MONGO_LINK);
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
