import * as express from 'express';

import loginRouter from './routes/login';

const app = express();

app.use('/login', loginRouter);

app.listen(46400, () => {
    console.log('Server started on port 46400...');
});

