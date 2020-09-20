// eslint-disable-next-line no-unused-vars
import mysql from 'mysql';
import config from '../../Config/config.js';

/**
 */
export class MySqlFactory {
    /**
     */
    constructor() {
        this._db = this._createConnection();
    }

    /**
     * @param {string} queryString
     * @param {any[]} params
     * @return {Promise<any>}
     */
    async query(queryString, params = []) {
        return new Promise(async (resolve, reject) => {
            await this._db.query(queryString, params, (err, rows) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }

                resolve(rows);
            });
        });
    }

    /**
     * @return {*}
     * @private
     */
    _createConnection() {
        const dbConfig = this._getDatabaseConfig();
        console.log('Establishing database config...');

        return mysql.createConnection(dbConfig);
    }

    /**
     * @return {DatabaseConfig}
     * @private
     */
    _getDatabaseConfig() {
        return {
            database: config.db.database,
            host: config.db.host,
            user: config.db.user,
            password: config.db.password,
        };
    }
}
