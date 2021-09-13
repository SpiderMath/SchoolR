const express = require("express");

const app = express();

app.listen(process.env.API_PORT, () => console.log(`Listening for API calls on port ${process.env.API_PORT}!`));

app.get("/", (req, res) => {
	console.log("What");
	res.send({ "hi": "There" });
});

module.exports = app;