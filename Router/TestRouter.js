import express from 'express';
import {APIMiddleware} from '../Common/APIMiddleware.js';

/**
 */
class TestRouter {
    /**
     * @param {Object} controller
     */
    constructor(controller) {
        // eslint-disable-next-line new-cap
        this._router = express.Router();
        this._controller = controller;
    }

    /**
     * @return {Router}
     */
    registerRoutes() {
        this._router.get('/test', (request, response) => {
            new APIMiddleware(request, response)
                .sendResponsePromise(this._controller.test(request));
        });

        return this._router;
    }
}

export default TestRouter;
