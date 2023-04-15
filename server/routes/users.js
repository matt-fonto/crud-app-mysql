// routes = where we define the routes for our application
import express from "express";
import { getUsers } from "../controllers/user.js";

// Create a new router instance
const router = express.Router();

// when we hit the route /users, we want to call the getUsers function
router.get("/", getUsers);

export default router;
