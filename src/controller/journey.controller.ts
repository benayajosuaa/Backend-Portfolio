import type { Request, Response } from "express";
import { JourneyServices } from "../services/journey.services.js";
import fs from "fs";
import path from "path";

export const JourneyController = {
  async getAll(_req: Request, res: Response) {
    try {
      const journeys = await JourneyServices.getAll();
      res.status(200).json({ data: journeys });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "failed to fetch journeys" });
    }
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "id must be number" });
    }

    const journey = await JourneyServices.getById(id);
    if (!journey) {
      return res.status(404).json({ message: "Journey not found" });
    }

    res.status(200).json({ data: journey });
  },

  async create(req: Request, res: Response) {
    try {
      const file = req.file;
      const { title, type, excerpt, year, order_index, content } = req.body;

      if (!file) {
        return res.status(400).json({
          message: "Cover image wajib diupload",
        });
      }

      if (!title || !type || !excerpt || !year || !order_index) {
        return res.status(400).json({
          message: "Field wajib belum lengkap",
        });
      }

      const now = new Date();

      const newJourney = await JourneyServices.create({
        title,
        type,
        excerpt,
        content,
        year: Number(year),
        order_index: Number(order_index),
        cover_image: `/uploads/journeys/${file.filename}`,
        created_at: now,
        updated_at: now,
      });

      res.status(201).json({ data: newJourney });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "failed to create journey",
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "id must be number" });
      }

      const existing = await JourneyServices.getById(id);
      if (!existing) {
        return res.status(404).json({ message: "Journey not found" });
      }

      const file = req.file;

      const data: any = {
        ...req.body,
        year: req.body.year ? Number(req.body.year) : existing.year,
        order_index: req.body.order_index
          ? Number(req.body.order_index)
          : existing.order_index,
        updated_at: new Date(),
      };

      // 🔥 hapus gambar lama jika upload baru
      if (file) {
        const oldPath = path.join(process.cwd(), existing.cover_image);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
        data.cover_image = `/uploads/journeys/${file.filename}`;
      }

      const updated = await JourneyServices.update(id, data);
      res.status(200).json({ data: updated });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "failed to update journey",
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "id must be number" });
      }

      const existing = await JourneyServices.getById(id);
      if (!existing) {
        return res.status(404).json({ message: "Journey not found" });
      }

      // 🗑️ hapus file gambar
      const imgPath = path.join(process.cwd(), existing.cover_image);
      if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
      }

      await JourneyServices.delete(id);
      res.status(200).json({ message: "deleted" });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "failed to delete journey",
      });
    }
  },

    async updateImage(req: Request, res: Response) {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const journeyId = Number(req.params.id);

    // ⬇️ contoh hapus file lama (opsional tapi recommended)
    /*
    const old = await prisma.journey.findUnique({ where: { id: journeyId }});
    if (old?.cover_image) {
      fs.unlinkSync(path.join(process.cwd(), old.cover_image));
    }
    */

    // simpan path baru ke DB
    /*
    await prisma.journey.update({
      where: { id: journeyId },
      data: { cover_image: `/uploads/journeys/${req.file.filename}` }
    });
    */

    return res.json({
      message: "Image updated",
      filename: req.file.filename,
    });
  },

};
