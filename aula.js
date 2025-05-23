const carros = ["Uno", "Fusca", "Civic", "Onix", "Mobi"]
console.log(carros)

// função comum
function media(valor1, valor2) {
    return (valor1 + valor2)/2
}
// arrow function
mediaArrow = (valor1, valor2) => (valor1 + valor2)/2
console.log(mediaArrow(5.0, 7.0))


// Funções Callback de listas
// forEach -> percorrer cada elemento da lista
carros.forEach((carro) => console.log(carro))

// map -> alterar todos os elementos da lista
const carrosAlterado = carros.map((carro) => carro.toUpperCase())
console.log(carrosAlterado)
// padronizar uma lista de nomes na próx aula.