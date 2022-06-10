var pessoa = {}
pessoa.nome = "Diogo"
console.log(pessoa)
pessoa.idade = 41
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log()

var convidado1 = {nome: "Diogo", idade: 41}
var convidado2 = convidado1
var convidade3 = {nome: "Diogo", idade: 41}
console.log(convidado1 == convidado2)
console.log(convidado1 == convidade3)
console.log()

//CONSULTA A DADOS DE OBJETOS POR HASH
console.log('CONSULTA A DADOS DE OBJETOS POR HASH')
var aluno = {}
aluno["116637"] = {nome: "Diogo", idade: 41}
mat = "116637"
console.log(aluno[mat])
console.log()
aluno["31149"] = {nome: "Ogoid", idade: 23}
for (var id in aluno)
{
 console.log(aluno[id]);
}