const database = {
        databaseUrl: process.env.DATABASE_URL,
        dialect: process.env.DATABASE_DIALECT || 'postgres',
        logging: false,
        use_env_variable: 'DATABASE_URL',
        operatorsAliases: false
};

// DO NOT CHANGE EVER!!!
module.exports = database;
