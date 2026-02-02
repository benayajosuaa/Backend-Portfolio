import { Router } from "express";
import { JourneyController } from "../controller/journey.controller.js";
import { verifyToken } from "../middlewares/auth.middlewares.js";
import { requireAdmin } from "../middlewares/role.middlewares.js";

const router = Router();



router.get("/", JourneyController.getAll);
router.get("/:id", JourneyController.getById);

// POST /journeys
router.post("/", verifyToken , JourneyController.create);

// PUT /journeys/:id
router.put("/:id",  verifyToken, requireAdmin, JourneyController.update);

// DELETE /journeys/:id
router.delete("/:id",  verifyToken, requireAdmin, JourneyController.delete);

export default router;
