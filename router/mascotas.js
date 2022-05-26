const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: 'abc', nombre: 'Rex', descripcion: 'Rex descripcion'},
            {id: 'def', nombre: 'Flo', descripcion: 'Flo descripcion'},
            {id: 'ghi', nombre: 'Bru', descripcion: 'Bru descripcion'},
        ]
    })

})

module.exports = router;