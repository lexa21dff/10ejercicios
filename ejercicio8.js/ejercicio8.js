class Dia {
    constructor(num){
        this.dias=num
    }
    mostrarsegundos(segundos){
        segundos =((this.dias*24)*60)*60
        console.log(" el numero de dias es "+this.dias + " el segundos son " +segundos)
        document.write(" el numero de dias es "+this.dias + " el segundos son " +segundos)
    }
}
  seg1= new Dia(6)
  seg1.mostrarsegundos()