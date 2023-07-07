const express = require('express');
const servidor = express();
const path = require("path");

servidor.use(express.json());
servidor.use(require("./rutas/rutasNode.js"))
servidor.set("puerto", 5000)

servidor.listen(servidor.get("puerto"),() => { 
    console.log("servidor Express en el puerto:", servidor.get("puerto"))
});