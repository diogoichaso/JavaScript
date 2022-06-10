var idade = 18
var genero = 'F'

if(idade >= 18){
    console.log('Parabén!. Você é maior de idade')
}

if (idade >= 18){
    console.log('Catraca liberada')
}else{
    console.log('Catraca Bloqueada')
}


console.log((genero == 'M') && (genero = 'M')) 
if ((idade < 18) && (genero == 'F')){
    console.log('Meninas não são permitidas no clube')
}else if((idade >= 18) && (genero == 'M')) {
    console.log('Bem-vindo ao clube do bolinha')
} else{
    console.log('Entrada proibida')
}