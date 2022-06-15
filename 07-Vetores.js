//Declarando Array
console.log('Declarando Array')
var nome = ['Diogo', 'Fraga', 'Rocha', 'Ichaso', 41]
console.log(`Nome(nomes[0]): ${nome[0]}`)
console.log(`Último sobrenome(nomes[3]): ${nome[3]}`)
console.log(`Idade(nome[4]: ${nome[4]}`)
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
console.log()

//Ordenação de um vetor
console.log('Ordenação de um vetor')
console.log(nome.sort())
console.log()

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

//Filtrando Arrays
console.log('FILTRO DE ARRAYS')
var numeros = [10, 18, 1, 15]
var resultado =[]

resultado = numeros.filter(function(item){
    return item > 10
})
console.log('Filto números maiores de 10: ')
console.log(resultado)
console.log()
var nomes = ["Bruno", "Zezinho", "Fulano", "Douglas"]

resultado = nomes.filter(function(item){
    return item.charAt(0) == 'Z'
})
console.log('Filtro nome que començam com a letra "Z"')
console.log(resultado)
console.log()

var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100]
var resultadoPar = numeros.filter(function(item){
    return item % 2 == 0
})

var resultadoImpar = numeros.filter(function(item){
    return item % 2 != 0
})
console.log('Filtro Par ou Ímpar')
console.log(resultadoPar)
console.log(resultadoImpar)
console.log()

//MAPEANDO ARRAYS - Alterada dados do Array

//Dobra os números de um array
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var dobrados = numeros.map(function(item){
    return item * 2
})
console.log('Dobra os números de um array')
console.log(dobrados)
console.log()

//Calcula o valor em celcius de uma lista de temparaturas em fahrenheit
var fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121]
var celcius = fahrenheit.map(function(item){
    return Math.round((item - 32)*5/9)
})
console.log('Calcula o valor em celcius de uma lista de temparaturas em fahrenheit')
console.log(celcius)
console.log()

//Alterna nomes para maiúscula
var convidados = ['daniel', 'GaBriEl', 'Diogo']

var convidadeNormalizado = convidados.map(function(item){
    return  item.toUpperCase()
})
console.log('Alterna nomes para maiúscula')
console.log(convidadeNormalizado)
console.log()

//REDUÇÃO DE ARRAYS - Agregação, mas pode funcionar como MAP ou FILTER.
//reduce(function(acumulador, item, indice, array), inicio) - início é opcional
var numeros = [1.5, 2, 4, 10]

//Soma dos valores do array
var soma = numeros.reduce(function(total, item, indice){
    console.log(`total: ${total}, indice: ${indice}, item: ${item}`)//trilha de log
    total += item
    return total
}, 0)//Iniciar a passagem na posição 0
console.log('Soma dos valores do array')
console.log(soma)
console.log()

//Média dos valores do array
var media = numeros.reduce(function(total, item, indice, array){
    total += item
    if(indice == array.length -1){
        return total / array.length
    }
    return total
})
console.log('Média dos valores do array')
console.log(media)
console.log()

//Funcionando como MAP
console.log('Funcionando como MAP')
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var dobrados = numeros.reduce(function(total, item){
    total.push(item * 2)
    return total
}, [])//Inicia o total como vetor
console.log('Dobrando os números do array')
console.log(dobrados)
console.log()

//Funcinando como Filter
var numeros = [10, 18, 1, 15]

var filtro = numeros.reduce(function(total, item){
    if(item > 10){
        total.push(item)
    }
    return total
}, [])
console.log('Funcinando como Filter')
console.log(filtro)
console.log()

//Uso de Filter + Map + Reduce
console.log('Uso de Filter + Map + Reduce')

var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100]

//Dobrando somente os números pares
var paresDobrados = numeros.filter(function(item){
    return item % 2 == 0
}).map(function(item){
    return item * 2
})

console.log('Dobrando somente os números pares')
console.log(paresDobrados)
