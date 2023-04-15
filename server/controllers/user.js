// controllers = where we define the functions that are called when we hit a route

// we import the db from the db.js file
import { db } from "../db.js";

// we define the getUsers function
const getUsers = (req, res) => {
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

// addUser
const addUser = (req, res) => {
  // we define the sql query with the ? to be replaced by the values
  const sql =
    "INSERT INTO users(`name`, `email`, `phone`, `birth_date`) VALUES(?)";

  // destructure the req.body object
  const { name, email, phone, birth_date } = req.body;

  // we define the values to be inserted into the sql query
  const values = [name, email, phone, birth_date];

  // we call the db.query function
  db.query(sql, [values], (err) => {
    if (err) return res.json({ error: err.message, sql: err.sql });

    return res.status(200).json("User added successfully");
  });
};

// updateUser
const updateUser = (req, res) => {
  const sql =
    "UPDATE users SET `name` = ?, `email` = ?, `phone` = ?, `birth_date` = ? WHERE `id` = ?";

  // destructure the req.body object
  const { name, email, phone, birth_date } = req.body;

  // we define the values to be inserted into the sql query
  const values = [name, email, phone, birth_date];

  // we call the db.query function
  db.query(sql, [...values, req.params.id], (err) => {
    if (err) return res.json({ error: err.message, sql: err.sql });

    return res.status(200).json("User updated successfully");
  });
};

// deleteUser
const deleteUser = (req, res) => {
  const sql = "DELETE FROM users WHERE `id` = ?";

  // we call the db.query function
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.json({ error: err.message, sql: err.sql });

    return res.status(200).json("User deleted successfully");
  });
};

export { getUsers, addUser, updateUser, deleteUser };
