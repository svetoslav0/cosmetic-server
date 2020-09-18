import status from 'http-status';

/**
 * @typedef {Object} ErrorData
 * @property {number} status
 * @property {string} code
 * @property {string} message
 */

const ERRORS = {
    RESPONSE_TIMEOUT: {
        status: status.REQUEST_TIMEOUT,
        code: 'RESPONSE_TIMEOUT',
        message: 'The server could not process the request within 30s. ' +
            'Payload too large or server overloaded.',
    },
};

/**
 */
export class APIError extends Error {
    /**
    */
    static get ERRORS() {
        return ERRORS;
    }

    /**
     * @param {ErrorData} error
     */
    constructor(error) {
        super(error.message);
        this._error = Object.assign({}, error);
    }
}
