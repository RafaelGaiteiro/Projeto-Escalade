// traz o input #filtrar-tabela e atribui ao campoFiltro
var campoFiltro = document.querySelector("#filtrar-tabela");

// adiciona um escutador ao input, que recebe o tipo de evento
// como input. Dessa forma todas vez que ouver um input(entrada de dado)
// ele executa a função anônima
campoFiltro.addEventListener("input", function () {
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

      // traz o nome do paciente
      var tdNome = paciente.querySelector(".info-nome");
      // pega o conteúdo de texto da tdNome
      var nome = tdNome.textContent;
      // RegExp significa expressão regular
      // this.value pega o valor campoFiltro

      // O primeiro parâmetro que devemos passar para o construtor
      // é o padrão (o texto da expressão regular, o que deve ser buscado)
      // e o segundo parâmetro são uma ou mais flags
      // (representando como queremos que a expressão regular busque).
      //Por exemplo, podemos definir que não queremos que haja distinção
      // entre letras maiúsculas e minúsculas, através da flag i.
      var expressao = new RegExp(this.value, "i");
      // se
      // expressão.test(nome) testa o campo nome com RegExp
      if (!expressao.test(nome)) {
        // adiciona a classe do CSS que possui a propriedade
        // display: none;
        // .classList.add adiciona uma propriedade do CSS
        paciente.classList.add("invisivel");
        // se não
      } else {
        // .classList.add remove uma propriedade do CSS
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    // serve para remover a propriedade invisível
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
