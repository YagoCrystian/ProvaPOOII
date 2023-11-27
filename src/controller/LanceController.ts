import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceService from "../services/LanceServices";

class LanceController {
    async createLance(req: Request, res: Response) {
        const dados: Prisma.LanceCreateInput = req.body;

        try {
            const newLance = await LanceService.createLance(dados);
            res.status(200).json({
                status: 'ok',
                newLance: newLance
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async listLances(req: Request, res: Response) {
        try {
            const lances = await LanceService.listLances();

            res.status(200).json({
                status: 'ok',
                lances: lances
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async updateLance(req: Request, res: Response) {
        const { id } = req.params;
        const dados: Prisma.LanceUpdateInput = req.body;

        try {
            const lanceAtualizado = await LanceService.updateLance(id, dados);
            res.status(200).json({
                status: 'ok',
                lanceAtualizado: lanceAtualizado
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 'error',
                message: 'Erro interno do servidor'
            });
        }
    }

    async deleteLance(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const lanceDeletado = await LanceService.deleteLance(id);
            res.status(200).json({
                status: 'ok',
                lanceDeletado: lanceDeletado
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

export default new LanceController();