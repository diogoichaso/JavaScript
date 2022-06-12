/*Adicione em nosso pequeno sistema de controle de convidados as funções de filtro para barrar as pessoas
com menos de 18 anos e mais.

Que possa permitir agrupar entre gêneros para melhorar a organização de cobrança e ordenar por nome, já
que no futuro evento o cliente comentou que "mulher paga meia" e que precisa estar ordenado para
conferência mais rápida de nomes.
 */


const input = require("prompt-sync")()


Array.prototype.groupBy = function(prop){
    var valor = this.reduce(function(total, item){
        var chave  = item[prop]
        total[chave] = (total[chave] || []).concat(item)
        return total
    }, {})
    return valor
}

function compare(a,b) {
    if (a.nome < b.nome)
       return -1;
    if (a.nome > b.nome)
      return 1;
    return 0;
  }

var convidados = []

while(true){
    console.clear()
    var nome = input('Informe o nome: ')
    var idade = Number(input('Informe a idade: ' ))
    var genero = String(input('Informe o genero[F/M]: ')).toUpperCase()

    var pessoa = {nome: nome, idade: idade, genero: genero}
    convidados.push(pessoa)
    var resp = String(input('Inserir outra pessoa[S/N]? ')).toUpperCase()
    if(resp == 'N'){
        break
    }
}
console.clear()
console.log(convidados)
var convidadosOrdenados = convidados.sort(compare)
console.log(convidadosOrdenados)

var grupoGenero = convidadosOrdenados.filter(function(pessoa){
    return pessoa.idade >= 18
}).groupBy('genero')
console.log(grupoGenero)
console.log()

var maioresHomens = convidados.filter(function(pessoa){
    return pessoa.idade >=18 && pessoa.genero == 'M'
}).map(function(pessoa){
    return pessoa.nome
}).sort()

var maioresMulheres = convidados.filter(function(pessoa){
    return pessoa.idade >=18 && pessoa.genero == 'F'
}).map(function(pessoa){
    return pessoa.nome
}).sort()

console.log('Lista de Homens maiores de 18 anos:')
for(p in maioresHomens){
    console.log(maioresHomens[p])
}
console.log('Lista de Mulheres maiores de 18 anos:')
for(p in maioresHomens){
    console.log(maioresMulheres[p])
}