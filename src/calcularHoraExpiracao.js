function calcularHoraExpiracao() {
    const horaExpiracaoDiv = document.getElementById('horaExpiracao');

    // Obter a data e hora atual
    const dataHoraAtual = new Date();

    // Adicionar 10 minutos à hora atual
    const horaExpiracao = new Date(dataHoraAtual.getTime() + 10 * 60 * 1000);

    // Formatar a string da hora de expiração
    const horaFormatada = horaExpiracao.getHours().toString().padStart(2, '0') + ':' +
      horaExpiracao.getMinutes().toString().padStart(2, '0') + ':' +
      horaExpiracao.getSeconds().toString().padStart(2, '0');

    // Exibir a hora de expiração na tela
    horaExpiracaoDiv.innerHTML = horaFormatada;
  }

  // Calcular e exibir a hora de expiração imediatamente
  calcularHoraExpiracao();