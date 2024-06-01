precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const agregar = document.querySelector("#btnAdd"),
  remover = document.querySelector("#btnRem"),
  cantidad = document.querySelector("#cant"),
  total = document.querySelector("#total");

total.innerHTML = cantidad.innerHTML * precio;

agregar.onclick = sumar;
remover.onclick = restar;

function sumar() {
  cantidad.innerHTML = parseInt(cantidad.innerHTML) + 1;
  total.innerHTML = (cantidad.innerHTML * precio)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function restar() {
  if (cantidad.innerHTML > 0) {
    cantidad.innerHTML -= 1;
    total.innerHTML = (cantidad.innerHTML * precio)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
}
