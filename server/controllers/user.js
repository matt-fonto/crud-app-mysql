// controllers = where we define the functions that are called when we hit a route

// we import the db from the db.js file
import { db } from "../db.js";

// we define the getUsers function
export const getUsers = (req, res) => {
  // we define the sql query
  const sql = "SELECT * FROM users";

  //db.query = function that takes in a sql query -created above - and a callback function
  db.query(sql, (err, result) => {
    // if there is an error, we return the error message and the sql query
    if (err) return res.json({ error: err.message, sql: err.sql });

    // if there is no error, we return the result of the query
    return res.status(200).json(result);
  });
};
