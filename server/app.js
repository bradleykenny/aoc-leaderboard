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
