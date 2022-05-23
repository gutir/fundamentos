const express = require("express");
const app = express();
const port = 3000;

// Motor de plantilla EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Middleware
//app.use(express.static(__dirname + "/public")) //dirname es el hosting (dinámico)
//app.use((req, res, next) => {
//    res.status(404).sendFile(__dirname + "/public/404.html")
//})

//Construccion
app.get("/", (req, res) => {
  res.render("index", {titulo : "Mi título dinámico"})
})
app.get("/servicios", (req, res) => {
  res.render("servicios", {tituloServicios : "Este es un mensaje dinámico de servicios."})
})
app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo : "404",
        descripcion : "Título del sitio web"
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})