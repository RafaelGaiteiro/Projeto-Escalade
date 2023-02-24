// pega todos os .paciente e atribui a var pacientes
var pacientes = document.querySelectorAll(".paciente");

// pega a #tabela-pacientes e atribui a var tabela
var tabela = document.querySelector("#tabela-pacientes");

// adiciona um .addEventListener, que é um escutador
// para quando houver um dblclick, clique duplo, 
// executa a função com parâmetro event, ou seja,
// que é executada pelo evento do click
tabela.addEventListener("dblclick", function(event) {
    // event.target está atrelado a tabela
    // portanto quando clicado o evento está no table,
    // mas quem foi clicado foi o <tr> paciente, ou seja,
    // ele consegue especificar quem foi clicado
    event.target.parentNode.classList.add("fadeOut");
    // se você usado apenas event.target quem seria eliminado
    // seria apenas a <td>, porém queremos eliminar a <tr>
    // por isso utilizamos .parentNode que seleciona o pai do <td>,
    // ou seja, a <tr>

    // nesse acso foi feita uma animação
    // então ela aplica a <tr> através do classList.add
    // a classe fadeOut no CSS

    // time setado com atraso de 500 milisegundos
    setTimeout(function() {
        // remove o paciente
        event.target.parentNode.remove();
    }, 500);

});

// this. significa a quem o evento está atrelado
// pode ser usado também