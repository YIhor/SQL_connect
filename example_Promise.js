const sql = require('mssql');

const config = {
    user: 'test', 
    password: 'test', 
    server: 'test', 
    port: 1433, 
    database: 'test',
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}
await connectAndQuery();
async function connectAndQuery() {
    const id = 585;
    try {
        const promise = new Promise((resolve, reject) => {
            const poolConnection =  sql.connect(config)
            resolve(poolConnection);
      });
      await promise.then((value) => {
        const resultSet = value.request().query(`SELECT Email, Id, Salt FROM Users WHERE Id = ${id} `)
        .then(function(result) {
          console.log(result) 
       })        
      });   
    } catch (err) {
        console.error(err.message);
    }
}
