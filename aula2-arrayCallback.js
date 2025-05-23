function media(nota1, nota2){
    return (nota1+nota2)/2
}
console.log(media(10, 6))

mediaArrow = (nota1, nota2) => {
    return (nota1+nota2)/2
}
console.log(mediaArrow(10,6))

mediaArrowSimples = (nota1, nota2) => (nota1+nota2)/2
console.log(mediaArrowSimples(10,6))

// Criando listas
const listaNumeros = [20, 50, 100, 10, 30];
const listaStrings = ["abacaxi", "uva", "laranja", "banana"];

// Percorrendo todos os itens da lista:
listaStrings.forEach((string) => console.log(string))

// Alterando todos os itens de uma lista:
stringsMaiuscula = listaStrings.map((string) => string.toUpperCase())
console.log(stringsMaiuscula)

// Filtrando itens da lista
numerosMenores = listaNumeros.filter((numero) => numero < 50)
console.log(numerosMenores)

// Ordenando uma lista
stringsOrdenadas = listaStrings.sort();
console.log(stringsOrdenadas)
numerosOrdenados = listaNumeros.sort(); // ordena os números como se fossem strings
console.log(numerosOrdenados)
// Corrigindo a ordenação de números:
numerosOrdenados = listaNumeros.sort((a,b) => {
    if (a < b){
        return -1;
    } 
    if (a > b){
        return 1;
    }
    return 0
})
console.log(numerosOrdenados)


// Encontrando um item
const frutas = [
    {
        nome: "abacaxi",
        precoKg: 5.99,
        qtdKg: 50
    },
    {
        nome: "uva",
        precoKg: 9.50,
        qtdKg: 30
    },
    {
        nome: "laranja",
        precoKg: 4.7,
        qtdKg: 80
    }
]

frutaEncontrada = frutas.find((fruta) => fruta.nome === "abacaxi");
console.log(frutaEncontrada)
