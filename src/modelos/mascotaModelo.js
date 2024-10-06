import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";


const mascotas = db.define("mascotas",{
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true  
  },
  nombre:{
    type:Sequelize.STRING,
    allowNull: true    
  },
  edad:{
    type: Sequelize.INTEGER,
    allowNull:true
  },
  especie: {
    type: Sequelize.ENUM('Perro', 'Gato', 'Otro'),
    allowNull: true,
  },
  raza: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  sexo:{
    type: Sequelize.ENUM('Macho','Hembra'),
    allowNull: true,
  },
  descripcion: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  estado_adopcion: {
    type: Sequelize.ENUM('Disponible', 'Adoptado'),
    defaultValue: 'Disponible',
  },
  foto: {
    type: Sequelize.TEXT,
    allowNull: true,
  }
})

export {mascotas}
