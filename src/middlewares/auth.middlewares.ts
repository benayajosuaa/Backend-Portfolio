import type { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: {
    id: number;
    role: "admin" | "user";
  };
}

export const verifyToken: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ message: "server misconfiguration" });
  }

  try {
    const decoded = jwt.verify(token, secret) as {
      id: number;
      role: "admin" | "user";
    };

    // ⬇️ CAST DI SINI, BUKAN DI SIGNATURE
    (req as AuthRequest).user = decoded;

    next();
  } catch {
    return res.status(401).json({ message: "invalid token" });
  }
};
