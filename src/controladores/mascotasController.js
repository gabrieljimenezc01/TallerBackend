import { mascotas } from "../modelos/mascotaModelo.js";

//Crear un recurso Mascota
const crear = (req,res)=>{

    //Validar 
    if(!req.body.nombre){
        res.status(400).send({
            mensaje: "El nombre no puede estar vacio."
        });
        return;
    }

    const dataset={
        nombre: req.body.nombre,
        edad: req.body.edad,
        especie: req.body.especie,
        raza: req.body.raza,
        sexo: req.body.sexo,
        descripcion: req.body.descripcion,
        estado_adopcion: req.body.estado_adopcion,
        foto: req.body.foto,
    }

    //Usuar Sequelize para crear el recurso en la base de datos
    mascotas.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "Registro de Mascota Creado con Exito"
        });
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `Registro de Mascota No creado ::: ${err}`
        });
    });
}

//Buscar Mascotas
const buscar= (req,res)=>{
    mascotas.findAll().then((resultado)=>{
        res.status(200).json(resultado);
    }).catch((err)=>{
        res.status(500).json({
            mensaje:`No se encontraron registros ::: ${err}`
        });
    });
}


//buscar por ID
const buscarId= (req,res)=>{

    const id=req.params.id;
    if(id==null){
        res.status(400).json({
            mensaje: "El id no puede estar vacio"
        });
        return;
    }
    else{
        mascotas.findByPk(id).then((resultado)=>{
            res.status(200).json(resultado);
        }).catch((err)=>{
            res.status(500).json({
                mensaje:`No se encontraron registros ::: ${err}`
            });
        });

    }
    
}



//Actualizar Mascota
const actualizar=(req,res)=>{
    const id=req.params.id;
    if(!req.body.nombre && !req.body.nombre){
        res.status(400).json({
            mensaje: "No se encontraron Datos para Actualizar"
        });
        return;

    }
    else{
        const nombre=req.body.nombre;
        const edad=req.body.edad;
        const especie=req.body.especie;
        const raza=req.body.raza;
        const sexo=req.body.sexo;
        const descripcion=req.body.descripcion;
        const estado_adopcion=req.body.estado_adopcion;
        const foto=req.body.foto;
        mascotas.update({nombre,edad,especie,raza,sexo,descripcion,estado_adopcion,foto},{where:{id}}).then((resultado)=>{
            res.status(200).json({
                tipo: 'success',
                mensaje: `Registro Actualizado los dato son:`
             });

        }).catch((err)=>{
            res.status(500).json({
                tipo: 'error',
                mensaje: `Error al actualizar Registro ::: ${err}`
            });

        });
    }
    

}

//Eliminar Mascota
const eliminar = (req, res) => {
    const id = req.params.id;
    if (id == null) {
      res.status(203).json({
        message: "Debe ingresar un ID!",
      });
      return;
    }
    //implementing delete function
    mascotas.destroy({ where: { id: id } })
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



export {crear,buscar,buscarId,actualizar,eliminar}