var i = 0

while(i < 10){
    console.log('Não vou colar ' + i)
    i += 1
}

console.log()

while(true){
    console.log('Entrou no WHILE ' + i)
    if (i==10){
        console.log('BREAK NO WHILE\n')
        break
    }else{
        i++
    }
}

i = 0

do{
    console.log(`Passo ${i}`)
    i++
}while(i < 10)

console.log()

for (i=1; i<=10; i++){
    console.log(`Passo ${i}`)
}

//FOR infinito
for(;;){
    break
}
