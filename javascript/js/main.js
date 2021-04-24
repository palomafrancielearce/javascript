var lista = ["maçã", "pera", "laranja"];

lista.push("uva");
//adicionando mais uma posição no array criado anteriormente, adiciona na ultima posição

lista.pop();
//remove a ultima posição do array

console.log(lista);

console.log(lista.length);
//mostra o tamanho de elementos do array

console.log(lista.reverse);
//mostra da ultima posição para a primeira, ao contrário

console.log(lista.toString);
//converte tudo para string, não mostra como array mas sim como string
//se colocarmos lista.toString()[0] vai retornar a primeira letra da primeira palavra, no caso a letra m

console.log(lista.join("-"));
