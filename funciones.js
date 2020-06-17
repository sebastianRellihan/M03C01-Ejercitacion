let persona = {
    /**
     * Saluda a una persona por su nombre.
     * @param {string} nombre El nombre de la persona a la que se desea saludar.
     */
    saludar : function (nombre) {
        console.log('Hola ' + nombre);
        
    },
    /**
     * Despide a una persona por su nombre.
     * @param {string} nombre El nombre de la persona a la que se desea despedir.
     */
    despedir : function (nombre){
        console.log("Chau " + nombre);
    },
    /**
     * Determina si la persona es mayor de edad.
     * @param {number} edad La edad de la persona en cuestión.
     */
    esMayor : function(edad) {
        if(edad>=18) {
            console.log('Sos mayor de edad');      
        } else {
            console.log('Sos menor de edad');
        }
    }
}
mayor(20);
