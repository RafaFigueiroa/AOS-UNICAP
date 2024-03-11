import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/example', (req, res) => {
    res.send('This is an example');
});


app.listen(port, () => 
    console.log('Example app listening on port 3000!'),
);