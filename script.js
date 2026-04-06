let carrito = [];

function agregar(nombre, precio) {
    let producto = carrito.find(p => p.nombre === nombre);

    if (producto) {
        producto.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("lista-carrito");
    let contador = document.getElementById("contador");
    let totalHTML = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((p,i)=>{
        let subtotal = p.precio*p.cantidad;
        total+=subtotal;

        lista.innerHTML += `
        <div>
            ${p.nombre} x${p.cantidad}
            <button onclick="cambiar(${i},1)">+</button>
            <button onclick="cambiar(${i},-1)">-</button>
        </div>`;
    });

    contador.innerText = carrito.length;
    totalHTML.innerText = total;
}

function cambiar(i,c){
    carrito[i].cantidad+=c;
    if(carrito[i].cantidad<=0) carrito.splice(i,1);
    actualizarCarrito();
}

function toggleCarrito(){
    document.getElementById("panel-carrito").classList.toggle("activo");
}

/* ANIMACIONES SCROLL */
function revealOnScroll(){
    let reveals=document.querySelectorAll(".reveal");

    reveals.forEach(el=>{
        let top=el.getBoundingClientRect().top;
        let height=window.innerHeight;

        if(top<height-100){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll",revealOnScroll);

/* PAGO */
function pagarWompi(){
    window.open("https://checkout.wompi.co/l/TU_LINK","_blank");
}
const imagenes = [
    "img/pastel1.jpg",
    "img/pastel2.jpg",
    "img/pastel3.jpg",
    "img/pastel4.jpg"
];

let index = 0;
const heroBg = document.querySelector(".hero-bg");

function cambiarFondo() {
    heroBg.style.backgroundImage = `url(${imagenes[index]})`;

    index++;
    if (index >= imagenes.length) {
        index = 0;
    }
}

/* CAMBIO CADA 4 SEGUNDOS */
setInterval(cambiarFondo, 4000);

/* INICIAR */
cambiarFondo();


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
    }, 2500); // tiempo del efecto

    setTimeout(() => {
        loader.style.display = "none";
    }, 3500);

});