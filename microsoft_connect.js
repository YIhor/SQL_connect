var Connection = require('tedious').Connection;  
    var config = {  
        server: 'test',  
        authentication: {
            type: 'default',
            options: {
                userName: 'test', 
                password: 'test'  
            }
        },
        options: {
            encrypt: true,
            database: 'test'  
        }
    }; 
    var connection = new Connection(config);  
    connection.on('connect', function(err) {   
        console.log("Connected");  
        executeStatement();  
    });  
    
    const id = 585;

    connection.connect();
  
    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        request = new Request(`SELECT Email, Id, Salt FROM Users WHERE Id = ${id} `, function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
        });
        connection.execSql(request);  
    }
