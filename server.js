const express = require("express");
const cors = require("cors");
require('dotenv').config();


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.Path = "/api";

    // middlewares (son funciones que se van a ejecutar cuando se levante el servidor)
    this.middlewares();

    // Rutas de la aplicacion
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Lectura y parseo del body (para que la informacion que vemnga ahi la va a serialixar a formato Json)
    this.app.use(express.json());
  }



  // configuración de rutas
  routes() {

      // ruta de usuario
      this.app.use(this.Path, require("./src/routes/usuario"));
      this.app.use(this.Path, require("./src/routes/tipousuario"));

      // 
      
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }


}


module.exports = { Server };
