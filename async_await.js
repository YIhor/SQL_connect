const sql = require('mssql');

const config = {
    user: 'test', 
    password: 'test', 
    server: 'test', 
    database: 'test',
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

console.log("Starting...");
connectAndQuery();


async function connectAndQuery() {
    const id = 585;
    try {
        var poolConnection = await sql.connect(config);
        
        console.log("Reading rows from the Table...");
     
        var resultSet = await poolConnection.request().query(`SELECT Email, Id, Salt FROM Users WHERE Id = ${id} `);

        const result = resultSet.recordset
        console.log(result)
        console.log(result.length)
        
        
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}
