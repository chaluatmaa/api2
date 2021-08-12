import { v4 as uuid } from "uuid";
let users = [];

export const getUser = (req, res) => {
	res.send(users);
};

export const createUser = (req, res) => {
	const user = req.body;
	const userWithID = { ...user, id: uuid() };
	users.push(userWithID);
	res.send(req.body);
};

export const findUser = (req, res) => {
	const { id } = req.params;
	const userFound = users.find((user) => user.id === id);
	res.send(userFound);
};

export const deleteUser = (req, res) => {
	const newUsers = users.filter((user) => user.id !== req.params.id);
	users = newUsers;
	res.send(newUsers);
};

export const patchUser = (req, res) => {
	const { age } = req.body;
	const userToBeUpdated = users.find((user) => user.id === req.params.id);
	if (age) {
		userToBeUpdated.age = age;
	}
	res.send(users);
};
