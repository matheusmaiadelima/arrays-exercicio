/* Exercício 3
Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie três novos arrays, chamados nomeDoArrayOriginalCopia, e faça o que se pede abaixo nas cópias dos arrays originais;

Adicione um item number ao início do primeiro array. Utilize console.log() para exibir o original e a cópia;

Remova o último item do segundo array. Utilize console.log() para exibir o original e a cópia;

Remova o segundo item do terceiro array. Utilize console.log() para exibir o original e a cópia; */

const arrayNumeros = [10, 31, 111]
const arrayPassaros = ["Arara", "Pato", "Águia"]
const arrayRodrigoFaro = ["Uiiii", "Dança gatinho dança", "Que isso meu filho calma"]

const copiaArrayNumeros = arrayNumeros.slice()
const copiaArrayPassaros = arrayPassaros.slice()
const copiaArrayRodrigoFaro = arrayRodrigoFaro.slice()

arrayNumeros.push(45)

console.log(arrayNumeros)
console.log(copiaArrayNumeros)

console.log("**************************************************")

arrayPassaros.pop()
console.log(arrayPassaros)
console.log(copiaArrayPassaros)

console.log("**************************************************")

arrayRodrigoFaro.splice(1, 1)
console.log(arrayRodrigoFaro)
console.log(copiaArrayRodrigoFaro)