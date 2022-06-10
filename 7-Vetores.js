//Declarando Array
console.log('Declarando Array')
var nome = ['Diogo', 'Fraga', 'Rocha', 'Ichaso']
console.log(`nomes[0]: ${nome[0]}`)
console.log(`nomes[3]: ${nome[3]}`)
console.log()

var convidados = []
var qtdConvidados = 5

for(var i = 0; i < qtdConvidados; i++){
    convidados[i] = 'Convidado ' + i
    
}
console.log(convidados)
console.log()

//Incluir no final do vetor
console.log('Incluir no final do vetor')
var pessoas = []
pessoas.push('Diogo')
console.log(pessoas)
pessoas.push('Fernanda')
console.log(pessoas)
pessoas.push('Gabriel')
console.log(pessoas)
pessoas.push('Guilherme')
console.log(pessoas)
console.log()

//remover do final do vetor
console.log('Remover do final do vetor')
var removido = pessoas.pop()
console.log(pessoas)
console.log(removido)
console.log(`A quantidade de nome em pessoa é ${pessoas.length}`)
console.log()

//Para cada
console.log('PARA CADA ELEMENTO...')
pessoas.forEach(function(valor, indice){
    console.log(valor + ' - ' + indice)
})
console.log()

//Incluir no início do vetor
console.log('Incluir no início do vetor')
pessoas.unshift('Jorge')
console.log(pessoas)
console.log()

//Remover do início do vetor
console.log('Remover do início do vetor')
pessoas.shift()
console.log(pessoas)
console.log()

//Alteração no vetor
console.log('Alteração no vetor')
pessoas.splice(1) //exclui do elemento 1 para frente
console.log(pessoas)
pessoas.push('Fernanda')
pessoas.push('Gabriel')
pessoas.push('Guilherme')
console.log(pessoas)
pessoas.splice(2, 3, 'Gustavo', 'Bernardo')
console.log(pessoas)
pessoas.splice(2, 3, 'Gabriel', 'Guilherme')
console.log(pessoas)
console.log()

//Busca de valor de um vetor
console.log('Busca de valor de um vetor')
console.log(`O índice de "Gabriel" é ${pessoas.indexOf('Gabriel')}`)

//Uso de String como vetor
frase = 'Olá Mundo!'
for(var i in frase){
    console.log(frase[i])
}

// VETOR MULTIDIMENSIONAL - MATRIZES
console.log('MATRIZ MULTIDIMENSIONAL - MATRIZES')
var contribuintes = [["Diogo", 41, "000.000.000-01"], ["Fernanda", 40, "000.000.000-02"], ["Gabriel", 6, "000.000.000-03"], ["Gulherme", 4, "000.000.000-04"]]
console.log(contribuintes)
console.log()

//ARRAYS DE OBJETOS
console.log('ARRAYS DE OBJETOS')
var alunos = []
alunos.push({nome: "Gabriel", idade: 6, dataNascimento: {dia: 14, mes: 12, ano: 2015}, notaFinal: 10})
alunos.push({nome: "Guilherme", idade: 4, dataNascimento: {dia: 13, mes: 8, ano: 2017}, notaFinal: 8})
alunos.push({nome: "Bernardo", idade: 5, dataNascimento: {dia: 26, mes: 2, ano: 2016}, notaFinal: 6})
alunos.push({nome: "Gustavo", idade: 1, dataNascimento: {dia: 18, mes: 8, ano: 2021}, notaFinal: 2})
console.log(alunos)
console.log(alunos[0].nome)
console.log(alunos[1].dataNascimento.ano)
console.log()

//DELETAR ATRIBUTO
console.log('DELETAR ATRIBUTO')
delete alunos[3].idade
console.log(alunos)
alunos[3].idade = 1
console.log(alunos)
