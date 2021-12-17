//nome digitado no banco, pacientes sejam buscados
//detectar evento de digitar, input de dados

var campoFiltro = document.querySelector("#filtrar-tabela");

//console.log(campoFiltro);

//addEventListener - escutar evento de input

campoFiltro.addEventListener("input", function(){
//console.log("Digitaram no campo"); -- campo filtro é dono do evento --this
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

//iterar em pacientes e não com a tr
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        if (nome != this.value) {
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    }
});

//if para que a classe invisivel seja add apenas quando
//houver algo digitado

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
//lenght = 0 -- campo em branco 
    if( this.value.length > 0){
        //console.log("Tem algo digitado");
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
        //Filtrar letra por letra com expressões regulares
        //opção case sensitive -- i
            var expressao = new RegExp(this.value, "i");

        //if (nome != this.value) { -- exp reg possui metodo test para escolher o que testar
        //testando se o nome não contém a expressão -- !
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
        //caso não tenha nada digitado:
        }else {
            for (var i = 0; i < pacientes.length; i++) {
                var paciente = pacientes[i];
                paciente.classList.remove("invisivel");
            }
    }
});

