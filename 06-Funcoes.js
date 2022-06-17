//Declaração de função
console.log('Declaração de função')
function plim(){
    console.log('Plim, plim')
}

//Funções Anônimas - Função retorna diretamente a uma variável
console.log('\nFunções Anônimas - Função retorna diretamente a uma variável')
var soma = function(x, y){
    var resultado = x + y
    return resultado
}

var sub = function(x, y){
    return x - y
}

var mult = function(x, y){
    return x * y
}

var div = function(x, y){
    return x / y
}

x=5
y=2

console.log(soma(x, y))


plim()
console.log()

var paisagem = function() {
    var res = "";
    var vale = function(quant) {
    for (var c = 0; c < quant; c++) {
    res += "_";
    }
    };
    var montanha = function(quant) {
    res += "/";
    for (var c = 0; c < quant; c++) {
    res += "'";
    }
    res += "\\";
    };
    vale(3);
    montanha(4);
    vale(6);
    montanha(1);
    vale(1);
    return res;
   };
   console.log(paisagem());

function calculadora(x, y, oper){
    return(oper(x, y))
}
console.log()
console.log(calculadora(x, y, soma))
console.log(calculadora(x, y, sub))
console.log(calculadora(x, y, mult))
console.log(calculadora(x, y, div))
console.log()

//ESCOPO DE VARIÁVEIS
//var - Escopo global
//let - escopo local
console.log('ESCOPO DE VARIÁVEIS')
var nome = 'Gabriel'
function Ola(){
  let nome = 'Diogo'
  console.log(nome)
}
console.log(nome)
Ola()

//MODIFICAÇÃO DE FUNÇÃO
console.log('MODIFICAÇÃO DE FUNÇÃO')
function lancarMisselNuclear() {
    console.log('Lançando em 3..2..1. Lançado')
}

pais = 'brasil'

if (pais == 'russia'){
    lancarMisselNuclear = function(){
        console.log('Usar telefone vermelho')
    }
}

lancarMisselNuclear()
console.log()

//CONTROLE DE PARÂMETROS
console.log('CONTROLE DE PARÂMETROS')
function ola1(quem){
   if(quem == undefined){
       console.log('Olá, tudo bem?')
   }else{
       console.log('Olá ' + quem)
   }
}
ola1('Diogo')
ola1()
console.log()

//PARÂMETROS OPCIONAIS
console.log('PARÂMETROS OPCIONAIS')
//Por undefined
function pontecia(base, exp){
    if(exp == undefined){
        exp = 2
    }

    let res = 1
    for (let cont = 0; cont < exp; cont ++){
        res *= base
    }

    return res
}
console.log(pontecia(2))
console.log(pontecia(2, 3))
console.log()

//Por valor padrão
function pontecia(base, exp = 1){
    let res = 1 
    for (let cont = 0; cont < exp; cont ++){
        res *= base
    }
    return res
}
console.log(pontecia(2))
console.log(pontecia(2, 3))
console.log()

//NÚMEROS DE PARÂMETROS VARIÁVEIS
console.log('NÚMEROS DE PARÂMETROS VARIÁVEIS')
function ola2(){
    let mensagem = "Olá "

    for (let i=0; i<arguments.length - 1; i++){
        mensagem += arguments[i]
        if (i < arguments.length - 2){
            mensagem += ', '
        }
    }
    mensagem += "e " + arguments[arguments.length-1] + "! Tudo bem?"
    console.log(mensagem)
}
ola2("Diogo", "Fernanda", "Gabriel", "Guilherme")
ola2("Cadu", "Cyntia", "Lucas")
console.log()

function somaVarios(){
    let r = 0
    for (let n of arguments){
        r += n
    }
    return r
}
console.log(somaVarios(1,3,6))
console.log(somaVarios(1,3))
console.log(somaVarios())

//PASSAGEM DE PARâMETROS: VALOR OU REFERÊNCIA
//Quando o parêmetro é um objeto, a passagem é por referÊncia. Do contrário a passagem é por valor
console.log('\nPASSAGEM DE PARâMETROS: VALOR OU REFERÊNCIA')
function quad(n){
    return n*n
}
num = 10
console.log(quad(num))
console.log(num)

function quadObj(obj){
    obj.valor *= obj.valor
    return obj
}
const numObj = {valor: 10}
console.log(quadObj(numObj))
console.log(numObj)
//ARROW FUNCTION
console.log('\nARROW FUNCTION')
var soma = (x, y) => x + y

console.log(soma(3, 4))

var dobra = (x) => {
  return x * 2
}
console.log(dobra(6))
console.log(dobra(4))

//Callbacks
console.log('\nCALLBACKS')
var valores = [1, 2, 3, 4, 5]
const mult2 = (x) => x * x //Função Callback
function percorreVetor(vetor, func){
    for (let i  in vetor){
        vetor[i] = func(vetor[i])
    }
    return vetor
}
console.log(percorreVetor(valores, mult2))
//FUNÇÃO RECURSIVA
console.log('\nFUNÇÃO RECURSIVA')
function fatorial(num){
    if(num == 1){
        return 1
    }else{
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))
