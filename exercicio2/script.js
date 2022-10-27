/* Exercício 2
Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando console.log():

Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. */

const arrayNumber = [2, 8, 21]
const arrayString = ["Matheus", "Raffael"]
const arrayVarios = ["William", "Vitor", 14, 18, true]

console.log("O número de itens no primeiro array é:", arrayNumber.length)
console.log("O número de itens no segundo array é:", arrayString.length)
console.log("O número de itens no terceiro array é:", arrayVarios.length)

console.log("**************************************************")

console.log("O primeiro item do primeiro array é:", arrayNumber[0])
console.log("O segundo item do segundo array é:", arrayString[1])
console.log("O terceiro item do terceiro array é:", arrayVarios[2])

console.log("**************************************************")

console.log(arrayNumber.includes(2))
console.log(arrayVarios.includes(2))
