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

function plim(){
    console.log('Plim, plim')
}

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

//MODIFICAÇÃO DE FUNÇÃO
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
function ola(quem){
   if(quem == undefined){
       console.log('Olá, tudo bem?')
   }else{
       console.log('Olá ' + quem)
   }
}

ola('Diogo')
ola()
console.log()

//PARÂMETROS OPCIONAIS
function pontecia(base, exp){
    if(exp == undefined){
        exp = 2
    }

    var res = 1
    for (var cont = 0; cont < exp; cont ++){
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
    var mensagem = "Olá "

    for (var i=0; i<arguments.length - 1; i++){
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

//FUNÇÃO RECURSIVA
function fatorial(num){
    if(num == 1){
        return 1
    }else{
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))