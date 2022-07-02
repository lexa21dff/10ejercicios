
class Fraccion {
    constructor(num1,num2,num3,num4) {
        this.numerador1= num1
        this.denominador1= num2
        this.numerador2=num3
        this.denominador2=num4
    }
    sumar (resultado){
         resultado = ((this.numerador1*this.denominador2 )+(this.numerador2*this.denominador1) )/(this.denominador1*this.denominador2)

  
    console.log ("resultado de la suma de los fraccionarios  "+resultado)
    };
    restar(resultado){
        resultado = ((this.numerador1*this.denominador2 )-(this.numerador2*this.denominador1) )/(this.denominador1*this.denominador2)
        console.log ("resultado de la resta de los fraccionarios "+resultado)
    }
    multiplicar(resultado){
      resultado=  (this.numerador1*this.denominador2 )/(this.denominador1*this.denominador2)

    console.log ("resultado de la multiplicacion de los fraccionarios "+resultado)
    }
    dividir(resultado){
       resultado=(this.numerador1*this.denominador2 )/(this.numerador2*this.denominador1)
        console.log ("resultado de la divicion de los fraccionarios " +resultado)
    }
    mostrar (){
        console.log("fracion 1 su numerador es "+this.numerador1+" denominador es "+this.denominador1+" fracion 2 su  numerador es "+this.numerador2+" denominador es "+this.denominador2)
    }
}
 frac = new Fraccion (23,20,30,25)
 frac.mostrar()
frac.sumar()
frac.restar()
frac.multiplicar()
frac.dividir()
