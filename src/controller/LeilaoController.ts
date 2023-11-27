import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoService from "../services/LeilaoServices";

class LeilaoController {
    async createLeilao(req: Request, res: Response) {
        const dados: Prisma.LeilaoCreateInput = req.body;

        try {
            const newLeilao = await LeilaoService.createLeilao(dados);
            res.status(200).json({
                status: 'ok',
                newLeilao: newLeilao
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async listLeiloes(req: Request, res: Response) {
        try {
            const leiloes = await LeilaoService.listLeiloes();

            res.status(200).json({
                status: 'ok',
                leiloes: leiloes
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async updateLeilao(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.LeilaoUpdateInput = req.body;

        try {
            const leilaoAtualizado = await LeilaoService.updateLeilao(id, dados);
            res.status(200).json({
                status: 'ok',
                leilaoAtualizado: leilaoAtualizado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async deleteLeilao(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const leilaoDeletado = await LeilaoService.deleteLeilao(id);
            res.status(200).json({
                status: 'ok',
                leilaoDeletado: leilaoDeletado
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

export default new LeilaoController();