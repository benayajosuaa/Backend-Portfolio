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
  (req, res, next) => {
    uploadJourneyImage.single("cover_image")(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          message: err.message || "Upload image failed",
        });
      }
      next();
    });
  },
  JourneyController.update
);


router.delete(
  "/:id",
  verifyToken,
  requireAdmin,
  JourneyController.delete
);

export default router;
