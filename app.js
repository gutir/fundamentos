const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Motor de plantilla EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//Middleware
app.use(express.static(__dirname + "/public"))

//Rutas Web
app.use('/', require('./router/rutas'))
app.use('/mascotas', require('./router/mascotas'))

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo : "404",
        descripcion : "Título de mi sitio web"
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})