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
connectAndQuery();
async function connectAndQuery() {
    const searchEmail = "protools@test.com"
    const id = 585;
    try {   
        const promise = new Promise((resolve, reject) => {
        const poolConnection =  sql.connect(config)
            resolve(poolConnection);
      });
      promise.then((value) => {
        console.log(value); //this value not displayed
      });    
        console.log("Reading rows from the Table...");   
    } catch (err) {
        console.error(err.message);
    }
}
