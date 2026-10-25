//Busco los divs a los que les voy a aplicar la transcicion de color, lo que la diferencia del querySelector normal es que esta no se detiene con la primer busqueda, busca hasta el final de la pagina
const divAutos = document.querySelectorAll(".premium-container, .btn-auto, .noble-container");

const activarColor = (event) => {
  event.target.classList.add('cambio-color');
};

const desactivarColor = (event) => {
  event.target.classList.remove('cambio-color');
};

const scrollSuave = (event) =>{
    event.tarjet.classList.add("html-scroll")
}

divAutos.forEach(divAuto => {
  divAuto.addEventListener('mouseenter', activarColor);
  divAuto.addEventListener('mouseleave', desactivarColor);
});