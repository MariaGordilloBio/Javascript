//add evento de clique para fazer busca ao clicar no botão
//Buscar pacientes em uma API externa -- AJAX (requisição assíncrona com JS)
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();
//XMLHttpRequest é obj js responsável por requisições HTTP
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes111");
//metodo open() -- requisição do tipo GET, destino
    xhr.addEventListener("load", function(){
//erro, removeremos a classe invisivel, deixando a mensagem visível para o usuário mesmo
// para aqueles que estiverem com o console fechado:
        var erroAjax = document.querySelector("#erro-ajax");

//if testa p status, para ver se ocorreu erro
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
//dados em formato JSON - parecido com obj js
//transformador de JSON e JS -- parse()
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });
//escuta o evento, carrega as respostas dos dados--load()

    xhr.send();
//requisição nos moldes solicitados seja enviada -- send()
});

            
