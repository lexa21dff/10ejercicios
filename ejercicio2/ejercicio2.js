// ejercicio1 
class SerVivo{
    constructor(animal,nombre){
        this.nombre=nombre
        this.animal=animal
    }
        Respiro (){
    
        };
        MeAlimento (){
    
        };
        Habito (){
    
        };
        MeReproduzco (){
    
        };
        MeDesplazo (){
    
        };
    
    
    };
    // ejercicio2
    const _private =new WeakMap ();
    class Ave extends SerVivo{
        constructor (animal,nombre,numeropatas, tienealas, tipodepiel,habitan,ponenhuevos,MeReproduzco,medesplazo,tipoalimentacion,mealimento,venenoso ){
            super (animal,nombre,)
            this.numeropatas=numeropatas;
            this.tienealas= tienealas;
            this.tipodepiel=tipodepiel;
            this.habitan=habitan;
            this.ponenhuevos= ponenhuevos
            this.MeReproduzco= MeReproduzco
            this.medesplazo=medesplazo
            this.respiro="mediante un sistema bronquial"
            this.tipoalimentacion=tipoalimentacion
            this.mealimento=mealimento
            this.venenoso=venenoso
            
            const propiedades = {
                _animal:animal,
                _nombre:nombre,
                _numeropatas:numeropatas,
                _tienealas:tienealas,
                _tipodepiel:tipodepiel,
                _habitan:habitan,
                _ponenhuevos:ponenhuevos,
                _MeReproduzco:MeReproduzco,
                _medesplazo:medesplazo,
                _respiro:"mediante un sistema bronquial",
                _tipoalimentacion:tipoalimentacion,
                _mealimento:mealimento,
                _venenoso:venenoso
    
            }
            _private.set(this,{propiedades})        
    }   
    };
  let   ave1= new Ave ("ave","gallina","2" ,"tiene alas ","plumas","grangas","si","oviparos","caminando","hervivoros","maiz","no")
   console.log (ave1)
    
    class Mamifero extends SerVivo{
        constructor (animal, nombre,numeropatas, tienealas,tipodepiel,habitan,ponenhuevos,MeReproduzco,medesplazo,tipoalimentacion,mealimento,venenoso ){
            super (animal,nombre,)
            this.numeropatas=numeropatas;
            this.tienealas= tienealas;
            this.tipodepiel=tipodepiel;
            this.habitan=habitan;
            this.ponenhuevos= ponenhuevos
            this.MeReproduzco= MeReproduzco
            this.medesplazo=medesplazo
            this.respiro="nariz"
            this.tipoalimentacion=tipoalimentacion
            this.mealimento=mealimento
            this.venenoso=venenoso
            const propiedades = {
                _animal:animal,
                _nombre:nombre,
                _numeropatas:numeropatas,
                _tiealas:tienealas,
                _tipodepiel:tipodepiel,
                _habitan:habitan,
                _ponenhuevos:ponenhuevos,
                _MeReproduzco:MeReproduzco,
                _medesplazo:medesplazo,
                _respiro:"nariz",
                _tipoalimentacion:tipoalimentacion,
                _mealimento:mealimento,
                _venenoso:venenoso
    
            }
            _private.set(this,{propiedades})        
    }
    };

    let mamifero1 = new Mamifero ("mamifero","leon","4", "no tienen alas ","La piel es fina y cubierta por un pelo raso y brillante","en las sabanas ", "no","caminando","omnívoros","vegetales, animales","no");
    console.log(mamifero1)
    
    class Reptil extends SerVivo{
        constructor (animal,nombre,numeropatas,tienealas ,tipodepiel,habitan,ponenhuevos,MeReproduzco,medesplazo,tipoalimentacion,mealimento,venenoso ){
            super (animal,nombre,)
            this.numeropatas=numeropatas;
            this.tienealas= tienealas;
            this.tipodepiel=tipodepiel;
            this.habitan=habitan;
            this.ponenhuevos= ponenhuevos
            this.MeReproduzco= MeReproduzco
            this.medesplazo=medesplazo
            this.respiro="Fosas nasales. Tráquea"
            this.tipoalimentacion=tipoalimentacion
            this.mealimento=mealimento
            this.venenoso=venenoso
            const propiedades = {
                _animal:animal,
                _nombre:nombre,
                _numeropatas:numeropatas,
                _tiealas:tienealas,
                _tipodepiel:tipodepiel,
                _habitan:habitan,
                _ponenhuevos:ponenhuevos,
                _MeReproduzco:MeReproduzco,
                _medesplazo:medesplazo,
                _respira:"Fosas nasales. Tráquea",
                _tipoalimentacion:tipoalimentacion,
                _mealimento:mealimento,
                _venenoso:venenoso
    
            }
            _private.set(this,{propiedades})        
    }
    };
    let Reptil1 = new Reptil ("reptil", "cocodrilo","4","no","piel muy gruesa y rugosa","ecosistemas con agua","si","ovíparos","caminado","omnívoros","vegetales peses","no" );
    console.log(Reptil1)
    class Anfibio extends SerVivo{
        constructor (animal,nombre,numeropatas,tienealas, tipodepiel,habitan,ponenhuevos,MeReproduzco,medesplazo,tipoalimentacion,mealimento,venenoso ){
            super (animal,nombre)
            this.numeropatas=numeropatas;
            this.tienealas= tienealas;
            this.tipodepiel=tipodepiel;
            this.habitan=habitan;
            this.ponenhuevos= ponenhuevos
            this.MeReproduzco= MeReproduzco
            this.medesplazo=medesplazo
            this.respiro="branquias"
            this.tipoalimentacion=tipoalimentacion
            this.mealimento=mealimento
            this.venenoso=venenoso
            const propiedades = {
                _animal:animal,
                _nombre:nombre,
                _numeropatas:numeropatas,
                _tiealas:tienealas,
                _tipodepiel:tipodepiel,
                _habitan:habitan,
                _ponenhuevos:ponenhuevos,
                _MeReproduzco:MeReproduzco,
                _medesplazo:medesplazo,
                _respira:"branquias",
                _tipoalimentacion:tipoalimentacion,
                _mealimento:mealimento,
                _venenoso:venenoso
    
            }
            _private.set(this,{propiedades})        
    }
    };
    let anfibio1 =new Anfibio ("anfibio","rana","4","no",  "piel húmeda y permeable cubierta de glándulas mucosas", "lugares humedos","si","oviparos","nadando","carnivoros","inseptos","si")
    console.log(anfibio1)
    class Pez extends SerVivo{
        constructor (animal,nombre, tipodepiel,habitan,ponenhuevos,MeReproduzco,medesplazo,tipoalimentacion,mealimento,venenoso ){
            super (animal,nombre,)
            this.tienealetas="tiene aletas"
            this.tipodepiel=tipodepiel;
            this.habitan=habitan;
            this.ponenhuevos= ponenhuevos
            this.MeReproduzco= MeReproduzco
            this.medesplazo=medesplazo
            this.respiro="branquias"
            this.tipoalimentacion=tipoalimentacion
            this.mealimento=mealimento
            this.venenoso=venenoso
            const propiedades = {
                _animal:animal,
                _nombre:nombre,
                _tienealetas:"tiene aletas",
                _tipodepiel:tipodepiel,
                _habitan:habitan,
                _ponenhuevos:ponenhuevos,
                _MeReproduzco:MeReproduzco,
                _medesplazo:medesplazo,
                _respira:"branquias",
                _tipoalimentacion:tipoalimentacion,
                _mealimento:mealimento,
                _venenoso:venenoso
    
            }
            _private.set(this,{propiedades})        
    }
    };
    let pez1 =new Pez ("pez", "Pez ángel", "epidermis y dermis","si","oviparos","nadando","omnívoros","plantas, larvas", "no")
    
    console.log(pez1)
    
    class Insecto extends SerVivo{
        constructor (animal,nombre,numeropatas,tienealas, tipodepiel,habitan,ponenhuevos,MeReproduzco,medesplazo,tipoalimentacion,mealimento,venenoso ){
            super (animal, nombre,)
            this.numeropatas=numeropatas;
            this.tienealas= tienealas;
            this.tipodepiel=tipodepiel;
            this.habitan=habitan;
            this.ponenhuevos= ponenhuevos
            this.MeReproduzco= MeReproduzco
            this.medesplazo=medesplazo
            this.respiro="nariz pasa por la faringe"
            this.tipoalimentacion=tipoalimentacion
            this.mealimento=mealimento
            this.venenoso=venenoso
            const propiedades = {
                _animal:animal,
                _nombre:nombre,
                _numeropatas:numeropatas,
                _tiealas:tienealas,
                _tipodepiel:tipodepiel,
                _habitan:habitan,
                _ponenhuevos:ponenhuevos,
                _MeReproduzco:MeReproduzco,
                _medesplazo:medesplazo,
                _respira:"nariz pasa por la faringes",
                _tipoalimentacion:tipoalimentacion,
                _mealimento:mealimento,
                _venenoso:venenoso
    
            }
            _private.set(this,{propiedades})        
    }
    };
    let insecto1= new Insecto ("insecto","Avispón asiático","4", "si", "Exoesqueleto","tropicos", "si", "volando","oviparos", "omnívoros","vegetales","si" )
    console.log(insecto1)