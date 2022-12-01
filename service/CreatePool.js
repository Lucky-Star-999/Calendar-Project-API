const {Pool} = require('pg');

// Create pool
/*exports.createPool = () => {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'calendarproject',
        password: '123456',
        port: 5432,
    });

    return pool;
}*/

exports.createPool = () => {
    const pool = new Pool({
        user: 'xjqrwizk',
        host: 'satao.db.elephantsql.com',
        database: 'xjqrwizk',
        password: '42AG2MoJFt70tuvtA-MzGTT62O_Nh5Ne',
        port: 5432,
    });

    return pool;
}
