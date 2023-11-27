import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioService {
  constructor() {}

  async listUsuarios(id?: string) {
    try {
      if (id) {
        const userId = parseInt(id);
        const usuario = await prisma.usuario.findUnique({
          where: {
            id: userId,
          },
        });
        return usuario;
      } else {
        const usuarios = await prisma.usuario.findMany();
        return usuarios;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createUsuario(usuario: Prisma.UsuarioCreateInput) {
    try {
      const newUsuario = await prisma.usuario.create({
        data: usuario,
      });
      return newUsuario;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateUsuario(id: string, usuario: Prisma.UsuarioUpdateInput) {
    try {
      const updatedUsuario = await prisma.usuario.update({
        where: {
          id: parseInt(id),
        },
        data: usuario,
      });
      return updatedUsuario;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteUsuario(id: string) {
    try {
      const deletedUsuario = await prisma.usuario.delete({
        where: {
          id: parseInt(id),
        },
      });
      return deletedUsuario;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new UsuarioService();