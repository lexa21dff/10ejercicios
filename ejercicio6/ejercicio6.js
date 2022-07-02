class Libro {
    constructor ( nombre,titulo,  autor,   prestados, devolucion) {   
        this.nombre=nombre;                              
        this.titulo= titulo;
        this.autor= autor;
        this.prestados= prestados;
        this.devolucion=devolucion
    
        }
       mostrarprestados(){
            
            if (this.prestados > 0 ) {
    this.Prestados
    console.log(this.nombre + " presto "+ this.prestados)
                
            };
    
        }
        mostrardevolucion(){
            if(this.devolucion>0){
               
                console.log(this.nombre + " devolvio "+ this.devolucion )
    
            }
            
            
        }
      get Autor() {
            return autor;
        }
    
    set Autor( autor1) {
            this.autor = autor1;
        }
    
         get _Devolucion() {
            return devolucion;
        }
    
        set _Devolucion(devolucion1) {
            this.devolucion = devolucion1;
        }
    
         get Prestados() {
            //return prestados;
        }
    
         set Prestados( prestados1) {
            this.prestados = prestados1;
        }
    
         get Titulo() {
            return titulo;
        }
    
        set Titulo( titulo1) {
            this.titulo = titulo1;
        }
    
        }
    
        let libro1 = new Libro ("Hanna","strange","alex mirez",5,3);
        libro1.mostrarprestados();
        libro1.mostrardevolucion();
        let libro2 = new Libro ("alexandra","ambrosio","valen",9,6);
        libro2.mostrarprestados();
        libro2.mostrardevolucion()

