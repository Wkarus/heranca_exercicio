class Carro{
    constructor(nome,portas){
        this.nome = nome
        this.portas =portas
        this.ligado = false
        this.vel =0
        this.cor=undefined
    }
setCor=function(cor){
    this.cor=cor
}
}

class Minivan extends Carro{
constructor(nome,portas,espacoCarga){
super(nome,portas)
this.espacoCarga=espacoCarga
this.setCor("preto")
}



}

const Carro1= new Carro ("Van",4)

const c2=new Minivan("acura,"6)

console.log(`Nome: ${Carro1.nome}`)
console.log(`portas: ${Carro1.portas}`)
console.log(`ligado: ${Carro1.ligado}`)
console.log(`vel: ${Carro1.vel}`)
console.log(`cor: ${Carro1.cor}`)