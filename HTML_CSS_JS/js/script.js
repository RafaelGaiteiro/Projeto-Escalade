// Captura toda a informação do identificador
var numero = document.querySelector(".numeroExemplo");
/* Seleciona apenas o conteúdo do identificador
   e aplica um novo valor a ele */
numero.textContent = 100;
// Imprime a informação no console
console.log("Imprimiu? Sim, estou aqui.");

/* Timer de 5 segundos altera o texto automaticamente */
var numero2 = document.querySelector(".numeroExemplo2");
setInterval(function () {
    numero2.textContent = "Mudei!";
    numero2.style.backgroundColor = 'blue';
}, 5000);

var numero3 = document.querySelector(".numeroExemplo3");
var defNumero = document.querySelector(".defNumero");
if (numero3 >= 100) {
    defNumero.textContent = "O número acima é maior que 100!";
} else if (numero3 <= 200) {
    defNumero.textContent = "O número acima é menor que 200!";
}