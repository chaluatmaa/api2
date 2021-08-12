import express from "express";
import bodyParser from "body-parser";
import router from "./routes/users.js";
const app = express();
const PORT = 5000 || process.env.PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("API FROM JS MASTERY");
});

app.use(router);

app.listen(PORT, () => {
	console.log("Listening to PORT ", PORT);
});
