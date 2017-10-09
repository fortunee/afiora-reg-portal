import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import webpack from 'webpack';
import path from 'path';
import config from '../../../../webpack.config';

// Manage environment variables
dotenv.config();

// Connect to mongoDB
mongoose.connect(process.env.MONGO_URL);

import routes from './../routes/';

const app = express();
const router = express.Router();

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(router);

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Fail safe for routes that don't exist
app.get('*', (req, res) => {
    res.sendFile(path.join( __dirname, '../../../client/index.html'));
});

app.use('/api', router);

export default app;
