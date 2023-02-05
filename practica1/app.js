const carrito = document.getElementById('carrito')
const idtemplate = document.getElementById('idtemplate')
const fragment = document.createDocumentFragment()
const botones = document.querySelectorAll('.card .btn')

//almacenar productos en este objeto
const carritoObjeto = {

}
//funcion de agregar al carrito
const carritoAgregar = (e) => {
    productos = {
        nombre: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }
    if (carritoObjeto.hasOwnProperty(productos.nombre)) {
        productos.cantidad = carritoObjeto[productos.nombre].cantidad +1
    }
    carritoObjeto[productos.nombre] = productos
    pintarCarrito()
}
//pintar carrito template
const pintarCarrito = () => {
    carrito.textContent = ""
    Object.values(carritoObjeto).forEach(item => {
        const clone = idtemplate.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.nombre
        clone.querySelector('.badge').textContent = item.cantidad
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
}
//btn evento
botones.forEach(btn => btn.addEventListener('click', carritoAgregar))



