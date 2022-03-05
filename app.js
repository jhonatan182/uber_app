const express = require('express');
const morgan = require('morgan');
const db = require('./config/db');


/* Rutas importacion*/

const routerPrincipal = require('./Rutas/index');
const routerTipoVehiculo = require('./Rutas/rutasTipoVehiculo');
const routerTipoU = require('./Rutas/rutasTipoUsuarios');
const routerAutenti = require('./Rutas/rutaAutenticacion');
const routerConductor = require('./Rutas/rutasConductor');
const routerAutenticacion = require('./Rutas/rutasAutenticacion');
const routerArchivos = require('./Rutas/rutasArchivos');

//cargar variables de entorno
require('dotenv').config();


// inicilizar app
const app = express();

/* comporobar la conexion a la base de datos */

db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch(  error => console.log( error ));

/* morgan */
app.use( morgan('dev') );
app.use(express.urlencoded({extended:  false }));

/* json */
app.use(express.json());
app.set('json spaces', 2);


/* rutas */
app.use('/uber/api/' , routerPrincipal );
app.use('/uber/api/autenticacion/', routerAutenti);
app.use('/uber/api/vehiculo/tipo' , routerTipoVehiculo);
app.use('/uber/api/tipou/', routerTipoU);
app.use('/uber/api/conductor', routerConductor);
app.use('/uber/api/autenticacion', routerAutenticacion);
app.use('/uber/api/archivos', routerArchivos);





/* configuracion del puerto */
const port = process.env.PORT || 4000;

app.listen(port , ()=> {
    console.log(`La aplicacion esta corriendo en el puerto ${port}`);
});

