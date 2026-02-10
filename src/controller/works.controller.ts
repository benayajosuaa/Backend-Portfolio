import type { Request, Response } from "express";
import { WorkServices } from "../services/work.services.js";

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
      // Validasi file upload
      if (!req.file) {
        return res.status(400).json({
          message: "cover_image is required",
        });
      }

      // Ambil path file yang diupload
      const coverImagePath = `/uploads/works/${req.file.filename}`;

      // Gabungkan data body dengan file path
      const workData = {
        ...req.body,
        cover_image: coverImagePath,
        order_index: Number(req.body.order_index), // Pastikan number
        created_at: new Date(),
        updated_at: new Date(),
      };

      const newWork = await WorkServices.create(workData);
      
      return res.status(201).json({
        message: "success to create work",
        data: newWork,
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        message: "failed to create work",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  },

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "id must be a number" });
    }

    try {
      const data: any = {};

      if (req.body.title) data.title = req.body.title;
      if (req.body.status) data.status = req.body.status;
      if (req.body.excerpt) data.excerpt = req.body.excerpt;

      if (req.body.order_index !== undefined) {
        data.order_index = Number(req.body.order_index); 
      }

      if (req.body.github_url) data.github_url = req.body.github_url;
      if (req.body.demo_url) data.demo_url = req.body.demo_url;
      if (req.body.drive_url) data.drive_url = req.body.drive_url;

      if (req.file) {
        data.cover_image = `/uploads/works/${req.file.filename}`;
      }

      if (Object.keys(data).length === 0) {
        return res.status(400).json({
          message: "no data to update",
        });
      }

      const updatedWork = await WorkServices.update(id, data);

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
