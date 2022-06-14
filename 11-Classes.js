class Pessoa {
//Atributos
  cpf
    
  constructor(n, g) {//Construtor - instancia atributos obrigatórios ao criar o objeto da Classe
    this.nome = n
    this.genero = g
  }
//Métodos
  apresentar(){
    console.log(`Olá, me chamo ${this.nome}`)
  }

  obterCPF(cpf){
    this.cpf = cpf
    console.log(`Tirei meu CPF. O número dele é ${this.cpf}`)
  }
}

var pessoa = new Pessoa('Diogo', 'Masculino')

pessoa.apresentar()
pessoa.obterCPF('123.456.789-10')