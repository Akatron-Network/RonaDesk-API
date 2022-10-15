import express, {Request,Response,Application} from 'express';
import * as dotenv from 'dotenv'
dotenv.config();

const app:Application = express();

app.listen(process.env.PORT, function () {
  console.log('App running...')
})