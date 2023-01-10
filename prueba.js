function Persona(nombre,edad){
    this.nombre=nombre
    this.edad=edad
}
Persona.prototype.saludar=function(){
    console.log(
        `hola mi amor ${this.nombre} y tengo ${this.edad}` 
    )
}
var persona1=new Persona('ricardo',48)
persona1.saludar()