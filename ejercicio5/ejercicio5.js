class Fraccion {
    constructor(num1, num2) {
        this.numero= num1
        this.numero_=num2
    }
    sumar (sum){
        sum =this.numero + this.numero_
        return  "la suma de a" + this.numero+"y b" +this.numero_+"es igual"+sum;
     }
    restar(res){
        res =(this.numero) -( this.numero_)
        return  "la resta de a" + this.numero+"y b" +this.numero_+"es igual"+res;
    }
    multiplicar(mut){
        mut =this.numero * this.numero_
        return  "la multiplicacion de a" + this.numero+"y b" +this.numero_+"es igual"+mut;
    }
    dividir(dividi){
        dividi =this.numero / this.numero_ 
        return  "la suma de a" + this.numero+"y b" +this.numero_+"es igual"+dividi;
    };
}
 frac = new Fraccion (23,-3)
 console.log(frac.sumar())
 console.log(frac.restar())
 console.log(frac.multiplicar())
 console.log(frac.dividir())
