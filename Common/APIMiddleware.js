// eslint-disable-next-line no-unused-vars
import express from 'express';
import {APIResponse} from './APIResponse.js';
import {APIError} from './APIError.js';

const RESPONSE_TIMEOUT = 30 * 1000; // 30 sec

/**
 */
export class APIMiddleware {
    /**
     * @param {express.Request} request
     * @param {express.Response} response
     */
    constructor(request, response) {
        this._request = request;
        this._response = response;
    }

    /**
     * @param {Object} data
     * @param {number} status
     */
    sendResponse(data, status) {
        // todo: parse errors

        const response = new APIResponse(this._response);
        response.send(data, status);
    }

    /**
     * @param {Object} result
     * @return {Promise<void>}
     */
    async sendResponsePromise(result) {
        await Promise
            .race(
                [
                    result.then((data) => {
                        console.log('Result data built');
                        return data;
                    }),
                    this._startApiTimeout(),
                ],
            )
            .then((data) => {
                this._removeTimeout();
                this.sendResponse(data);
            });
    }

    /**
     * @return {Promise}
     * @private
     */
    async _startApiTimeout() {
        return new Promise((resolve, reject) => {
            this._timeout = setTimeout(() => {
                reject(new APIError(APIError.ERRORS.RESPONSE_TIMEOUT));
            }, RESPONSE_TIMEOUT);
        });
    }

    /**
     * @private
     */
    _removeTimeout() {
        clearTimeout(this._timeout);
    }
}
