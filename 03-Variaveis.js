/*
Convenções de nomenclatura
-Não pode conter espaço
-Separação de palavras por Camel case ou Snake case
    Camel case: nomeCompleto
    Snake case: nome_completo
-Inicar com letra, _ ou $
-Não pode palavra reservada

Declaração de Variáveis

var nomeDaVariável

Declaração por var equivale a uma "variável global"

Agrupamento de declarações de Variáveis
var nome = "Diogo", idade = 41
var dataNascimento, cpf 
*/
console.log('Number')
var x = 2
var y = 1
var z
console.log(x)
console.log(y)
console.log(z)
x = 3
console.log(x + y)
var a = 1.5, b = 2.3
console.log(a + b)
console.log(a + x)
var i=5
console.log(i+=2)
console.log(i-=2)
console.log(i*=2)
console.log()

console.log('String')
var frase = 'Teste de String'
console.log(frase)
console.log(frase.toLocaleLowerCase())
console.log(frase.toUpperCase())
console.log(frase.charAt(2))
console.log(frase.replace('e', 'a'))
var novaFrase = ''
for(var l in frase){
    novaFrase += frase[l].replace('e','a')
}
console.log(novaFrase)
console.log(frase.slice(2,5))
console.log(frase.split('t'))
//Interpolação de texto com variável
var nome, idade
nome = "Diogo"
idade = 41
console.log(`${nome} tem ${idade} anos`)
console.log()

console.log('BOOLEANO')
var verdade = true
var mentira = false
console.log('E: ')
console.log(verdade && mentira)
console.log(verdade && verdade)
console.log(mentira && mentira)
console.log(verdade && verdade)
console.log('Ou: ')
console.log(verdade || mentira)
console.log(verdade || verdade)
console.log(mentira || mentira)
console.log(verdade || verdade)
console.log('NEGAÇÃO:')
console.log(!verdade)
console.log(!mentira)
console.log('XOR - OU exclusivo:')
console.log(Boolean(verdade ^ verdade))
console.log(Boolean(verdade ^ mentira))
console.log(Boolean(mentira ^ verdade))
console.log(Boolean(mentira ^ mentira))
console.log('NOR - "Nem um nem outro":')
console.log(!verdade && !mentira)
console.log(!verdade && !verdade)
console.log(!verdade && !verdade)
console.log(!mentira && !mentira)
console.log()

console.log('DATE')
var dataNascimento = new Date(1980, 11, 08, 14, 15, 30)
console.log(dataNascimento)
var diaSemana = dataNascimento.getDay()
console.log(diaSemana)
var diaMes = dataNascimento.getDate()
console.log(diaMes)
var mes = dataNascimento.getMonth()
console.log(mes)
var ano = dataNascimento.getFullYear()
console.log(ano)
var hora = dataNascimento.getHours()
console.log(hora)
var minuto = dataNascimento.getMinutes()
console.log(minuto)
var segundos = dataNascimento.getSeconds()
console.log(segundos)
console.log(dataNascimento)
console.log(dataNascimento.toISOString())
var dia = new Date
dia.setDate(20)
dia.setMonth(0)
dia.setFullYear(2022)
dia.setHours(14)
dia.setMinutes(30)
dia.setSeconds(10)
console.log(dia)
console.log(dataNascimento)
console.log(dataNascimento.toISOString())
hoje = new Date
console.log(hoje)
console.log(hoje.getDay())
console.log()

console.log('Conversão de Tipos: ')
console.log(String(2) + 2)
console.log(Number("5") + 5)
console.log(Boolean(1))
console.log(typeof("4"))
console.log(typeof(3))
console.log(typeof(true))

/*
Constantes - não podem ser alteradas após declaração
Escopo de constante é local
Nomenclatura normalmente é SCREAMING_SNAKE_CASE
*/

const cpf = '123.456.789-00'
console.log(cpf)

cpf = '009.876.543-21'
