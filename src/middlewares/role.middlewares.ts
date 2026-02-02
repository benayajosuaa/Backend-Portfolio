import type { RequestHandler } from "express";
import type { AuthRequest } from "./auth.middlewares.js";

export const requireAdmin: RequestHandler = (req, res, next) => {
  const authReq = req as AuthRequest;

  if (!authReq.user) {
    return res.status(401).json({ message: "unauthorized" });
  }

  if (authReq.user.role !== "admin") {
    return res.status(403).json({ message: "admin only" });
  }

  next();
};
