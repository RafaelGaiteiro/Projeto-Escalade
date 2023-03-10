var dispositivos = document.querySelectorAll(".dispositivo");

for (var i = 0; i < dispositivos.length; i++) {
    var dispositivo = dispositivos[i];

    var tdMarca = dispositivo.querySelector(".info-marca");
    var marca = tdMarca.textContent;

    var tdModelo = dispositivo.querySelector(".info-modelo");
    var modelo = tdModelo.textContent;

    var tdRam = dispositivo.querySelector(".info-dispositivo");
    var ram = tdRam.textContent;

    var tdArmazenamento =  dispositivo.querySelector(".info-armazenamento");
    var armazenamento = tdArmazenamento.textContent;

    var tdCondicao = dispositivo.querySelector(".info-condicao");
    var condicao = tdCondicao.textContent;

    var tdAvaliacao = dispositivo.querySelector(".info-avaliacao");

    // atribui a var o retur V ou F da function que valida a ram e o armazenamento
    var ramEhValido = validaRam(ram);
    var armazenamentoEhValido = validaArmazenamento(armazenamento);

    // se não for V então...
    if (!ramEhValido) {
        console.log("Ram inválida!");
        ramEhValido = false;
        tdCondicao.textContent = "Está quantidade de RAM não é aceita";
        // adiciona a class dispositivo-invalido (que altera a cor) ao dispositivo
        dispositivo.classList.add("dispositivo-invalido");
    }

    if (!armazenamentoEhValida) {
        console.log("Armazenamento inválido!");
        armazenamentoEhValido = false;
        tdCondicao.textContent = "Está quantidade de Armazenamento não é aceito";
        dispositivo.classList.add("dispositivo-invalido");
    }

    // rever funcionalidade!!!
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
