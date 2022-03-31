'use strict';

const express = require('express');
require('dotenv/config');
const cors = require('cors');
const { connectDatabase } = require('./config/db');
const { tokenRoutes } = require('./routes/tokenRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOpts = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOpts));

// token routes
app.use('/tokens', tokenRoutes);

app.get('/', (req, res) => {
  res.send('Hello mon API');
});

app.listen(PORT, () => {
  console.log(`[Server]: Listening on port ${PORT}`);
});
