const mensaje = (msj, estado, data, res) =>{ // objeto que enviamos un msj ...
    var mensajes={
        msj: msj,
        data: data
    };
    res.setHeader("Content-type", "application/json"); // informacion de la cabecera indicando que es formato json
    res.statusCode=estado; // enviamos un mensaje donde se envia el codigo del estado
    res.json(mensajes); // se envia el mensaje
    };
    module.exports = mensaje;