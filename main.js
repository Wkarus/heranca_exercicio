class Carro{
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel =0
        this.cor=undefined
    }
setCor=function(cor){
    this.cor=cor
}
}

class Minivan extends Carro{
constructor(nome,portas,espacoCarga,qntPessoas){
super(nome,portas)
this.espacoCarga = espacoCarga
this.qntPessoas = qntPessoas
this.setCor("preto")
}



}

const Carro1= new Carro ("Van",4)

const Carro2=new Minivan("acura",6)

console.log(`Nome: ${Carro1.nome}`)
console.log(`portas: ${Carro1.portas}`)
console.log(`ligado: ${Carro1.ligado}`)
console.log(`vel: ${Carro1.vel}`)
console.log(`cor: ${Carro1.cor}`)


console.log(`Nome: ${Carro2.nome}`)
console.log(`portas: ${Carro2.portas}`)
console.log(`ligado: ${Carro2.ligado}`)
console.log(`vel: ${Carro2.vel}`)
console.log(`espacoCarga: ${Carro2.espacoCarga}`)
console.log(`qntPessoas: ${Carro2.qntPessoas}`)
console.log(`cor: ${Carro2.cor}`)