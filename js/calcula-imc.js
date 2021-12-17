//Procura no DOM
var titulo = document.querySelector(".titulo");
titulo.textContent = ("Nutricionista Aparecida");

//importante validar dados de entrada para não causar calculo de valor improvável no imc
//Seletor de classe é '.'
//Seletor de id é '#'
//var paciente = document.querySelector("#primeiro-paciente");

//necessário retornar todos os elementos encontrados de classe paciente

var pacientes = document.querySelectorAll(".paciente");

//forEach(), o qual não precisamos delimitar, 
//e que passará por todos os elementos -- passada função por parametro

//prop innerHTML = obter conteudo interno
//string que representa conteudo interno do elemento
//editar dinamicamente o cont interno de um elemento

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    //Como só queremos o conteúdo, não as tags, usar text.content
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

//verificar se peso negativo ou muito elevado
// pipes || operador "ou"
//criar função para facilitar reutilização
   
    //verifica se o peso é invalido - utiliza ! para inverter
    //valor da condição analisada
    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
    //classList para acessarmos as classes -- add, adicionaremos a classe desejada
        paciente.classList.add("paciente-invalido");
    }

    //verificar valor de altura
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
//imc = peso / altura x altura;
//imc calculado apenas se altura e peso tiverem valores válidos
//conexão entre js e html - leva o cálculo do imc para imc da tag td html
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }else{
        tdImc.textContent = "Altura e/ou peso inválidos";
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);;
}

function validaPeso(peso){
    return !(peso <= 0 || peso >= 1000)  
}


function validaAltura(altura) {

    return !(altura <= 0 || altura >= 4.0)   
}






