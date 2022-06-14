//OBJETOS
//Estruturas de dados 
//Criação Direta
var pessoa = {
    //Propriedades ou Atributos
    nome: 'Diogo',
    idade: 41,
    dataNascimento:{
        dia: 08, 
        mes: 12, 
        ano: 1980
    },
    cpf: "123.456.789-10",
    hobies: ['Jogos', 'Futebol', 'Programação'],

    //Métodos
    fazerAniversario: function (){
        this.idade++
        console.log(`Feliz Aniversário. Você completou ${this.idade} anos`)
    },

    bomDia: function(nome){
        console.log(`Bom dia, ${nome}`)
    }
}
console.log(pessoa)
console.log(`pessoa.nome: ${pessoa.nome}`)
console.log(`pessoa['nome']: ${pessoa['nome']}`)
console.log(pessoa['cpf'])
console.log(pessoa.cpf)
console.log(pessoa.hobies[1])
pessoa.fazerAniversario()
pessoa.bomDia('Fernanda')
console.log()

//Declaração de Objetos
//"Criação Fragmentada"
console.log('Criação Fragmentada')
var pessoa = {}
pessoa.nome = "Diogo"
console.log(pessoa)
pessoa.idade = 41
console.log(pessoa)
pessoa['cpf'] = "123.456.789-10"
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
pessoa.boaNoite = function(nome){
    console.log(`Boa noite, ${nome}`)
}
console.log(pessoa)
pessoa.boaNoite('Fernanda')
console.log()

//DESESTRUTURAÇÃO
console.log('DESESTRUTURAÇÃO')
const convidado = {
    nome: "Diogo", 
    idade: 41, 
    endereco: {logadrouro: "Rua 1", numero: 399}
}

const {
    nome, 
    idade, 
    endereco: {numero}
} = convidado

console.log(nome)
console.log(idade)
console.log(numero)
console.log()

function imprimir ({nome, idade}) {
    console.log(nome)
    console.log(idade)
}
imprimir(convidado)
console.log()

//Igualdade de objetos
console.log('Igualdade de objetos')
var pessoa1 = {nome: "Diogo", idade: 41, time: 'Flamengo'}
var pessoa2 = pessoa1 // pessoa 2 é uma referência a pessoa 1. "Mesma pessoa"
var pessoa3 = {nome: "Diogo", idade: 41, time: 'Flamengo'}
console.log(pessoa1 == pessoa2)
console.log(pessoa1 == pessoa3)
console.log(`pessoa1.time: ${pessoa1.time}`)
console.log(`pessoa2.time: ${pessoa2.time}`)
pessoa2.time = 'Dodgers'
console.log(`pessoa1.time: ${pessoa1.time}`)
console.log(`pessoa2.time: ${pessoa2.time}`)
console.log()

//Copiando Objeto
console.log('Copiando objeto')
console.log(pessoa1)
var pessoa4 = Object.create(pessoa1)//"Cria um clone" - Se nenhum atribuito for instanciado, utiliza o atributo do objeto pai
console.log(pessoa4)
pessoa4.time = 'Flamengo'
console.log(`pessoa1.time: ${pessoa1.time}`)
console.log(`pessoa4.time: ${pessoa4.time}`)
pessoa1.time = 'Cubs'
console.log(`pessoa1.time: ${pessoa1.time}`)
console.log(`pessoa4.time: ${pessoa4.time}`)
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

//CONSULTA A DADOS DE OBJETOS POR HASH
console.log('CONSULTA A DADOS DE OBJETOS POR HASH')
var aluno = []
aluno["116637"] = {nome: "Diogo", idade: 41}
mat = "116637"
console.log(aluno[mat])
console.log()
aluno["31149"] = {nome: "Ogoid", idade: 23}
console.log('Percorrendo Array pela Hash')
for (var id in aluno)
{
 console.log(aluno[id]);
}
console.log()

//DELETAR ATRIBUTO
console.log('DELETAR ATRIBUTO')
delete alunos[3].idade
console.log(alunos)
alunos[3].idade = 1
console.log(alunos)
console.log()

//ORDENARÇÃO
//ORDENANDO POR NOME
console.log('ORDENARÇÃO')
console.log('ORDENANDO POR NOME')
function compareNome(a,b) {
    if (a.nome < b.nome)
       return -1;
    if (a.nome > b.nome)
      return 1;
    return 0;
}
console.log(alunos.sort(compareNome))
console.log()

//ORDENANDO POR IDADE
console.log('ORDENANDO POR IDADE')
function compareIdade(a,b) {
    if (a.idade < b.idade)
       return -1;
    if (a.idade > b.idade)
      return 1;
    return 0;
}
console.log(alunos.sort(compareIdade))
console.log()

