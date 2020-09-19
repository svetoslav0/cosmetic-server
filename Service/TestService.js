// eslint-disable-next-line no-unused-vars
import {TestRepository} from '../Repository/TestRepository.js';

/**
 */
export class TestService {
    /**
     * @param {TestRepository} testRepository
     */
    constructor(testRepository) {
        this._testRepository = testRepository;
    }

    /**
     * @return {Promise<*>}
     */
    async getAll() {
        return await this._testRepository.findAll();
    }
}
