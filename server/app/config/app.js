import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

// Connect to mongoDB
mongoose.connect(process.env.MONGO_URL);

import routes from './../routes/';

const app = express();
const router = express.Router();

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(router);

// Fail safe for routes that don't exist
router.get('*', (req, res) => {
    res.send({ message: 'You may be lost! Go home'})
})

app.use('/api', router);

export default app;
