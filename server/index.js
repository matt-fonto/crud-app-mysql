import express from "express";
import cors from "cors";

import users from "./routes/users.js";

// Create a new express application instance
const app = express();

// app.use = used to add middleware to the request handling chain
// express.json() = parses incoming requests with JSON payloads
app.use(express.json());

// cors() = allows cross-origin requests, connecting the server to the client
// CORS = Cross-Origin Resource Sharing
app.use(cors());

// when we hit the route /users, we want to call the getUsers function
app.use("/", users);

app.listen(5000, () => {
  console.log("Server listening on port 5000!");
});
