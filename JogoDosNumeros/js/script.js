// imprime no console
console.log("Jogo dos Números");

// recebe a entrada
var numInput = document.querySelector("#numInput");
var entrada = numInput.textContent;

// botão
btnAddNum = document.querySelector("#btn-addNum");

// chama a função quando ocorre o click
btnAddNum.addEventListener("click", function (event) {
  event.preventDefault();

  verificacao();
});

// verificação
function verificacao(entrada, numSecreto) {
  var numSecreto = Math.floor(Math.random() * 100);
  //geraNum(numSecreto);
  console.log("Número secreto: " + numSecreto);

  var resultado;

  if (entrada == null) {
    console.log("Preencha o campo.");
    resultado = "Preencha o campo.";
  } else if (entrada > numSecreto) {
    console.log("O número digitado é maior que o número secreto.");
    resultado = "O número digitado é maior que o número secreto.";
  } else if (entrada < numSecreto) {
    console.log("O número digitado é menor que o número secreto.");
    resultado = "O número digitado é menor que o número secreto.";
  } else if (entrada == numSecreto) {
    console.log("Parabéns! Você acertou o número secreto!");
    resultado = "Parabéns! Você acertou o número secreto!";
  } else {
    console.log("Erro!");
    resultado = "Erro!";
  }

  function geraNum() {
    // gera o número secreto
    var numSecreto = Math.floor(Math.random() * 100);

    return numSecreto;
  }

  var exibeResultado = document.querySelector("#exibeResultado");
  exibeResultado.textContent = resultado;

  return;
}

/*
var x = 1;
var y = 5;

function soma(x, y) {
  return x + y;
}

console.log("Teste 1: " + soma(1, 2));

function soma2(x, y) {
  resultado = x + y;
  return resultado;
}

console.log("Teste 2: " + soma2(resultado));

*/
