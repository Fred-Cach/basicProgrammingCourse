const imagenes = [];
imagenes["10"] =
  "https://upload.wikimedia.org/wikipedia/commons/4/49/US10dollarbill-Series_2004A.jpg";
imagenes["20"] =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/US_%2420_Series_2006_Obverse.jpg/1920px-US_%2420_Series_2006_Obverse.jpg";
imagenes["50"] =
  "https://upload.wikimedia.org/wikipedia/commons/0/09/50_USD_Series_2004_Note_Front.jpg";
imagenes["100"] =
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Obverse_of_the_series_2009_%24100_Federal_Reserve_Note.jpg";

class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
  showBill() {
    for (let amm = 1; amm <= this.cantidad; amm++) {
      this.image = new Image();
      this.image.src = imagenes[this.valor];
      this.image.alt = this.valor;
      wallet.appendChild(this.image);
    }
  }
}

const atm = () => {
  const caja = [];
  caja.push(new Billete(100, 11));
  caja.push(new Billete(50, 10));
  caja.push(new Billete(20, 13));
  caja.push(new Billete(10, 14));

  let cajaDisponible = caja.reduce((a, b) => a + b.valor * b.cantidad, 0);
  cajero.innerHTML = `Monto disponible: ${cajaDisponible}`;

  const extraerDinero = () => {
    const aEntregar = [];
    let retiro = parseInt(dinero.value);

    if (!(retiro > cajaDisponible)) {
      for (b of caja) {
        let div;
        let papeles;
        if (retiro) {
          div = Math.floor(retiro / b.valor);
          div >= b.cantidad ? (papeles = b.cantidad) : (papeles = div);
          papeles ? aEntregar.push(new Billete(b.valor, papeles)) : null;
          b.cantidad -= papeles;
          retiro -= b.valor * papeles;
        }
      }

      if (!retiro) {
        for (let bill of aEntregar) {
          console.log(bill.cantidad);
          bill.showBill();
        }
        cajaDisponible -= dinero.value;
      } else {
        window.alert("El cajero no cuenta con el cambio disponible.");
      }
    } else {
      window.alert("El cajero no cuenta con suficiente dinero disponible.");
    }
    cajero.innerHTML = `Monto disponible: ${cajaDisponible}`;
    dinero.value = null;
  };
  return extraerDinero;
};

const withdraw = atm();

extraer.addEventListener("click", withdraw);
