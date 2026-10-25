//Busco los divs a los que les voy a aplicar la transcicion de color, 
//lo que la diferencia del querySelector normal es que esta no se detiene con la primer busqueda,
// busca hasta el final de la pagina
const divAutos = document.querySelectorAll(".premium-container, .btn-auto, .noble-container");

//le pongo el nombre de mi "variable" del css al color que quiero que cambie cuando sobrepongo el mouse arriba
const activarColor = (event) => {
  event.target.classList.add('cambio-color');
};

//remueve el color cuando no se sobrepone el mouse
const desactivarColor = (event) => {
  event.target.classList.remove('cambio-color');
};

//Utilizo un foreach en mis contenedores de autos para que se active o se desactive el evento en su defecto
divAutos.forEach(divAuto => {
  divAuto.addEventListener('mouseenter', activarColor);
  divAuto.addEventListener('mouseleave', desactivarColor);
});
