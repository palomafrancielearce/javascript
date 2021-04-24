function soma(n1, n2){
    return n1+ n2;
}

function validaIdade(idade)
{
    var validar;
    if(idade > 18){
        validar=true;
    } else {
        validar=false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));

function setReplace(frase, valor, novoValor){
    return frase.replace(valor, novoValor);
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));