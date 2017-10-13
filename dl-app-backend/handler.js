const AWS = require('aws-sdk');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'dl.crikdd7zhfgv.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'admin1234',
  port: 3306,
  database: 'DLmmic',
  debug: false
});

module.exports.getInsurance = (event, context, callback) => {

  const sql = 'SELECT * FROM `Insurance`';
  console.log("connect to db!");
  connection.query(sql, function (error, results, fields) {
    if (error) {
      console.log(" in error callback on connection function");
      console.log(error);
      return callback(error)
    }

    context.succeed(results);
    callback(null, results);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY
  // integration callback(null, { message: 'Go Serverless v1.0! Your function
  // executed successfully!', event });
};
