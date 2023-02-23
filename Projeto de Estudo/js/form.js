// atribui a variável botaoAdicionar o #acicionar-paciente do HTML
// através do document.querySelector
var botaoAdicionar = document.querySelector("#adicionar-paciente");
// quando o botãoAdicionar sofrer um evento do tipo click
// através do .addEventListener executará a função anônima
// que tem como parâmetro o (event)
botaoAdicionar.addEventListener("click", function(event) {
    // não executa o procedimento padrão do navegador ao clicar no botão
    // o procedimento padrão para o botão de um form é reccaregar a página
    // e limpar os dados
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    // atribui a variável paciente as informações repassadas pela function
    // obtemPacienteDoFormulario que pega as informações do paciente através
    // do form no HTML
    var paciente = obtemPacienteDoFormulario(form);

    // atribui a variável erros a function validaPaciente
    var erros = validaPaciente(paciente);

    // validação
    // se o comprimento total de erros for maior que 0...
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

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

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

// validações dos dados do paciente
function validaPaciente(paciente) {

    // é chamado de array de erros, neste caso
    // ele permite alocar vários erros conforme 
    // eles passarem nas validações
    var erros = [];

    // validação de nome em branco
    // se paciente tiver valor maior que 0, significa que possui
    // algum erro
    if (paciente.nome.length == 0) {
        // a propriedade push serve para colocar alguma informação
        // dentro do array
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
