var botaoAdicionar = document.querySelector("#adicionar-dispositivo");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var dispositivo = obtemDispositivoDoFormulario(form);

  // function validaDispositivo armazena erros de validação na var erros
  var erros = validaDispositivo(dispositivo);

  // para passar na validação o comprimento de erros precisa ser 0
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }
  adicionaDispositivoNaTabela(dispositivo);
  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function obtemDispositivoDoFormulario(form) {
  var dispositivo = {
    marca: form.marca.value,
    modelo: form.modelo.value,
    ram: form.ram.value,
    armazenamento: form.armazenamento.value,
    // rever condicao: calculaValor(form.peso.value, form.altura.value),
  };

  return dispositivo;
}

function montaTr(dispositivo) {
  var dispositivoTr = document.createElement("tr");
  dispositivoTr.classList.add("dispositivo");

  dispositivoTr.appendChild(montaTd(dispositivo.marca, "info-nome"));
  dispositivoTr.appendChild(montaTd(dispositivo.modelo, "info-peso"));
  dispositivoTr.appendChild(montaTd(dispositivo.ram, "info-altura"));
  dispositivoTr.appendChild(montaTd(dispositivo.armazenamento, "info-gordura"));
  dispositivoTr.appendChild(montaTd(dispositivo.avaliacao, "info-avaliacao"));

  return dispositivoTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function validaDispositivo(dispositivo) {
  var erros = [];

  if (dispositivo.marca.length == 0) {
    erros.push("A marca não pode estar em branco");
  }

  if (dispositivo.modelo.length == 0) {
    erros.push("O modelo não pode estar em branco");
  }

  if (dispositivo.ram.length == 0) {
    erros.push("A quantidade de RAM não pode estar em branco");
  }

  if (dispositivo.armazenamento.length == 0) {
    erros.push("A quantidade de armazenamento não pode estar em branco");
  }

  /*
  // rever
  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }
  */

  return erros;
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function adicionaDispositivoNaTabela(dispositivo) {
  var dispositivoTr = montaTr(dispositivo);
  var tabela = document.querySelector("#tabela-dispositivos");
  tabela.appendChild(dispositivoTr);
}
