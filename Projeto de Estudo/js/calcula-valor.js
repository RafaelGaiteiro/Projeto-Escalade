// atribui a varv titulo através do .querySelector o .titulo do HTML
var titulo = document.querySelector(".titulo");
// atribui um texto como conteúdo de texto a var titulo
titulo.textContent = "Aparecida Nutricionista";

// atribui a var pacientes os .paciente
// neste caso o .paciente é uma <tr> composta por várias <td> (cada <td> é um paciente)
// então ele trás todos pacientes de uma só vez e atribui a uma variável só
var pacientes = document.querySelectorAll(".paciente");

// laço de repetição
// início; condição de permanência; incremento
// inicializa em 0, permanece até atingir o comprimento máximo, acrescenta de um em um
// a propridade .lenght permite que o loop siga todo o comprimento da variável, neste caso
// não sendo nessário colocar um valor específico
for (var i = 0; i < pacientes.length; i++) {
    // atribui a var paciente o pacientes conforme o seu índice
    var paciente = pacientes[i];

    // querySelector -> busca do HTML
    // e atribui a uma variável a sua informação
    var tdPeso = paciente.querySelector(".info-peso");
    // atribui para var peso o texto da tdPeso que acabamos
    // de pegar a informação do HTML
    var peso = tdPeso.textContent;
    // o .textContent pega apenas o conteúdo de texto
    // daquela estrutura do HTML

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    // atribui a var o retorno da function que valida o peso e a altura
    // esse retorno é V ou F
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    // se pesoEhValido não for V, ou seja, se ele for F, então...
    if (!pesoEhValido) {
        // imprime no console
        console.log("Peso inválido!");
        // atribui a pesoEhValido um F
        pesoEhValido = false;
        // atribui o texto como conteúdo de texto da tdImd
        tdImc.textContent = "Peso inválido";
        // adiciona a class paciente-invalido (que altera a cor) ao paciente
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        // atribui a var imc o return da function calculaImc
        // com parâmetros peso e altura
        var imc = calculaImc(peso, altura);
        // atribui como conteúdo de texto para tdImc o imc
        tdImc.textContent = imc;
    }
}

// função que calcula o imc, recebe como parâmetros
// o peso e a altura
function calculaImc(peso, altura) {
    // inicializa a var imc com valor 0
    var imc = 0;
    // atribui ao imc o valor do cálculo
    imc = peso / (altura * altura);

    // retorna o valor do imc
    // a propriedade .toFixed() controla quantas casas
    // decimais seram exibidas
    return imc.toFixed(2);
}

// função que valida o peso, recebe como parâmetro o peso
function validaPeso(peso) {
    // se peso for maior ou igual a 0 e peso for menor ou igual a 1000
    if (peso >= 0 && peso <= 1000) {
        // peso recebe true
        return true;
        // se não
    } else {
        // peso recebe false
        return false;
    }
}

// função que valida a altura, recebe como parâmetro a altura
function validaAltura(altura) {
    // se altura for maior ou igual a 0 e altura for menor ou igual a 3.00
    if (altura >= 0 && altura <= 3.00) {
        // altura recebe true
        return true;
        // se não
    } else {
        // altura recebe false
        return false;
    }
}
