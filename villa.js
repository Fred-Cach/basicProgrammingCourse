const vc = document.getElementById("villaCampestre");
const bar = document.getElementById("myBar");
const papel = vc.getContext("2d");
const imgSrc = ["tile.png", "vaca.png", "cerdo.png", "pollo.png", "lobo.png"];
const imgObj = [];
const lateralSpace = 60;
const verticalSpace = 40;
const startPoint = [];
const preyZone = [];
let bite;

const aleatorio = (min, maxi) => {
  return Math.floor(Math.random() * (maxi - min + 1)) + min;
};

const montar = (imgElement) => {
  const fondo = imgObj[0].url;
  let cantidad = aleatorio(1, 10);
  let element = imgElement.url;
  let carga = imgElement.cargaOK;

  if (element.includes("lobo")) {
    cantidad = 1;
  }
  if (carga) {
    if (element === fondo) {
      papel.drawImage(imgElement.imagen, 0, 0);
    } else {
      for (let v = 0; v < cantidad; v++) {
        let x = aleatorio(0, 7);
        let y = aleatorio(0, 10);
        x = x * lateralSpace;
        y = y * verticalSpace;
        papel.drawImage(imgElement.imagen, x, y);
        if (element.includes("lobo")) {
          startPoint.push(x, y);
        } else {
          preyZone.push({ url: element, x: x, y: y });
        }
      }
    }
  }
};

const cargar = (e) => {
  let eventSrc = e.path[0].attributes[0].value;
  let imgElement = imgObj.find((obj) => obj.url === eventSrc);
  imgElement.cargaOK = true;

  montar(imgElement);
};

class imgC {
  constructor(url) {
    this.url = url;
    this.cargaOK = false;
    this.imagen = new Image();
    this.imagen.src = this.url;
    this.imagen.addEventListener("load", cargar);
  }
}

for (let img of imgSrc) {
  imgObj.push(new imgC(img));
}

const dibujar = () => {
  imgObj.forEach((imgO) => {
    let url = imgO.url;

    if (url.includes("tile")) {
      papel.drawImage(imgO.imagen, 0, 0);
    } else if (url.includes("lobo")) {
      papel.drawImage(imgO.imagen, startPoint[0], startPoint[1]);
    } else {
      preyZone.forEach((prey) => {
        if (prey.url === url) {
          papel.drawImage(imgO.imagen, prey.x, prey.y);
        }
      });
    }
  });
};

const huntOn = (e) => {
  switch (e.key) {
    case "ArrowUp":
      startPoint[1] -= verticalSpace;
      break;
    case "ArrowDown":
      startPoint[1] += verticalSpace;
      break;
    case "ArrowRight":
      startPoint[0] += lateralSpace;
      break;
    case "ArrowLeft":
      startPoint[0] -= lateralSpace;
      break;
  }
  let eatenOne = preyZone.findIndex((prey) => {
    return [prey.x, prey.y] == startPoint.join();
  });
  eatenOne != -1 ? preyZone.splice(eatenOne, 1) : null;
  devour();
  dibujar();
};

document.addEventListener("keyup", huntOn);

const devour = () => {
  let unitValue = 40 / preyZone.length;
  let width = unitValue;

  console.log(unitValue);
  console.log(width);
  width += unitValue;
  bar.style.width = width + "%";

  if (preyZone.length == 0) {
    bar.innerHTML = "SACIADO";
    bar.style.border = "1px solid red";
    bar.style.backgroundColor = "black";
    bar.style.color = "red";
  }
};
