import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {
  constructor() {}

  async listLeiloes(id?: string) {
    try {
      if (id) {
        const leilaoId = parseInt(id);
        const leilao = await prisma.leilao.findUnique({
          where: {
            id: leilaoId,
          },
        });
        return leilao;
      } else {
        const leiloes = await prisma.leilao.findMany();
        return leiloes;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createLeilao(leilao: Prisma.LeilaoCreateInput) {
    try {
      const newLeilao = await prisma.leilao.create({
        data: leilao,
      });
      return newLeilao;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateLeilao(id: string, leilao: Prisma.LeilaoUpdateInput) {
    try {
      const updatedLeilao = await prisma.leilao.update({
        where: {
          id: parseInt(id),
        },
        data: leilao,
      });
      return updatedLeilao;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteLeilao(id: string) {
    try {
      const deletedLeilao = await prisma.leilao.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedLeilao;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new LeilaoService();