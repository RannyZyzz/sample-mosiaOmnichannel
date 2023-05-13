function copiarParametros() {
    // Obter a URL atual
    var url = window.location.search;

    // Extrair os parâmetros da URL
    var urlParams = new URLSearchParams(url);

    // Obter o valor do parâmetro chavePasse
    var chavePasse = urlParams.get('chavePasse');

    // Copiar para a área de transferência
    navigator.clipboard.writeText(chavePasse)
      .then(function() {
        console.log('Parâmetros copiados com sucesso!');
      })
      .catch(function(error) {
        console.error('Erro ao copiar parâmetros:', error);
      });
  }