import { solicitudes } from "../modelos/solicitudModelo.js";

//Crear un recurso adoptante
const crear = (req, res) => {

    //Validar 
    if (!req.body.adoptantes_id) {
        res.status(400).send({
            mensaje: "El adoptantes no puede estar vacio."
        });
        return;
    }

    const dataset = {
        mascotas_id:req.body.mascotas_id,
        adoptantes_id: req.body.adoptantes_id,
        estado: req.body.estado,
    }

    //Usuar Sequelize para crear el recurso en la base de datos
    solicitudes.create(dataset).then((resultado) => {
        res.status(200).json({
            mensaje: "Registro de adopcion Creado con Exito"
        });
    }).catch((err) => {
        res.status(500).json({
            mensaje: `Registro de adopcion No creado ::: ${err}`
        });
    });
}

//Buscar adoptantes
const buscar = (req, res) => {
    solicitudes.findAll().then((resultado) => {
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
        solicitudes.findByPk(id).then((resultado) => {
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
    if (!req.body.adoptantes_id && !req.body.mascotas_id) {
        res.status(400).json({
            mensaje: "No se encontraron Datos para Actualizar"
        });
        return;

    }
    else {
        const adoptantes_id = req.body.adoptantes_id;
        const mascotas_id = req.body.mascotas_id;
        const estado = req.body.estado;
        
        solicitudes.update({ adoptantes_id, mascotas_id, estado}, { where: { id } }).then((resultado) => {
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
    solicitudes.destroy({ where: { id: id } })
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