require('dotenv').config()
const moongose = require('mongoose');

async function connectDb() {
  const URI =  process.env.MONGO_URI;
  try {
    await moongose.connect(URI);

    console.log('Connected to DB');
  } catch (error) {
    console.error('Error connecting DB', error);
    process.exit(1);
  };
};

module.exports = connectDb;
