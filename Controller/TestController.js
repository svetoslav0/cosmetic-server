/**
 */
export class TestController {
    /**
     * @param {Object} request
     */
    constructor(request) {
        this._request = request;
    }

    /**
     * @return {Object}
     */
    async test() {
        return {
            data: 'some data',
        };
    }
}
