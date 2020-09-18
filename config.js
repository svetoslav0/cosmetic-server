const DEFAULT_ENV = 'dev';

const config = {
    dev: {
        node_port: 3300,
    },
    prod: {
        node_port: 8801,
    },
};

const env = (process.argv[2] && config[process.argv[2]]) ?
    process.argv[2] :
    DEFAULT_ENV;

export default config[env];
