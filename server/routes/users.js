// routes = where we define the routes for our application
import express from "express";
import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

// Create a new router instance
const router = express.Router();

// when we hit the route /users, we want to call the getUsers function
router.get("/", getUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
