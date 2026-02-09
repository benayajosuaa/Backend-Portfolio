import prisma from "../lib/prisma.js";
import { statusWork } from "@prisma/client";

export interface WorkInterface {
  title: string;
  excerpt: string;
  cover_image: string;
  github_url?: string;
  demo_url?: string;
  drive_url?: string;
  published_at?: Date;
  status: statusWork;
  order_index: number;
}

export interface WorkCreateInput {
    title: string;
    excerpt: string;
    cover_image: string;
    github_url?: string;
    demo_url?: string;
    drive_url?: string;
    published_at?: Date;
    status: statusWork;
    order_index: number;
    created_at: Date;
    updated_at: Date;
}

export const WorkServices = {
  async getAll() {
    return prisma.works.findMany({
      orderBy: { order_index: "asc" },
    });
  },

  async getById(id: number) {
    return prisma.works.findUnique({
      where: { id },
    });
  },

  async create(data: WorkCreateInput) {
    return prisma.works.create({
      data
    });
  },

  async update(id: number, data: WorkInterface) {
    return prisma.works.update({
      where: { id },
      data,
    });
  },

  async delete(id: number) {
    return prisma.works.delete({
      where: { id },
    });
  },
};
