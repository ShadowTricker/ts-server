import * as express from 'express';

import { readFile } from '../libs/utils';

const router = express.Router();

router.get('/', (req, res) => {
    readFile('src/assets/json/login.json').then(json => {
        res.json({ ...JSON.parse(json) });
    }).catch(err => {
        console.log(err);
    })
});

export default router;