class LlamadaTelefonica{
    constructor  (minutos){
        this.duracion=minutos 
    }
    costollamada(costo){
        if (this.duracion>3){
            costo=(this.duracion*300)+600
console.log("duracion de la llamada es "+this.duracion+" su costo es"+costo)
document.write("duracion de la llamada es "+this.duracion+" su costo es"+costo)
        }
        else{
            costo=this.duracion*500
            console.log("duracion de la llamada es "+this.duracion+" su costo es"+costo)
            document.write("duracion de la llamada es "+this.duracion+" su costo es"+costo)
        }
    }
}
lladama1=new LlamadaTelefonica  (2);
llamada2= new LlamadaTelefonica (5)
lladama1.costollamada()
llamada2.costollamada()