// Esse exemplo não é comum de ser ultilizado com "array", existem formas melhores.
// Teste em um array:
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

console.log('\n')

// Teste em um objeto:
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// console.log(atributo)