import { Router } from "express"
import { ContactController } from "../controller/contact.controller.js"
import { verifyToken } from "../middlewares/auth.middlewares.js"
import { requireAdmin } from "../middlewares/role.middlewares.js"

const router = Router()

// public
router.post("/", ContactController.create)

// admin
router.get("/", verifyToken, requireAdmin, ContactController.getAll)
router.get("/:id", verifyToken, requireAdmin, ContactController.getById)
router.post("/:id/reply", verifyToken, requireAdmin, ContactController.reply)
router.put("/:id/status", verifyToken, requireAdmin, ContactController.updateStatus)
router.delete("/:id", verifyToken, requireAdmin, ContactController.delete)

export default router