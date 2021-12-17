
// seleciona todas as linhas à partir da classe pacientes
var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
//event.target.remove(); //apenas td clicado é removido
//acessa pai de elemento por parentNode
//perguntamos ao pai qual filho 
//recebeu o clique, pois é ele que será removido 
//event bubbling - do filho ao pai
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    paiDoAlvo.classList.add("fadeOut");
//setTimeout -- quanto tempo deve ser aguardado p ação ocorrer
        setTimeout( function(){
            paiDoAlvo.remove();
        }, 500);
        
});
   

pacientes.forEach(function(paciente) {
//p cada paciente, adicionar um escutador de event para evento de duplo clique
// a cada 2 cliques o paciente é removido
    paciente.addEventListener("dblclick", function() {
//remove() remove elemento de HTML
//o dono do evento deve ser afetado pelo duplo clique -- paciente
//this. palavra de contexto a quem o evento está atrelado
    });
});

