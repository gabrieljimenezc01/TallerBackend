import { adoptantes } from "../modelos/adoptanteModelo.js";

//Crear un recurso adoptante
const crear = (req, res) => {

    //Validar 
    if (!req.body.nombre) {
        res.status(400).send({
            mensaje: "El nombre no puede estar vacio."
        });
        return;
    }

    const dataset = {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        email: req.body.email,
        direccion: req.body.direccion,
        sexo: req.body.sexo,
        foto: req.body.foto,
    }

    //Usuar Sequelize para crear el recurso en la base de datos
    adoptantes.create(dataset).then((resultado) => {
        res.status(200).json({
            mensaje: "Registro de adoptante Creado con Exito"
        });
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Registro de adoptante No creado ::: ${err}`
        });
    });
}

//Buscar adoptantes
const buscar = (req, res) => {
    adoptantes.findAll().then((resultado) => {
        res.status(200).json(resultado);
    }).catch((err) => {
        res.status(500).json({
            mensaje: `No se encontraron registros ::: ${err}`
        });
    });
}


//buscar por ID
const buscarId = (req, res) => {

    const id = req.params.id;
    if (id == null) {
        res.status(400).json({
            mensaje: "El id no puede estar vacio"
        });
        return;
    }
    else {
        adoptantes.findByPk(id).then((resultado) => {
            res.status(200).json(resultado);
        }).catch((err) => {
            res.status(500).json({
                mensaje: `No se encontraron registros ::: ${err}`
            });
        });

    }

}



//Actualizar adoptante
const actualizar = (req, res) => {
    const id = req.params.id;
    if (!req.body.nombre && !req.body.nombre) {
        res.status(400).json({
            mensaje: "No se encontraron Datos para Actualizar"
        });
        return;

    }
    else {
        const nombre = req.body.nombre;
        const telefono = req.body.telefono;
        const email = req.body.email;
        const direccion = req.body.direccion ;
        const sexo = req.body.sexo ;        
        const foto = req.body.foto ;
        adoptantes.update({ nombre, telefono, email, direccion,sexo,foto}, { where: { id } }).then((resultado) => {
            res.status(200).json({
                tipo: 'success',
                mensaje: "Registro Actualizado"
            });

        }).catch((err) => {
            res.status(500).json({
                tipo: 'error',
                mensaje: `Error al actualizar Registro ::: ${err}`
            });

        });
    }


}

//Eliminar adoptante
const eliminar = (req, res) => {
    const id = req.params.id;
    if (id == null) {
        res.status(203).json({
            message: "Debe ingresar un ID!",
        });
        return;
    }
    //implementing delete function
    adoptantes.destroy({ where: { id: id } })
        .then((result) => {
            res.status(200).json({
                tipo: 'success',
                mensaje: `Registro con id ${id} Eliminado Correctamente`
            });
        })
        .catch((err) => {
            res.status(500).json({
                tipo: 'error',
                mensaje: `Error al eliminar Registro ::: ${err}`
            });
        });
};



export { crear, buscar, buscarId, actualizar, eliminar }