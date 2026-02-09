import type { Request, Response } from "express";
import { WorkServices } from "../services/work.services.js";
import type { Prisma } from "@prisma/client";


export const WorkController = {

  async getAll(req: Request, res: Response) {
    try {
      const works = await WorkServices.getAll();
      return res.status(200).json({
        message: "success to get all works",
        data: works,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "failed to fetch works",
      });
    }
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        message: "id must be a number",
      });
    }

    try {
      const work = await WorkServices.getById(id);
      if (!work) {
        return res.status(404).json({
          message: "work not found",
        });
      }

      return res.status(200).json({
        message: "success to get work by id",
        data: work,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "failed to fetch work by id",
      });
    }
  },

  async create(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "Cover image wajib diupload",
        });
      }

      const {
        title,
        excerpt,
        status,
        order_index,
        github_url,
        demo_url,
        drive_url,
      } = req.body;

      if (!title || !excerpt || !status || !order_index) {
        return res.status(400).json({
          message: "Field wajib belum lengkap",
        });
      }

      const newWork = await WorkServices.create({
        title,
        excerpt,
        status,
        order_index: Number(order_index),
        github_url: github_url || undefined,
        demo_url: demo_url || undefined,
        drive_url: drive_url || undefined,
        cover_image: req.file.filename,
      });

      return res.status(201).json({
        message: "success to create work",
        data: newWork,
      });
    } catch (error) {
      console.error("CREATE WORK ERROR:", error);
      return res.status(400).json({
        message: "failed to create work",
      });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        message: "id must be a number",
      });
    }

    try {
      const updatedWork = await WorkServices.update(id, {
        ...req.body,
        order_index: Number(req.body.order_index),
      });

      return res.status(200).json({
        message: "success to update work",
        data: updatedWork,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "failed to update work",
      });
    }
  },

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        message: "id must be a number",
      });
    }

    try {
      await WorkServices.delete(id);
      return res.status(200).json({
        message: "success to delete work",
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "failed to delete work",
      });
    }
  },
};
