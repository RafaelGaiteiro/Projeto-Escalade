// traz o botão do HTML
var botaoAdicionar = document.querySelector("#buscar-pacientes");

// evento de click
botaoAdicionar.addEventListener("click", function() {
    // atribui a var xhr o construtor
    // o new XMLHttpRequest() é responsável por fazer uma requisição
    // das informações de uma API, por exemplo
    var xhr = new XMLHttpRequest();

    // xhr.open é onde escrevemos o link
    // metodo GET para pegar as informações
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // escutador
    // quando houver o evento carregar
    xhr.addEventListener("load", function() {
        // busca o campo no qual é impresso o erro no HTML
        var erroAjax = document.querySelector("#erro-ajax");

        // se o status do xhr for igual a 200 então está tudo OKAY
        if (xhr.status == 200) {
            // portanto é aplicada a classe invisível no erro
            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
            // caso o status seja outro ele remove a classe invisível
            // informando que a um erro
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });
// envia o xhr
    xhr.send();
});
