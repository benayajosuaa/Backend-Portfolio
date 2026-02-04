import type { Request, Response } from "express";
import { ContactService } from "../services/contact.services.js";
import { statusContact } from "@prisma/client";

export const ContactController = {
  // ADMIN
  async getAll(req: Request, res: Response) {
    try {
      const messages = await ContactService.getAll();
      return res.status(200).json({
        data: messages,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "failed to getAll",
      });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          message: "id must be a number",
        });
      }

      const message = await ContactService.getById(id);
      if (!message) {
        return res.status(404).json({
          message: "contact message not found",
        });
      }

      return res.status(200).json({
        message: "success to get contact message by id",
        data: message,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "failed to get contact message",
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          message: "id must be a number",
        });
      }

      await ContactService.delete(id);

      return res.status(200).json({
        message: "contact message deleted successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "failed to delete contact message",
      });
    }
  },

  async reply(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { markdown } = req.body;

      if (isNaN(id) || !markdown) {
        return res.status(400).json({
          message: "invalid id or markdown is required",
        });
      }

      await ContactService.reply(id, markdown);

      return res.status(200).json({
        message: "reply has sent successfully",
      });
    } catch (error) {
      console.error("REPLY ERROR:", error);
      return res.status(400).json({
        message: "failed to reply contact message",
        error: String(error),
      });
    }
  },

  async updateStatus(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { status } = req.body;

      if (
        isNaN(id) ||
        !Object.values(statusContact).includes(status)
      ) {
        return res.status(400).json({
          message: "invalid id or status",
        });
      }

      await ContactService.updateStatus(id, status);

      return res.status(200).json({
        message: "status updated successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "failed to update status",
      });
    }
  },

  // PUBLIC
  async create(req: Request, res: Response) {
    try {
      const contactmessage = await ContactService.create(req.body);
      return res.status(201).json({
        message: "message sent successfully",
        data: contactmessage,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "failed to send message",
      });
    }
  },
};
