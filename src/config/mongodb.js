const mongoose = require('mongoose');

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'root';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'bolinho';
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DATABASE = process.env.MONGO_DATABASE || 'star-data-base';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

const connection = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: 'admin'
});

const connect = () => {
  return new Promise((resolve, reject) => {
    connection.on('open', () => {
      console.log('MongoDB connected successfully');
      resolve();
    });
    connection.on('error', (err) => {
      console.log('MongoDB connection error:', err);
      reject(err);
    });
  });
}


module.exports = {
  connection,
  connect
};
