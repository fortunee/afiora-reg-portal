import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import routes from './app/routes/';

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

const port = process.env.PORT || 4040;
app.listen(port);

console.log(`See me taking a walk here http://localhost:${port}`);