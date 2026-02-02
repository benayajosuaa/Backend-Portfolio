import prisma from "../lib/prisma.js";
import { typeJourney } from "../generated/prisma/index.js";

export interface JourneyInterface {
  type: typeJourney;
  title: string;
  excerpt: string;
  cover_image: string;
  year: number;
  content?: string;
  order_index: number;
}

export interface JourneyCreateInput {
  type: typeJourney;
  title: string;
  excerpt: string;
  cover_image: string;
  year: number;
  content?: string;
  order_index: number;
  created_at: Date;
  updated_at: Date;
}

export const JourneyServices = {
  async getAll() {
    return prisma.journeys.findMany({
      orderBy: { order_index: "asc" },
    });
  },

  async getById(id: number) {
    return prisma.journeys.findUnique({
      where: { id },
    });
  },

  async create(data: JourneyCreateInput) {
    return prisma.journeys.create({
      data
    });
  },

  async update(id: number, data: JourneyInterface) {
    return prisma.journeys.update({
      where: { id },
      data,
    });
  },

  async delete(id: number) {
    return prisma.journeys.delete({
      where: { id },
    });
  },


};