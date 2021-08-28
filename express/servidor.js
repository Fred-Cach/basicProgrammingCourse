const express = require("express");
const app = express();

const inicio = (req, res) => {
  res.send("tamo redy en el <strong>home<strong/>");
};
const cursos = (req, res) => {
  res.send("tamo redy en el <strong>curso<strong/>");
};

app.get("/", inicio);
app.get("/cursos", cursos);

app.listen(3000);

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
