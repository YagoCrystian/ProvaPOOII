// Importar cada camada de Serviço da pasta Services

import { PrismaClient } from '@prisma/client';
import UsuarioService from '../services/UsuarioServices';
import LeilaoService from '../services/LeilaoServices';
import LanceService from '../services/LanceServices';

const prisma = new PrismaClient();

async function main() {
  // Exemplo de chamadas para UsuarioService
  // console.log(await UsuarioService.deleteUsuario('15aafa44-0ce8-413f-8b8e-7dee49849f59'));
  console.log(await UsuarioService.listUsuarios());

  // Exemplo de chamadas para LeilaoService
  // console.log(await LeilaoService.deleteLeilao('15aafa44-0ce8-413f-8b8e-7dee49849f59'));
  console.log(await LeilaoService.listLeiloes());

  // Exemplo de chamadas para LanceService
  // console.log(await LanceService.deleteLance('15aafa44-0ce8-413f-8b8e-7dee49849f59'));
  console.log(await LanceService.listLances());
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });