const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});


// ********DB_LOCAL******** //
// const databaseConfig = {
//     'host': '127.0.0.1',
//     'port': 5432,
//     'database': 'delivery',
//     'user': 'postgres',
//     'password': 'Nogthings#505'
// };

const databaseConfig = {
    'host': 'db-postgresql-sfo3-20957-do-user-14124880-0.b.db.ondigitalocean.com',
    'port': 25060,
    'database': 'delivery',
    'user': 'doadmin',
    'password': 'AVNS_kkdza4hd4etcg4Rpm5_'
};

const db = pgp(databaseConfig);

module.exports = db;