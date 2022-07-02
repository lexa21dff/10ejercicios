//hola mi vida mia te amo mi cielo 
class Contador {
    constructor(incrementar,decrementar) {
        this.incrementar=incrementar
        this.decrementar=decrementar
        this.Contador=0
        
    }
    mostrarincrementar(){
        this.Contador=this.incrementar
        console.log(this.Contador)
        
        }

    
    mostrardecrementar(){
        this.Contador=this.incrementar-this.decrementar
        console.log(this.Contador)

    }
}
a=new Contador(20,5)
a.mostrarincrementar()
a.mostrardecrementar()
