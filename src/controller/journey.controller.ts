import type { Request, Response } from "express";
import { JourneyServices } from "../services/journey.services.js";

export const JourneyController = {
  async getAll(req: Request, res: Response) {
    try {
      const journeys = await JourneyServices.getAll();
      res.status(200).json({
        message: "success to get all journeys section",
        data: journeys,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "failed to fetch journeys",
        error,
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
      const journey = await JourneyServices.getById(id);
      if (!journey) {
        return res.status(404).json({
          message: "Journey not found",
        });
      }
      res.status(200).json({
        message: "success to get journey by id",
        data: journey,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "failed to get journey by id",
        error,
      });
    }
  },

  async create(req: Request, res: Response) {
    try {
      const newJourney = await JourneyServices.create(req.body);
      res.status(201).json({
        message: "success to create a new journey",
        data: newJourney,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "failed to create journey",
        error,
      });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          message: "id must be a number",
        });
      }
      const updateJourney = await JourneyServices.update(id, req.body);
      res.status(200).json({
        message: "success to update journey",
        data: updateJourney,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "failed to update journey",
        error,
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
      await JourneyServices.delete(id);
      res.status(200).json({
        message: "success to delete a journey",
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "failed to delete journey",
        error,
      });
    }
  },
};
