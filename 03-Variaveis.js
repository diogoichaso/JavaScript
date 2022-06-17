/*
Constantes - não podem ser alteradas após declaração
Escopo de constante é local
Nomenclatura normalmente é SCREAMING_SNAKE_CASE
*/

const cpf = '123.456.789-00'
console.log(cpf)

cpf = '009.876.543-21'

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

console.log('\nNumber')
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
var num = 1
console.log(num++)
console.log(++num)
console.log(num--)
console.log(--num)
console.log(i+=2)
console.log(i-=2)
console.log(i*=2)
//Casas Decimais
console.log('\nCasa Decimais')
var valor = 1234.56
console.log(valor.toFixed(2))
console.log(valor.toFixed(1))
console.log(valor.toFixed(3))
console.log(Math.ceil(valor))
console.log(Math.floor(valor))
console.log(Math.round(valor))
console.log(
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor)
)
console.log('STRING')
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
//String <==> Array
console.log('\nString <==> Array')
var nome = 'Diogo'
console.log(nome[0])
for (let l of nome){
  console.log(l)
}
console.log(nome.length)

var vetor = [1, 2, 3, 4, 5]
console.log(vetor.join())
console.log(vetor.join(" - "))

//Separando e Juntando Strings
console.log('\nSeparando e Juntando Strings')
var frase = 'Eu sou um cara legal!'
console.log(frase.split(" ").join('-'))

//Localizando Strings
console.log('\nLocalizando Strings')
console.log(frase.includes('!'))
console.log(frase.includes('Diogo'))

//Substituindo String
console.log('\nSubstituindo String')
var frase1 = 'Gustavo é um cara legal'
console.log(frase1.replace('Gustavo', 'Diogo'))
var valor1 = 1234.567
console.log(valor1.toFixed(2).replace('.', ','))

//Contar Dígitos
console.log('\nContar Dígitos')
var nome = 'Diogo'
var numero = 12345
console.log(String(numero).length)
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
// Number <==> String
console.log('Number <==> String')
var num = "2"
console.log(num)
console.log(typeof (num))
var numNum = Number(num)
console.log(numNum)
console.log(typeof (numNum))
var numStr = String(numNum)
console.log(numStr)
console.log(typeof (numStr))
var srt = 'A'
console.log(Number(srt))

//Number & String <==> Boolean
console.log('\nNumber & String <==> Boolean')
console.log(Boolean(""))
console.log(Boolean('abc'))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(String(true))
console.log(String(false))
console.log(Number(true))
console.log(Number(false))

//String <==> Date
console.log('\nString <==> Date')
//Date é no formarto mm/dd/aaaa
var data = new Date("12/30/2022 12:10:01")
console.log(data)
data = new Date("11 29 2022 12:10:01")
console.log(data)
var dataStr = new Date().toString()
console.log(dataStr)
var dataIso = new Date().toISOString()
console.log(dataIso)