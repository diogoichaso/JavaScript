console.log('IF ELSE')
var idade = 18
var genero = 'M'

if(idade >= 18) console.log('Parabén!. Você é maior de idade')

if (idade <= 18){
    console.log('Menor de idade')
    console.log('Sai daqui moleque!')
}

if (idade >= 18){
    console.log('Catraca liberada')
}else{
    console.log('Catraca Bloqueada')
}
console.log()

console.log('IF ELSE IF')
console.log((genero == 'M') && (genero = 'M')) 
if ((idade < 18) && (genero == 'F')){
    console.log('Meninas não são permitidas no clube')
}else if((idade >= 18) && (genero == 'M')) {
    console.log('Bem-vindo ao clube do bolinha')
} else{
    console.log('Entrada proibida')
}
console.log()

console.log('OPERADOR TERNÁRIO')
idade = 18
var resp = idade >= 18 ? "maior" : "menor"
console.log(resp)

console.log('\nSwitch')
var opcao = 2
switch(opcao){
    case 1:
        console.log('Condição 1')
        break
    case 2:
        console.log('Condoção 2')
        break
    default:
        console.log('Condição default')
        break
}

console.log('\nTRY CATCH')
try{
    //Tentativa de execução
    console.log('Consultando banco de dados...')
    //throw 'Erro 1032 ao conectar com o banco de dados'
}catch(error){
    //Erro
    console.log('Erro de execução')
    console.error(error)
}finally{
    //Executa independente de encontrar erro - Opcional
    console.log('Execução Final')
}