const carros = ["Uno", "Fusca", "Civic", "Onix", "Mobi"]

// adicionar elemento no final lista
carros.push("Kwid");
console.log(carros)

// adicionar no início da lista
carros.unshift("Vectra")
console.log(carros)

// remover o último da lista
carros.pop()
console.log(carros)

// remover o primeiro da lista
carros.shift()
console.log(carros)

// remover elemento do meio da lista (Fusca)
carros.splice(1, 1)
console.log(carros)

// adicionar elemento no meio da lista (Adiciona Astra no indice 2)
carros.splice(2, 0, "Astra")
console.log(carros)

// percorrer todos os elementos da lista
let texto = "";
carros.forEach((carro) => texto += carro+ " ")
console.log(texto)