const { Router } = require("express");

const routerProductos = new Router();

routerProductos.get("/productos", (req, res)=> {
    res.json({message: "Productos Router"})
});

module.exports = routerProductos;