function botao(){
    //alert("Obrigada por clicar");
    var element = document.getElementById("btnAgradecimento").innerHTML = "<strong>Obrigada por clicar!</strong>";
    //pegando o elemento e o inner vai mesclar os dois

}

function direcionar(){
    window.open("https://www.google.com");
    //abre em uma nova janela o site passado no parametro
    //esse abre em uma nova janela

    window.location.href="https://www.google.com";
    //outra funcao utilizada para abrir um link
    //a diferença é que esse ultimo abre na mesma janela
}

function trocar(elemento){
    //alert("Trocar texto");
    //ao passar o mouse em cima do elemento, vai chamar esse alert
    //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse";
    //troca o texto do elemento ao passar o mouse em cima
    elemento.innerHTML = "Obrigado por passar o mouse";

    //utilizando parametro e no html o this, nao precisamos pegar por id, mas sim passar o proprio elemento como parametro
    //facilita a implementacao aqui
}

function voltar(elemento){
    //document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui";
    //mensagem que vai mostrar quando eu tirar o mouse
    elemento.innerHTML ="Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
    //vai chamar essa funcao quando a página carregar pois colocamos no body
}

function change(elemento){
    console.log(elemento.value);
    //pegando o valor do elemento quando eu selecionar uma opção do select
}