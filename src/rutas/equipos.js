const express = require ("express");
const router = express.Router();
const equipocontroller = require("./controllerE")// se crea una variable donde requiera la carpeta rutas con el js controller


//rutas 
router.get("/" , equipocontroller.getEquipos);//localhost:3000/api/equipos
router.post("/" , equipocontroller.createEquipos);/* localhost:3000/api/Eequipos/equipos*/
router.put("/:id" , equipocontroller.uptdateEquipos)/*localhost:3000/api/Eequipos/1,2,3,4...etc especificando la tabla que se cambia*/
router.delete("/:id",equipocontroller.deleteEquipos) //localhost:3000/api/Eequipos/1,2,3,4 etc...
module.exports = router;

/*API: Gestiona las rutas y peticiones.
CRUD: Define las operaciones básicas que se pueden realizar en los datos a través de esas rutas y peticiones.

POST /usuarios: Crear un nuevo usuario.
GET /usuarios: Obtener una lista de todos los usuarios.
GET /usuarios/:id: Obtener la información de un usuario específico.
PUT /usuarios/:id: Actualizar la información de un usuario específico.
DELETE /usuarios/:id: Eliminar un usuario específico.
*/


