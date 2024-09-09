const express = require('express');
const app = express();

//middleware
app.use(express.json());


//rutas
 const rutaEquipos = require('./rutas/equipos');
 app.use('/api/equipos' , rutaEquipos)

//configuracion del púerto
app.set('port', process.env.PORT || 3000)

// conexion a la base
const db = require('./rutas/db')

//starting server
app.listen(app.get('port'), () => {
console.log(`server si runnig ${app.get('port')}`);
});

const events = require('events');
events.EventEmitter.defaultMaxListeners = 20;

