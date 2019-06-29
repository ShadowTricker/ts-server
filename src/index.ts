import * as express from 'express';

import loginRouter from './routes/login';

const app = express();

app.use('/login', loginRouter);

app.listen(4000, () => {
    console.log('Server started...');
});