//FILTRANDO
console.log('FILTRANDO')
var filme = [
    {titulo: 'Titanic', duracao: 195, nota: 7.5},
    {titulo: 'Vingadores', duracao: 203, nota: 9.5},
    {titulo: 'Mr Bean', duracao: 90, nota: 6.5}
]

var notaCorte = 8
var filmesBons = filme.filter(function(item){
    return item.nota >= notaCorte
})

var filmesRuins = filme.filter(function(item){
    return item.nota < notaCorte
})
console.log('Filtro de Filme por sua nota')
console.log('Filmes bons: ')
console.log(filmesBons)
console.log('Filmes ruins: ')
console.log(filmesRuins)
console.log()


var convidados = [
    {nome: 'Daniel', vip: true, idade: 21},
    {nome: 'Gabriel', vip: true, idade: 54},
    {nome: 'Diogo', vip: false, idade: 41} 
]

var listaVIP = convidados.filter(function(item){
    return item.vip
})
console.log('Filtro por característa VIP')
console.log(listaVIP)
console.log()

//MAPEANDO ARRAYS - Alterada dados do Array
//Alterna nomes para maiúscula
console.log('MAPEANDO ARRAYS')
var convidados = [
    {nome: 'daniel', vip: true, idade: 21},
    {nome: 'GaBriEl', vip: true, idade: 54},
    {nome: 'Diogo', vip: false, idade: 41} 
]

var convidadeNormalizado = convidados.map(function(item){
    //copiando o objeto inteiro:  Object.assign(origem, destino)
    return  Object.assign(item, {nome: item.nome.toUpperCase()})
})
console.log('Alterna nomes para maiúscula')
console.log(convidadeNormalizado)
console.log()

//REDUÇÃO - Agrupamento
//reduce(function(acumulador, item, indice, array), inicio) - início é opcional
console.log('REDUÇÃO')
var carros = [
    {marca: 'Audi', cor: 'preto'},
    {marca: 'Audi', co: 'branco'},
    {marca: 'Ferrari', cor: 'vemelho'},
    {marca: 'Ford', cor: 'branco'},
    {marca: 'Peugeot', cor: 'branco'}
]

//Agrupar por Marca
function agruparPor(array, prop){
    var valor = array.reduce(function(total, item){
        var chave  = item[prop]
        total[chave] = (total[chave] || []).concat(item)
        return total
    }, {})
    return valor
}

var agrupados = agruparPor(carros, 'marca')
console.log('Agrupando Carros pela Marca')
console.log(agrupados)
console.log()

//Agrupando por Categoria filtrado por vestuário
var produtos = [
    {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 456, nome: 'Tênis', cor: 'preto', tamanho: '41', categoria: 'Vestuário'},
    {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria: 'Esporte'}
   ]

var novoProdutos = produtos.filter(function(item){
    return item.categoria == 'Vestuário'
})

var agrupados = agruparPor(novoProdutos, 'categoria')
console.log('Agrupando por Categoria filtrado por vestuário')
console.log(agrupados)
console.log()

//Inserir métodos ou atributo em um objeto: Object.prototype
Array.prototype.groupBy = function(prop){
    var valor = this.reduce(function(total, item){
        var chave  = item[prop]
        total[chave] = (total[chave] || []).concat(item)
        return total
    }, {})
    return valor
}
//Filtro de Produtos tamanho G da Cor preta agrupados por categoria
var produtosFiltrados = produtos.filter(function(item){
    return item.cor == 'preto'
}).filter(function(item){
    return item.tamanho == 'G'
}).groupBy('categoria')

console.log('Filtro de Produtos tamanho G da Cor preta agrupados por categoria')
console.log(produtosFiltrados)
console.log()

//Passo a passo
console.log('Agrupar por categoria - Passo a passo')
Array.prototype.groupBy = function(prop){
    var valor = this.reduce(function(total, item, indice){
        console.log('Indice:')
        console.log(indice)
        console.log()
        
        console.log('Total:')
        console.log(total)
        console.log()
        
        console.log('Item:')
        console.log(item)
        console.log()
       
        console.log('Propriedade:')
        console.log(prop)
        console.log()
        
        var chave  = item[prop]

        console.log('Chave:')
        console.log(chave)
        console.log()

        console.log('total[chave] inicial:')
        console.log(total[chave])
        console.log()

        total[chave] = (total[chave] || []).concat(item)
        
        console.log('total[chave] final:')
        console.log(total[chave])
        console.log()

        console.log('total:')
        console.log(total)
        console.log()

        return total
    }, {})
    return valor
}

var produtosFiltrados = produtos.groupBy('categoria')

console.log('Filtro de Produtos tamanho G da Cor preta agrupados por categoria')
console.log(produtosFiltrados)
console.log()
