/*
Declaração de Variáveis

var variável
*/
console.log('Number')
var x = 2
var y = 1
console.log(x)
console.log(y)
x = 3
console.log(x + y)
var a = 1.5
var b = 2.3
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

console.log('Conversão de Tipos: ')
console.log(String(2) + 2)
console.log(Number("5") + 5)
console.log(Boolean(1))
console.log(typeof("4"))
console.log(typeof(3))
console.log(typeof(true))

//Constantes - não podem ser alteradas após declaração

const cpf = '123.456.789-00'
console.log(cpf)

cpf = '009.876.543-21'
