// traz o botão do HTML
var botaoAdicionar = document.querySelector("#buscar-pacientes");

// evento de click
botaoAdicionar.addEventListener("click", function() {
    // atribui a var xhr o construtor
    // o new XMLHttpRequest() é responsável por fazer uma requisição
    // das informações de uma API, por exemplo
    var xhr = new XMLHttpRequest();

    // link
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // escutador
    // quando houver o evento carregar
    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
