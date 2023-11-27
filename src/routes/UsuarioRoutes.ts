import { Router, Request, Response } from 'express';
import UsuarioController from '../controller/UsuarioController';

const UsuarioRouter = Router();

UsuarioRouter.get('/usuarios', async (req: Request, res: Response) => {
  try {
    const usuarios = await UsuarioController.listUsuarios(req, res);
    res.json({ status: 'ok', usuarios });
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

UsuarioRouter.post('/usuario', async (req: Request, res: Response) => {
  try {
    const usuario = await UsuarioController.createUsuario(req, res);
    res.json({ status: 'ok', usuario });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

UsuarioRouter.put('/usuario/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para atualizar o usuário com o ID fornecido
    res.json({ status: 'ok', message: 'Usuário atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

UsuarioRouter.delete('/usuario/:id', async (req: Request, res: Response) => {
  try {
    // Implemente a lógica para excluir o usuário com o ID fornecido
    res.json({ status: 'ok', message: 'Usuário excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir usuário:', error);
    res.status(500).json({ status: 'error', message: 'Erro interno do servidor' });
  }
});

export default UsuarioRouter;