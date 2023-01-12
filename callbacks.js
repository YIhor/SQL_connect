const sql = require('mssql')
var config = {
    server: 'test',
    database: 'test',
    user: 'test',
    password: 'test',
    port: 1433
};
const id = 585;

sql.connect(config, err => {
    const request = new sql.Request()
    request.query(request.template`select * from Users where id = ${id}`, (err, result) => {
        // ... error checks
        console.log(result)
    })
})

sql.on('error', err => {
    console.log(err);
})
