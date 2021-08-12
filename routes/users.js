import express from "express";
import {
	createUser,
	deleteUser,
	findUser,
	getUser,
	patchUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/users", getUser);

router.post("/users", createUser);

router.get("/users/:id", findUser);

router.delete("/users/:id", deleteUser);

router.patch("/users/:id", patchUser);

export default router;
