import { Router, Request, Response } from 'express';
import LeilaoController from '../controller/LeilaoController';

const LeilaoRouter = Router();

LeilaoRouter.get('/leiloes', async (req: Request, res: Response) => {
  try {
    const leiloes = await LeilaoController.listLeiloes(req, res);
    res.json({ status: 'ok', leiloes });
  } catch (error) {
    console.error('Erro ao listar leilões:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

LeilaoRouter.post('/leilao', async (req: Request, res: Response) => {
  try {
    const leilao = await LeilaoController.createLeilao(req, res);
    res.json({ status: 'ok', leilao });
  } catch (error) {
    console.error('Erro ao criar leilão:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

LeilaoRouter.put('/leilao/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para atualizar o leilão com o ID fornecido
    res.json({ status: 'ok', message: 'Leilão atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar leilão:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

LeilaoRouter.delete('/leilao/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para excluir o leilão com o ID fornecido
    res.json({ status: 'ok', message: 'Leilão excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir leilão:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

export default LeilaoRouter;