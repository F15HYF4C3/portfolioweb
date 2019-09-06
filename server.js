const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const massive = require("massive");
// const session = require("express-session");
require("dotenv").config();
const path = require("path");

const { PORT, SESSION_SECRET, DATABASE_URL } = process.env;
const app = express();

massive(DATABASE_URL)
	.then(dbPresence => {
		app.set("db", dbPresence);
		console.log("Data; saving the world one semicolon at a time.");
	})
	.catch(err => {
		console.log(`You have been defeated by ${err}.`);
	});
app.use(express.static(path.join(__dirname, "/build")));

app.use(cors());
app.use(bodyParser.json());
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 30000 }
	})
);

// endpoint middleware below catches anything that starts with "api"
app.use("/api/*", (req, res, next) => {
	if (!req.session.user) {
		res.send({
			success: false,
			message: "You will need to login to access this page."
		});
	} else {
		next();
	}
});

app.get("/*", (req, res) => {
	res.sendFile("index.html", {
		root: path.join(__dirname, "build")
	});
});

//GET first - then write your create, update, delete (POST, PUT\PATCH, DELETE)

app.listen(PORT, () => {
	console.log(`Man the bow! portside ${PORT}!`);
});
