import type { Request, Response } from "express";
import { AuthServices } from "../services/auth.services.js";

export const AuthController = {
  // ======================
  // LOGIN
  // ======================
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          message: "email or password are required",
        });
      }

      const result = await AuthServices.login(email, password);

      // result WAJIB mengandung token
      return res.status(200).json({
        message: "login success",
        data: result,
      });
    } catch (error) {
      console.error(error);
      return res.status(401).json({
        message: "invalid email or password",
      });
    }
  },

  // ======================
  // REGISTER
  // ======================
  async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          message: "email or password are required",
        });
      }

      if (password.length < 6) {
        return res.status(400).json({
          message: "password must be at least 6 characters",
        });
      }

      const user = await AuthServices.register(email, password);

      return res.status(201).json({
        message: "register success",
        data: {
          id: user.id,
          email: user.email, 
          role: user.role,
        },
      });
    } catch (error: any) {
      console.error(error);

      if (error.code === "P2002") {
        return res.status(409).json({
          message: "email already registered",
        });
      }

      return res.status(400).json({
        message: "register failed",
      });
    }
  },
};
