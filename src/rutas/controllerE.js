const db = require('./db');// asi se enlaza mysql con las peticiones de los controladores



//get
exports.getEquipos = (req, res) => {
    db.query('SELECT * FROM equipos', (err, results) => {
    if (err) return res.status(500).json ({
        message: 'Error al obtener los equipos',
    });
    res.json(results);

    });
};


// post
/*de esta manera se puede enviar la peticion para agragar los nuevos datos a psotman, creando una nueva tabla segun los parametros
nombre , fundacion ciudad , pais-----
---- en postma -----
Selecciona el método POST.

Escribe la URL de tu API que apunte al endpoint que acabas de crear, por ejemplo: http://localhost:3000/api/futbol/equipos.

Ve a la pestaña "Body" en Postman.

Selecciona la opción "raw" y elige "JSON".*/
exports.createEquipos = (req, res) => {
    const { nombre, fundacion, ciudad, pais } = req.body;

    if (!nombre || !fundacion || !ciudad || !pais) {
        return res.status(400).send({ message: 'Todos los campos son obligatorios' });
    }

    const query = `INSERT INTO equipos (nombre, fundacion, ciudad, pais) VALUES (?, ?, ?, ?)`;
    db.query(query, [nombre, fundacion, ciudad, pais], (err, result) => {
        if (err) {
            return res.status(500).send({ message: 'Error al agregar el equipo', error: err });
        }
        res.status(201).send({ message: 'Equipo agregado exitosamente', id: result.insertId }); 
    });
};

//put ----
/*con put es posible actualizar o cambiar lo que se desee de otra tabla ya creada de tal manera qque en la url 
se especifique el id de la tabla que se desee actualizar y en el body se especifique 
los datos que se desean actualizar*/
exports.uptdateEquipos = (req, res) => {
    const { id } = req.params;
    const { nombre, fundacion, ciudad, pais } = req.body;
    const sql = ('UPDATE equipos SET nombre = ?, fundacion = ?, ciudad = ?, pais = ? WHERE id = ?');
    
    db.query(sql, [nombre, fundacion, ciudad, pais, id], (err, result) => {
        if (err) return res.status(500).send({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).send({ error: 'Columna no encontrada' });
        
        res.send({ id, nombre, fundacion, ciudad, pais });
    });
};

// delete
exports.deleteEquipos = (req, res) => {
    const { id } = req.params;
    
    // Asegúrate de llamar correctamente a db.query sin el signo de igualdad (=)
    const sql = 'DELETE FROM equipos WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) return res.status(500).send({ error: err.message });
        if (results.affectedRows === 0) return res.status(404).send({ error: 'Registro no encontrado' });
        res.status(204).send();  // 204 No Content para indicar que se eliminó correctamente
    });
};




