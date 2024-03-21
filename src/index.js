import 'dotenv/config';
import cors from 'cors';
import express, { urlencoded } from 'express';
import { v4 as uuidv4 } from 'uuid';

import models from './models';
import routes from './routes';

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//use
app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1]
    }

    next();
});

//routes
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message)


//port
app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`),
);