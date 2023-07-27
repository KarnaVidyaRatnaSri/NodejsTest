var mysql = require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysql123",
    database:"VidyaDatabase"
});
con.connect(function(err){
    if(err) throw err;
    else console.log("connection done");
});
function createDatabase(VidyaDatabase){
    const sql="Create database ${VidyaDatabase}";
    con.query(sql,(err,result)=>{
        if(err) throw err;
        console.log("Database successfully created");
    });
}
function createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS employees (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255),
        department VARCHAR(100),
        salary DECIMAL(10, 2)
      )`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      console.log(' employee table created successfully.');
    });
  }
createDatabase('VidyaDatabase');
createTable();