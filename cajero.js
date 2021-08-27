class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

const caja = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

const extraerDinero = () => {
  const dineroExtraible = caja.reduce((a, b) => a + b.valor * b.cantidad, 0);
  const aEntregar = [];
  const entregado = [];
  let ingreso = parseInt(dinero.value);

  if (!(ingreso > dineroExtraible)) {
    for (b of caja) {
      let div;
      let papeles;
      if (ingreso) {
        div = Math.floor(ingreso / b.valor);
        div >= b.cantidad ? (papeles = b.cantidad) : (papeles = div);
        papeles ? aEntregar.push(new Billete(b.valor, papeles)) : null;
        ingreso -= b.valor * papeles;
      }
    }
    if (!ingreso) {
      aEntregar.forEach((billete) => {
        entregado.push(`\n${billete.cantidad} billetes de $${billete.valor}`);
      });
      window.alert(`Has extraido un total de: $${dinero.value}.

Lo has recibido de esta manera:${entregado}`);
    } else {
      window.alert("El cajero no cuenta con el cambio disponible.");
    }
  } else {
    window.alert("El cajero no cuenta con suficiente dinero disponible.");
  }
  dinero.value = null;
};

extraer.addEventListener("click", extraerDinero);
