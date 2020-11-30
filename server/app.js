const express = require("express");
const cors = require("cors");

let bodyParser = require("body-parser");
const app = express();

// App configuration
app.use(cors());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.json());
app.use(express.static("../client/build"));

app.set("port", process.env.PORT || 5000);

// Test route to ensure up and running
app.get("/api/ping", (req, res) => {
	return res.send("pong");
});

// Catch all to avoid "cannot find /*" error
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

// Listening...
app.listen(app.get("port"), () => {
	console.log(`Server running on port ${app.get("port")}.`);
}).on("error", (e) => console.error(e));
