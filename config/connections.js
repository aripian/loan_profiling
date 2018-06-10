const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    host: 'localhost',
    user: 'postgres',
    password: 'data01',
    database: 'profiling',
    port: 5432,
  },
  staging: {
    host: 'localhost',
    user: 'postgres',
    password: 'data01',
    database: 'profiling',
    port: 5432,
  },
  production: {
    host: 'localhost',
    user: 'postgres',
    password: 'data01',
    database: 'profiling',
    port: 5432,
  }
};

module.exports = config[env];
