import express from "express";
import type { Request, Response } from "express"
import dotenv from "dotenv";
import prisma from "./lib/prisma.js";
import cors from "cors";
import path from "path";

import journeyRoute from "./routes/journey.route.js"
import authRoute from "./routes/auth.route.js"
import workRoute from "./routes/works.route.js"
import contactRoute from "./routes/contact.route.js"

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await prisma.$connect();
console.log("Prisma connected");

app.use("/uploads",express.static(path.join(process.cwd(), "uploads")))
app.use("/auth", authRoute)
app.use("/journeys", journeyRoute)
app.use("/works", workRoute)
app.use("/contact", contactRoute)

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("halobenaya testing API");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});