// Require mysql
var mysql = require("mysql");

// Set up MySQL connection. If deployed through Heroku, use JAWSDB
var connection;

if(process.env.JAWSDB_URL){
  connection = "mysql://tkgz7fzuukbdr4m7:neqyig6hi9a2gk6l@lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ezddphwlec9p1ie4"
}else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
