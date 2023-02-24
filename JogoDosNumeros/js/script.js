console.log("Jogo dos Números");

var numInput = document.querySelector("#numSecreto");
var entrada = numInput.textContent;

var resultado;

var exibeResultado = document.querySelector("#exibeResultado");
var exibir = exibeResultado.textContent;

btnAddNum = document.querySelector("#btn-addNum");

btnAddNum.addEventListener("click", function (event) {
  event.preventDefault();
  verificacao(resultado);

  exibir = resultado;
});

var numSecreto = Math.floor(Math.random() * 100);

function verificacao(entrada, numSecreto, resultado) {
  if (entrada == null) {
    console.log("O campo deve ser preenchido.");
    resultado = "O campo deve ser preenchido.";
  } else if (entrada > numSecreto) {
    console.log("O número digitado é maior que o número secreto.");
    resultado = "O número digitado é maior que o número secreto.";
  } else if (entrada < numSecreto) {
    console.log("O número digitado é menor que o número secreto.");
    resultado = "O número digitado é menor que o número secreto.";
  } else if (entrada == numSecreto) {
    console.log("Parabéns! Você acertou o número secreto!");
    resultado = "Parabéns! Você acertou o número secreto!";
  }

  return resultado;
}
