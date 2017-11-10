import open  from 'open';
import http from 'http';
import app from './app/config/app';

const port = process.env.PORT || 4040;
app.listen(port, (err) => err ? console.log(err) : open(`http://localhost:${port}`));
console.log(`See me taking a walk here http://localhost:${port}`);
