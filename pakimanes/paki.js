var imagenes = [];
imagenes["Cauchin"] = "../villa/vaca.png";
imagenes["Pokacho"] = "../villa/pollo.png";
imagenes["Tocinauro"] = "../villa/cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for (var freddito of coleccion) {
  freddito.mostrar();
}

for (var x in imagenes) {
  console.log(x);
}
