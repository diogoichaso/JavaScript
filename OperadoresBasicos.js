/*Tipos Básicos

Número
Infinito: Infinity
- infinito: -Infinity
NaN: Not a Number
+: Soma
-: Subtração
*: Multiplicação
/: Divisão
%: Resto da divisão
**: Exponenciação

String:
Declaração entre '' ou ""
Quebra de linha: \n
Concatenação de String: +

Booleano
Verdadeiro: true
Falso: false

Operadores Lógicos:
Maior: >
Maior ou igual: >=
Menor: <
Menor ou igual: <=
Igual: ==
Diferente: !=
E: &&
Ou: ||
Negação: !

Conversão de Tipos
String(número): converte Número em String
Number("número"): convert String em número
typeof(dado): Retorna o tipo do dado
*/

console.log('Números:')
console.log(Infinity)
console.log(-Infinity)
console.log(0/0 + "\n")
console.log()
console.log('Strings:')
console.log('Primeira linha\nSegunda Linha')
console.log('Primeira Linha \\ Segunda Linha')
console.log('con' + 'ca' + 'te' + 'nar')
console.log()
console.log('Booleano:')
console.log(true)
console.log(false)
console.log()
console.log('Operadores Lógicos: ')
console.log('A' > 'a')
console.log('A' < 'a')
console.log('Z' > 'a')
console.log('z' < 'a')
console.log('E: ')
console.log(true && false)
console.log(true && true)
console.log(false && false)
console.log(true && true)
console.log('Ou: ')
console.log(true || false)
console.log(true || true)
console.log(false || false)
console.log(true || true)
console.log()
console.log('Conversão de Tipos: ')
console.log(String(2) + 2)
console.log(Number("5") + 5)
console.log(typeof("4"))
console.log(typeof(3))
console.log(typeof(true))
console.log(!false)