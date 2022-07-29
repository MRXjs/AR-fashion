import mongoose from 'mongoose';
import config from '../configs/index';

let database;

const connect = async () => {
  const MONGODB_URL = config.DB_CONNECTION_STRING;

  if (database) return;

  mongoose
    .connect(MONGODB_URL, {})
    .then(connection => {
      database = connection;
      console.log('Database synced 😊');
    })
    .catch(err => {
      console.log(err.message, '😒');
    });
};

export {connect};
