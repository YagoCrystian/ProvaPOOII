import { Router, Request, Response } from 'express';
import LanceController from '../controller/LanceController';

const LanceRouter = Router();

LanceRouter.get('/lances', async (req: Request, res: Response) => {
  try {
    const lances = await LanceController.listLances(req, res);
    res.json({ status: 'ok', lances });
  } catch (error) {
    console.error('Erro ao listar lances:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

LanceRouter.post('/lance', async (req: Request, res: Response) => {
  try {
    const lance = await LanceController.createLance(req, res);
    res.json({ status: 'ok', lance });
  } catch (error) {
    console.error('Erro ao criar lance:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

LanceRouter.put('/lance/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para atualizar o lance com o ID fornecido
    res.json({ status: 'ok', message: 'Lance atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar lance:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

LanceRouter.delete('/lance/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para excluir o lance com o ID fornecido
    res.json({ status: 'ok', message: 'Lance excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir lance:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

export default LanceRouter;