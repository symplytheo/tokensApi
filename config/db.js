const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGODB_URI, options)
    .then(() => {
      console.log(`[Database]: Connected successfully`);
    })
    .catch((err) => {
      console.log(`[DB Error]: ${err}`);
      process.exit();
    });
};

module.exports = { connectDatabase };
