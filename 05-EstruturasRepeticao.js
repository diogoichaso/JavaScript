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

for (let i=1; i<=10; i++){
    console.log(`Passo ${i}`)
}

for (let i = 10; i > 0; i--){
    console.log(`Passo ${i}`)  
}

//FOR infinito
for(;;){
    break
}

//Fon in
const nomes = ['Diogo', 'Fraga', 'Rocha', 'Ichaso']

for (let n in nomes){
    console.log(nomes[n])
}
console.log()

//for of
for (let nome of nomes){
    console.log(nome)
}
