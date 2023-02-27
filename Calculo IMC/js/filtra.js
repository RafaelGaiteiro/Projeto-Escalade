// traz o input #filtrar-tabela e atribui ao campoFiltro
var campoFiltro = document.querySelector("#filtrar-tabela");

// adiciona um escutador ao input, que recebe o tipo de evento
// como input. Dessa forma todas vez que ouver um input(entrada de dado)
// ele executa a função anônima
campoFiltro.addEventListener("input", function() {
    // traz os pacientes da tr .paciente e atribui a var pacientes
    var pacientes = document.querySelectorAll(".paciente");

    // se o tamanho do valor/conteúdo do campoFiltro for maior que 0, então...
    // observação: a propriedade this faz referência ao campoFiltro, traduzindo
    // signfica "esse", pois estamos indicando ao quando o escutador
    // do evento está atrelado
    if (this.value.length > 0) {
        // laço de repetição
        // inicia em 0 e percorre toda a extensão do pacientes
        // serve filtrar todos
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
