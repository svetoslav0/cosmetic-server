const DEFAULT_ENV = 'dev';

const config = {
    dev: {
        node_port: 3300,
        db: {
            database: 'cosmetic',
            host: 'localhost',
            user: 'cosmetic',
            password: 'cosmetic-password',
        },
    },
    test: {
        node_port: 5500,
        db: {
            database: '',
            host: '',
            user: '',
            password: '',
        },
    },
    prod: {
        node_port: 8801,
        db: {
            database: '',
            host: '',
            user: '',
            password: '',
        },
    },
};

const envArg = process.argv[2];

const env = (envArg && config[envArg]) ?
    envArg :
    DEFAULT_ENV;

console.log(`Running on "${env}" environment`);

export default config[env];
