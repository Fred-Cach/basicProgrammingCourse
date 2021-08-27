var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

let onOff;
let x;
let y;

const comenzando = (e) => {
  if (onOff) {
    onOff = false;
  } else {
    onOff = true;
    x = e.offsetX;
    y = e.offsetY;
  }

  console.log(e);
  console.log(onOff, x, y);
};

const dibujando = (e) => {
  if (onOff) {
    dibujarLinea(colorFirma.value, x, y, e.offsetX, e.offsetY, papel);
    x = e.offsetX;
    y = e.offsetY;
  }
};

cuadrito.addEventListener("pointerdown", comenzando);
cuadrito.addEventListener("pointerup", comenzando);
cuadrito.addEventListener("pointermove", dibujando);
