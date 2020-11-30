import express from "express";
import request from "request";

export const aocRouter = express.Router();

const aocLink =
	"https://adventofcode.com/2020/leaderboard/private/view/635500.json";

aocRouter.get("/api/aoc/all", async (req, res) =>
	request(aocLink, (err, res, body) => {
		console.log(body);
		return JSON.parse(body);
	})
);
