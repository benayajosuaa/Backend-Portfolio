import express from "express";
import type { Request, Response } from "express"
import dotenv from "dotenv";
import prisma from "./lib/prisma.js";

import journeyRoute from "./routes/journey.route.js"
import authRoute from "./routes/auth.route.js"
import workRoute from "./routes/works.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await prisma.$connect();
console.log("Prisma connected");

app.use("/auth", authRoute)
app.use("/journeys", journeyRoute)
app.use("/works", workRoute)

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("halobenaya testing API");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});