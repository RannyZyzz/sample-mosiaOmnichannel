function realizarRequest() {
    const instanciaApp = document.getElementById('instanciaAppInput').value;
    const chavePasse = document.getElementById('chavePasseInput').value;
    const chaveFuncionalidade = document.getElementById('chaveFuncionalidadeInput').value;
    const Authorization = document.getElementById('Authorization').value;
    const urlSelecionada = document.getElementById('urlSelecionada').value;

    const config = {
        headers: {
          'Authorization': `${Authorization}`
        }
      };


    let url

      if (urlSelecionada === 'url1') {
        url = `https://api.mosiaomnichannel.com.br/clientes/chavePasse/usuario?instanciaApp=${instanciaApp}&chavePasse=${chavePasse}&chaveFuncionalidade=${chaveFuncionalidade}`;
      } else if (urlSelecionada === 'url2') {
        url = `https://api.mosiaomnichannel.com.br/clientes/chavePasse/grupoFamiliar?instanciaApp=${instanciaApp}&chavePasse=${chavePasse}&chaveFuncionalidade=${chaveFuncionalidade}`;
      } else if (urlSelecionada === 'url3') {
        url = `https://api.mosiaomnichannel.com.br/clientes/chavePasse/sistema?instanciaApp=${instanciaApp}&chavePasse=${chavePasse}&chaveFuncionalidade=${chaveFuncionalidade}`;
      }


    fetch(url,config)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const jsonFormatted = JSON.stringify(data, null, 2);
        var resultadoDiv = document.getElementById('retornoApi');
          resultadoDiv.innerHTML = '<pre>' + jsonFormatted + '</pre>';
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }