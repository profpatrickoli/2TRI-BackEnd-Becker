const furiaCS = ["FalleN","chelo","skullz","yuurih","KSCERATO"];
// Exercícios de fixação
// Resolva cada questão e imprima a resposta no terminal usando "console.log()"
// 1) Use a função .indexOf para armazenar o índice do jogador "chelo"

// 2) Usando a função .splice, substitua "chelo" e "skullz" por "molodoy" e "YEKINDAR"
// ** Use o índice encontrado na questão 1

// 3) Usando a função .map, crie uma lista com os caracteres maiúsculos (usar .toUpperCase)

// 4) Usando a função .sort, ordene a lista com os nomes maiúsculos

// 5) Usando a função .filter, filtre apenas os nomes que começam com "y"
















// 1) Use a função .indexOf para armazenar o índice do jogador "chelo"
let indiceChelo = furiaCS.indexOf("chelo")
console.log(indiceChelo)

// 2) Usando a função .splice, substitua "chelo" e "skullz" por "molodoy" e "YEKINDAR"
// ** Use o índice encontrado na questão 1
furiaCS.splice(1,2, "molodoy", "YEKINDAR")
console.log(furiaCS)

// 3) Usando a função .map, crie uma lista com os caracteres maiúsculos (usar .toUpperCase)
const maiusculo = furiaCS.map((jogador) => jogador.toUpperCase())
console.log(maiusculo)

// 4) Usando a função .sort, ordene a lista com os nomes maiúsculos
const ordenado = maiusculo.sort();
console.log(ordenado)

// 5) Usando a função .filter, filtre apenas os nomes que começam com "y"
const filtradoY = maiusculo.filter((jogador) => jogador[0] == "Y")
console.log(filtradoY)