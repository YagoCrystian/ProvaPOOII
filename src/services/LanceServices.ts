import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {
  constructor() {}

  async listLances(id?: string) {
    try {
      if (id) {
        const lanceId = parseInt(id);
        const lance = await prisma.lance.findUnique({
          where: {
            id: lanceId,
          },
        });
        return lance;
      } else {
        const lances = await prisma.lance.findMany();
        return lances;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createLance(lance: Prisma.LanceCreateInput) {
    try {
      const newLance = await prisma.lance.create({
        data: lance,
      });
      return newLance;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateLance(id: string, lance: Prisma.LanceUpdateInput) {
    try {
      const updatedLance = await prisma.lance.update({
        where: {
          id: parseInt(id),
        },
        data: lance,
      });
      return updatedLance;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteLance(id: string) {
    try {
      const deletedLance = await prisma.lance.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedLance;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new LanceService();