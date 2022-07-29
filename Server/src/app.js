import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {connect} from './utils/database.connection';
import {routesInit} from './api/routes';

const app = express();
const PORT = process.env.PORT || '8090';

app.use(cors());
app.use(express.json({limit: '20mb'}));

app.get('/', (req, res, next) => {
  res.send(
    '<h1 style=text-align:center;color:blue;>Welcome to AR Fashion API Root 👚👕👘👖👟 </h1>',
  );
  next();
});-

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT} 🚀`);
  connect();
  routesInit(app);
});
