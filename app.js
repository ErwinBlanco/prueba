//DDM de eventos
document
.getElementById("formulario-producto")
.addEventListener("submit", function(elemento){

        elemento.preventDefault();// evalua el comportamiento del  elemento
        //obtener valores de formularios
        const name = document.getElementById("name").value,
        precio = document.getElementById("precio").value,
        año = document.getElementById("año").value;
        //crear un nuevo objeto producto
        const producto = new Producto(nombre, precio, año);
        
        //crear nuevo usuario
        const usuraio = Usuario();

        //boton de validacion
        if (nombre === "" || precio === "" || año === "") {
            usuario.showMessage("Por favor insertar nombre de usuario");
        }

        //guardar producto
        usuario.addProducto(producto);
        usuario.showMessage("producto agregado correctamente");
        usuario-resertform();
});

document.getElementById("Lista-producto").addEventListener("click", (elemento)=>{
    const usuario = new Usuario();
    usuario.deleteProduct(elemento.target);
    elemento.preventDefault();
});

//producto clase

export class Producto{
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}