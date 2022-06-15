/*Tipos Básicos

Número
Números padrões: Biblioteca Math
Infinito: Infinity
- infinito: -Infinity
NaN: Not a Number
Null: Ausência de valor
Undefined: Valor indefinido
+: Soma
-: Subtração
*: Multiplicação
/: Divisão
%: Resto da divisão
**: Exponenciação
++: incrementar em 1
--: decrementar em 1
+=2: incrementar em 2
-=2: decrementar em 2

ORDEM DE PRECEDÊNCIA
1 - Parênteses
2 - Expenenciação
3 - Multiplicação
4 - Divisão
5 - Divisão Inteira
6 - soma
7 - subtração

String:
Declaração entre '' ou ""
Quebra de linha: \n
Concatenação de String: +
escape de texto: \ antes do caractér
  ex: 'Aqui vai um \'texto\' de exemplo'
Outras formas de escape: alternância entre tipos de aspas
  ex: "Aqui vai um 'texto' de exemplo"
      'Aqui vai um "texto" de exemplo'

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

Data:
Objeto Date
meses:
janeiro = 0
fevereiro = 1
março = 2
abril = 3
maio = 4
junho = 5
julho = 6
agosto = 7
setembro = 8
outubro = 9
novembro = 10
dezembro = 11

Conversão de Tipos
String(número): converte Número em String
Number("número"): convert String em número
typeof(dado): Retorna o tipo do dado
*/

console.log('Números:')
console.log(Math.PI)
console.log(Infinity)
console.log(1 / 0)
console.log(-Infinity)
console.log(0/0 + "\n")
console.log("A" / 2)
console.log(null)
console.log(undefined)
cosole.log(null == undefined)
console.log(null === undefined)
console.log(5+2)
console.log(5-2)
console.log(5*2)
console.log(5/2)
console.log(5%2)
console.log(5**2)
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
console.log('NEGAÇÃO:')
console.log(!true)
console.log(!false)
console.log('XOR - OU exclusivo:')
console.log(Boolean(true ^ true))
console.log(Boolean(true ^ false))
console.log(Boolean(false ^ true))
console.log(Boolean(false ^ false))
console.log('NOR - "Nem um nem outro":')
console.log(!true && !false)
console.log(!true && !true)
console.log(!false && !false)
console.log(!true && !true)
console.log()
console.log(Date())//Retorna da data e hora corrente
console.log(new Date())
console.log(new Date(2022, 3, 22))
console.log(new Dates (2022, 3, 22, 10, 20, 59)


