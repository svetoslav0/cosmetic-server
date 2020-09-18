import express from 'express';

import testRouter from './Router/TestRouter.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.use('/testPath', testRouter);

export default router;
