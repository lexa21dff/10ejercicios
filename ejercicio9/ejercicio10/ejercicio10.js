class Automovil {
    constructor(marca,precioventa){
        this.marca=marca
        this.precioventa=precioventa
    }
    costoTotal(impuestov,impuestod,costo){
      impuestov=this.precioventa*0.12
    impuestod=this.precioventa*0,6
    costo=(this.precioventa+impuestov)+impuestod
    
        console.log("marca del automovil "+this.marca+" precio venta"+this.precioventa+" costo final $ "+costo)
    }
}
automovil1= new Automovil ("Mercedes-Benz.",384000000)
automovil1.costoTotal()