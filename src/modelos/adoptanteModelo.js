import Sequelize from "sequelize";
import { db } from "../database/conexion.js";


const adoptantes = db.define("adoptantes", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefono: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  direccion: {
    type: Sequelize.TEXT,
    allowNull: true,
  }
})

export { adoptantes }
