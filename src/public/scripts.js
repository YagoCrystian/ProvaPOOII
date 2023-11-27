document.addEventListener('DOMContentLoaded', function () {
  // Espera que o DOM esteja totalmente carregado

  // Seleciona o formulário de adicionar usuário
  const userForm = document.getElementById('userForm');

  // Adiciona um ouvinte de eventos para o envio do formulário de usuário
  userForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Obtém os valores dos campos do formulário de usuário
      const userName = document.getElementById('userName').value;
      const userEmail = document.getElementById('userEmail').value;

      // Envia os dados para o servidor
      fetch('/usuario', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nome: userName, email: userEmail }),
      })
      .then(response => {
          if (response.ok) {
              alert('Usuário adicionado com sucesso!');
          } else {
              return response.json().then(data => {
                  throw new Error(`Erro ao adicionar usuário: ${data.message}`);
              });
          }
      })
      .catch(error => {
          console.error('Erro ao adicionar usuário:', error);
          alert(error.message);
      });
  });

  // Seleciona o formulário de adicionar leilão
  const leilaoForm = document.getElementById('leilaoForm');

  // Adiciona um ouvinte de eventos para o envio do formulário de leilão
  leilaoForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Obtém os valores dos campos do formulário de leilão
      const leilaoProduto = document.getElementById('leilaoProduto').value;
      const leilaoPreco = document.getElementById('leilaoPreco').value;
      const leilaoDataLimite = document.getElementById('leilaoDataLimite').value;

      // Envia os dados para o servidor
      fetch('/leilao', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              produto: leilaoProduto,
              preco: leilaoPreco,
              dataLimite: leilaoDataLimite,
          }),
      })
      .then(response => {
          if (response.ok) {
              alert('Leilão adicionado com sucesso!');
          } else {
              return response.json().then(data => {
                  throw new Error(`Erro ao adicionar leilão: ${data.message}`);
              });
          }
      })
      .catch(error => {
          console.error('Erro ao adicionar leilão:', error);
          alert(error.message);
      });
  });

  // Seleciona o formulário de fazer lance
  const lanceForm = document.getElementById('lanceForm');

  // Adiciona um ouvinte de eventos para o envio do formulário de lance
  lanceForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Obtém os valores dos campos do formulário de lance
      const lanceValor = document.getElementById('lanceValor').value;
      const selectLeilao = document.getElementById('selectLeilao');
      const leilaoId = selectLeilao.options[selectLeilao.selectedIndex].value;

      // Envia os dados para o servidor
      fetch('/lance', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              valor: lanceValor,
              leilaoId: leilaoId,
          }),
      })
      .then(response => {
          if (response.ok) {
              alert('Lance adicionado com sucesso!');
          } else {
              return response.json().then(data => {
                  throw new Error(`Erro ao adicionar lance: ${data.message}`);
              });
          }
      })
      .catch(error => {
          console.error('Erro ao adicionar lance:', error);
          alert(error.message);
      });
  });
});
