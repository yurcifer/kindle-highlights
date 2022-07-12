const { MongoClient } = require('mongodb');
const { MONGO_LINK } = require('./API/mongoLink');

const client = new MongoClient(MONGO_LINK);
const start = async () => {
  try {
    await client.connect();
    console.log('ok');
    const users = client.db('highlightsDB').collection('users');
    const user = await users.findOne({ name: 'admin' });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

start();
