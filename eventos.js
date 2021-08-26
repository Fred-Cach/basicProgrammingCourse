// var teclas = {
//   UP: 38,
//   DOWN: 40,
//   LEFT: 37,
//   RIGHT: 39,
// };

// document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
// var x = 150;
// var y = 150;

// dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

const color = "red";

let onOff;
let x;
let y;

const comenzando = (e) => {
  onOff ? (onOff = false) : (onOff = true);
  x = e.layerX;
  y = e.layerY;
  console.log(onOff, x, y);
};

const dibujando = (e) => {
  if (onOff) {
    dibujarLinea(color, x, y, e.layerX, e.layerY, papel);
    x = e.layerX;
    y = e.layerY;
  }
};

const tocando = (e) => {
  onOff ? (onOff = false) : (onOff = true);
  if (onOff) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  }

  console.log(e);
  console.log(onOff, x, y);
};

const jugando = (e) => {
  if (onOff) {
    dibujarLinea(
      color,
      x,
      y,
      e.touches[0].clientX,
      e.touches[0].clientY,
      papel
    );
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
  }
};

cuadrito.addEventListener("mousedown", comenzando);
cuadrito.addEventListener("mouseup", comenzando);
cuadrito.addEventListener("mousemove", dibujando);
cuadrito.addEventListener("touchstart", tocando);
cuadrito.addEventListener("touchend", tocando);
cuadrito.addEventListener("touchmove", jugando);

// function dibujarTeclado(evento) {
//   var colorcito = "#FAA";
//   var movimiento = 5;
//   switch (evento.keyCode) {
//     case teclas.UP:
//       dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
//       y = y - movimiento;
//       break;
//     case teclas.DOWN:
//       dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
//       y = y + movimiento;
//       break;
//     case teclas.LEFT:
//       dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
//       x = x - movimiento;
//       break;
//     case teclas.RIGHT:
//       dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
//       x = x + movimiento;
//       break;
//   }
// }

// const trazando = (sw, x, y) => {
//   if (sw) {
//     const pintando = (e) => {
//       dibujarLinea(color, x, y, e.layerX, e.layerY, papel);
//       x = e.layerX;
//       y = e.layerY;
//     };
//     return pintando;
//   }
// };

// const ahitamo = trazando();

// const comenzando = () => {
//   let sw = false;

//   const dibujando = (ev) => {
//     if (ev) {
//       x = ev.layerX;
//       y = ev.layerY;
//     }

//     sw ? (sw = false) : (sw = true);
//     console.log(sw, x, y);
//     trazando(sw, x, y);
//   };

//   return dibujando;
// };

// const enqtamo = comenzando();
// const ahitamo = enqtamo();

// const dibujarMouse = (e) => {
//   if () {
//     dibujarLinea(color, x, y, e.layerX, e.layerY, papel);
//     x = e.layerX;
//     y = e.layerY;
//   }
// };

// const iniciarMouseMov = (click) => {
//   let trazando = (e) => {
//     dibujarLinea(color, x, y, e.layerX, e.layerY, papel);
//     x = e.layerX;
//     y = e.layerY;
//   };

//   if (click == "down") {
//     let dibujando = (e) => {
//       x = e.layerX;
//       y = e.layerY;

//       console.log("try");

//       return trazando;
//     };
//     return dibujando;
//   } else if (click == "up") {
//     let dibujando = (e) => {
//       console.log("not try");
//     };
//     return dibujando;
//   }

//   //   let sw = false;
//   //   const paintOn = (ev = { layerX: 0, layerY: 0 }) => {

//   //     const dibujo = (e) => {
//   //       dibujarLinea(color, x, y, e.layerX, e.layerY, papel);
//   //       x = e.layerX;
//   //       y = e.layerY;
//   //     };

//   //     if (!sw) {
//   //       sw = true;
//   //       console.log(sw);
//   //       let x = ev.layerX;
//   //       let y = ev.layerY;

//   //       return dibujo;
//   //     } else {
//   //       sw = false;
//   //       console.log(sw);

//   //       return null;
//   //     }
//   //   };
//   //   return paintOn;
// };

// let down = iniciarMouseMov("down");
// let up = iniciarMouseMov("up");
// let move = down();
// function dibujarMouse(e) {
//   var color = "#0F0";
//   dibujarLinea(color, e.layerX, e.layerY, e.layerX, e.layerY, papel);
// }
