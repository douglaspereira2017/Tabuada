// JavaScript Document
function tabuada(){
 
    //obtêm o numero escolhido pelo usuário
    var numero = document.getElementById("numero").value;
    //obtêm a div onde será adicionado a tabuada
    var resultado = document.getElementById("resultado");
 
    //vaiavel que receberá os dados da tabuada
    var tabuada = "";
 
    /* A parte a seguir usa o looping for para gerar os numeros de 0 a 10 e fazer a multiplicação para exibir a tabuada */
    for(i=0; i<=10; i++){
 
        tabuada = tabuada + numero + " x " + i + " = " + i*numero + "<br>";
    }
    
    //atualiza o conteúdo da div resultado
    resultado.innerHTML = tabuada;

}
