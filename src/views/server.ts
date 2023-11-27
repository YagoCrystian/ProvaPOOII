import express from 'express';
import UsuarioRoutes from '../routes/UsuarioRoutes';  // Ajuste o nome do arquivo de rotas conforme necessário
import LeilaoRoutes from '../routes/LeilaoRoutes';    // Ajuste o nome do arquivo de rotas conforme necessário
import LanceRoutes from '../routes/LanceRoutes';      // Ajuste o nome do arquivo de rotas conforme necessário
import path from 'path';

const app = express();

// Configurando o middleware express.static para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Adicionando as rotas para Usuario, Leilao e Lance
app.use(UsuarioRoutes);  // Ajuste o nome da rota conforme necessário
app.use(LeilaoRoutes);   // Ajuste o nome da rota conforme necessário
app.use(LanceRoutes);    // Ajuste o nome da rota conforme necessário

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});