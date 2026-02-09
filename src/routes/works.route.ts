import { Router } from "express";
import { WorkController } from "../controller/works.controller.js";
import { verifyToken } from "../middlewares/auth.middlewares.js";
import { requireAdmin } from "../middlewares/role.middlewares.js";
import { uploadWorkImage } from "../middlewares/upload.middlewares.js"

const router = Router();

// PUBLIC
router.get("/", WorkController.getAll);
router.get("/:id", WorkController.getById);

// ADMIN ONLY

router.post(
    "/",
    verifyToken,
    requireAdmin,
    uploadWorkImage.single("cover_image"),
    WorkController.create 
);


router.put("/:id", verifyToken, requireAdmin, WorkController.update);
router.delete("/:id", verifyToken, requireAdmin, WorkController.delete);

export default router;
