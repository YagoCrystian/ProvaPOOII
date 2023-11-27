import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioService from "../services/UsuarioServices";

class UsuarioController {
    async createUsuario(req: Request, res: Response) {
        const dados: Prisma.UsuarioCreateInput = req.body;

        try {
            const newUsuario = await UsuarioService.createUsuario(dados);
            res.status(200).json({
                status: 'ok',
                newUsuario: newUsuario
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async listUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await UsuarioService.listUsuarios();

            res.status(200).json({
                status: 'ok',
                usuarios: usuarios
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async updateUsuario(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.UsuarioUpdateInput = req.body;

        try {
            const usuarioAtualizado = await UsuarioService.updateUsuario(id, dados);
            res.status(200).json({
                status: 'ok',
                usuarioAtualizado: usuarioAtualizado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async deleteUsuario(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const usuarioDeletado = await UsuarioService.deleteUsuario(id);
            res.status(200).json({
                status: 'ok',
                usuarioDeletado: usuarioDeletado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }
}

export default new UsuarioController();