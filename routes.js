import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

import {
    testRouter,
} from './kernel.js';

router.use('/testPath', testRouter.registerRoutes());

export default router;
