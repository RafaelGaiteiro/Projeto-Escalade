// sem função, apenas imprime no terminal do navegador
// pode ser acessado com CRTL + SHIFT + J
console.log("Fui carregado de um arquivo externo");

// atribuiu ao id .titulo a variável titulo
// document.querySelector -> captura todo o conteúdo do h2
var titulo = document.querySelector(".titulo");

// altera a informação do titulo
// .textContent -> destaca apenas a informação que queremos
titulo.textContent = "Aparecida Nutricionista";

// atribui a variável pacientes todos os que possuem a classe .paciente
// neste caso como queremos selecionar diversos elementos devemos utilizar
// o querySelectorAll  e quando for apenas um específico o querySelector
var pacientes = document.querySelectorAll(".paciente");

// laço de repetição
// .lenght -> permite que o loop se repita até o final do vetor
// o loop inicia em 0 e segue de um em um
for (var i = 0; i < pacientes.length; i++) {
  // atribui o vetor pacientes a outra variável que não possui índice
  // nesse caso o código fica mais simples e não precisa ser colocado
  // o índice dele em todas as vezes que ele deveria aparecer
  var paciente = pacientes[i];

  // busca através do .querySelector o paciente através do índice
  // e está sendo específicado a informação solicitada
  // que é extraída do td
  var tdPeso = paciente.querySelector(".info-peso");
  var tdAltura = paciente.querySelector(".info-altura");
  var tdImc = paciente.querySelector(".info-imc");

  // atribui a variável apenas a informação
  // utilizando o .textContent
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;

  // de boa fé aplicamos o valor a altura e ao peso
  // como verdadeiros antes da validação
  var alturaEhValida = true;
  var pesoEhValido = true;

  // condições

  // primeira condição
  // se o peso for menor ou igual a 0 OU se o peso for
  // maior ou igual a 1000 então
  if (peso <= 0 || peso >= 1000) {
    // imprime no terminal do navegador
    // o terminal foi feito para o desenvolvedor
    // normalmente o usuário não vê, mas tem acesso
    console.log("Peso inválido");
    // aplica uma nova informação ao tdImc
    tdImc.textContent = "Peso inválido!";
    // por passar na validação o valor é alterado para falso
    // o propósito seria não passar na validação
    // então estaria tudo certo
    pesoEhValido = false;
    // atribui a todo paciente que passar pela condição
    // as configurações da classe css paciente-invalido
    // nesse caso a cor light-coral
    // neste caso escreve-se paciente-invalido sem o . , como abaixo
    paciente.classList.add("paciente-invalido");
  }

  // segunda condição
  // se a altura for menor ou igual a 0 OU a altura for
  // maior ou igual a 3.0 então
  if (altura <= 0 || altura >= 3.0) {
    // imprime no terminal do navegador
    console.log("Altura inválida");
    // aplica uma nova informação ao tdImc
    tdImc.textContent = "Altura inválida!";
    // por passar na validação o valor é alterado para falso
    alturaEhValida = false;
    // atribui a cor de fundo
    paciente.classList.add("paciente-invalido");
  }

  // se peso (F ou V) E altura (F ou V) então
  if (pesoEhValido && alturaEhValida) {
    // chamamento da função e os seus parâmetros
    var imc = calculaImc(peso, altura);
    // atribui ao conteúdo de texto do tdImc o valor calculado do imc
    tdImc.textContent = imc;

    /*

    // !!! essa parte do código não é mais utilizada pois adicionamos uma function
    // que irá possibilitar replicar essa funcionalidade em outros locais !!!

    // atribui a variável imc o cálculo
    // altura multiplicada por altura e divide pelo peso
    var imc = peso / (altura * altura);
    // atribui uma nova informação ao tdImc
    // a informação é o resultado da operação do imc
    // e através do .toFixed(2) determina a quantidade
    // de casas decimais
    tdImc.textContent = imc.toFixed(2);

    */
  }
}

// função
// através de uma função é possível reutilizar parte funcionais do código
function calculaImc(peso, altura) {
  // devemos inicializar a variável em 0
  var imc = 0;
  // atribui a variável imc o cálculo
  // altura multiplicada por altura e divide pelo peso
  var imc = peso / (altura * altura);

  // retorna o imc já calculado e com as casas decimais organizadas
  // através do toFixed(2)
  return imc.toFixed(2);
}

function obtemPacienteDoFormulario(form) {

  var paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}