//trabalhando com datas
var d = new Date();
alert(d);
//mostra o dia da semana, a data e a hora e o fuso horário utilizado
alert(d.getMonth()+1);
//traz o mês, sempre adicionamos 1 para trazer o correto
alert(d.getMinutes());
//traz o minutp
alert(d.getDay());
//traz o dia


var count=0;
while(count < 5){
    console.log(count);
    count++;
}

for(var x=0; x<5; x++){
    alert(x);
}




var idade = prompt("Qual a sua idade?");
//abre uma caixa de pergunta para o usuário

if(idade >= 18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}