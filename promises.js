const sql = require('mssql')
var config = {
    server: 'test',
    database: 'test',
    user: 'test',
    password: 'test',
    port: 1433
};
const id = 585;


sql.connect(config).then(pool => {
    // Query
    
    return pool.request()
        .query(`select * from Users where id = ${id}`)
}).then(result => {
    console.dir(result)
}).catch(err => {
    console.error(err.message);
});
