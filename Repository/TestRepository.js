// eslint-disable-next-line no-unused-vars
import {MySqlFactory} from '../Common/Database/MySqlFactory.js';

/**
 */
export class TestRepository {
    /**
     * @param {MySqlFactory} db
     */
    constructor(db) {
        this._db = db;
    }

    /**
     * @return {Promise<*>}
     */
    findAll() {
        const query = `
            SELECT
                *
            FROM
                test
        `;

        return this._db.query(query);
    }
}
