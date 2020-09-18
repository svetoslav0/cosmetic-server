import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import config from './config.js';
import routes from './routes.js';

const app = express();
// eslint-disable-next-line new-cap
const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({extended: true}));

const port = config.node_port;

app.use(routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
