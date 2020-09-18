import express from 'express';
import {TestController} from '../Controller/TestController.js';
import {APIMiddleware} from '../Common/APIMiddleware.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/test', (request, response) => {
    new APIMiddleware(request, response)
        .sendResponsePromise(new TestController(request).test());
});

export default router;
