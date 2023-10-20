require('dotenv').config();
const express = require('express');

const configExpress = require('./config/express');
const routes = require('./routes');
const connectDb = require('./config/database');

const api = express();

const PORT = process.env.EXPRESS_PORT || 8080

api.listen(PORT, async () => {
  configExpress(api)

  await connectDb()

  routes(api)

  console.log(`Server running on port http://localhost:${PORT}`)
});
