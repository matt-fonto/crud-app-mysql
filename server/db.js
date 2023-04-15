import mysql from "mysql";

// Create connection to database
// mysql = MySQL client for Node.js
export const db = mysql.createConnection({
  // passing the connection object
  host: "localhost",
  user: "root",
  password: "password",
  database: "basic-crud",
});
