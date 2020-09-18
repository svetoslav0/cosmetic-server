// eslint-disable-next-line no-unused-vars
import express from 'express';
import status from 'http-status';

const DEFAULT_HTTP_STATUS = status.OK;

/**
 */
export class APIResponse {
    /**
     * @param {express.Response} response
     */
    constructor(response) {
        this._response = response;
    }

    /**
     * @param {Object} responseContent
     * @param {number} status
     */
    send(responseContent, status = DEFAULT_HTTP_STATUS) {
        this._response.status(status);
        this._response.send(responseContent);
    }
}
