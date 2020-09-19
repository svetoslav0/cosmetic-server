// eslint-disable-next-line no-unused-vars
import express from 'express';
// eslint-disable-next-line no-unused-vars
import {TestService} from '../Service/TestService.js';

/**
 */
export class TestController {
    /**
     * @param {TestService} testService
     */
    constructor(testService) {
        this._testService = testService;
    }

    /**
     * @param {express.Request} request
     * @return {Promise<Object>}
     */
    async test(request) {
        const data = await this._testService.getAll();

        return {
            data,
        };
    }
}
