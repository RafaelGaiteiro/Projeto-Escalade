// traz o botão #adicionar-paciente através do Id e
// atribui a variável botaoAdicionar
var botaoAdicionar = document.querySelector("#adicionar-paciente");
// adiciona uma escuta ao botão através do addEventListener
// dentro do parênteses colocamos o que queremos que ele escute
// nesse caso o "click", e chama uma função
// existe dois modos de chamada de função, a função anônima e a função padrão
// nesse abaixo é uma função anônima
// para isso é necessário adicionar o parâmetro (event)
botaoAdicionar.addEventListener("click", function (event) {
  // o comportamento padrão de um form no HTML é quando clicar no botão
  // recarregar a página e limpar os dados do formulário
  // com a função abaixo nós cancelamos isso
  event.preventDefault();




  // passa para a variável form o conteúdo do #form-adiciona
  var form = document.querySelector("#form-adiciona");

     //Extraindo informacoes do paciente do form
     var paciente = obtemPacienteDoFormulario(form);

    // usado apenas para testar a funcionalidade
    //console.log(paciente);
    //console.log(paciente.altura);





  // passa para as variáveis através do id (inputs)
  // o nome, peso, altura e gordura que estão dentro do form
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  // cria um novo elemento tr e o atribui a variável pacienteTr
  var pacienteTr = document.createElement("tr");

  // cria novos elementos td e o adiciona as novas variáveis
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  // atribui ao nomeTd o valor capturado do input que foi atribuido
  // a variável nome
  // para os demais segue a mesma lógica
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  // atribui o calculado da função calculaImc ao imcTd
  imcTd.textContent = calculaImc(peso, altura);

  // usado apenas para testar se estava calculando o imc
  // no caso ele imprime no console do navegador
  //console.log(imc);

  // coloca como filho
  // a propriedade appendChild coloca como filho, ou seja, coloca o nomeTd
  // dentro do pacienteTr
  // os demais segue a mesma lógica
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  // atribui a variável tabela o tbody através do id #tabela-pacientes
  // nesta tabela que estão os pacientes adicionados
  var tabela = document.querySelector("#tabela-pacientes");

  // coloca o pacienteTr dentro da tabela
  tabela.appendChild(pacienteTr);
});
