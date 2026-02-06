import { Router } from "express";
import { JourneyController } from "../controller/journey.controller.js";
import { verifyToken } from "../middlewares/auth.middlewares.js";
import { requireAdmin } from "../middlewares/role.middlewares.js";
import { uploadJourneyImage } from "../middlewares/upload.middlewares.js";



const router = Router();

router.get("/", JourneyController.getAll);
router.get("/:id", JourneyController.getById);

router.post(
  "/",
  verifyToken,
  requireAdmin,
  uploadJourneyImage.single("cover_image"),
  JourneyController.create
);

router.put(
    "/:id",
    verifyToken,
    requireAdmin,
    JourneyController.update
);

router.put(
  "/:id/image",
  verifyToken,
  requireAdmin,
  uploadJourneyImage.single("cover_image"),
  JourneyController.updateImage
);


router.delete(
  "/:id",
  verifyToken,
  requireAdmin,
  JourneyController.delete
);

export default router;
