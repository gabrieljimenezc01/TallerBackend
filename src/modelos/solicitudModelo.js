import Sequelize from "sequelize";
import { db } from "../database/conexion.js";
import { adoptantes } from "./adoptanteModelo.js";
import { mascotas } from "./mascotaModelo.js";


const solicitudes = db.define("solicitudes", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  fecha_solicitud: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  estado: {
    type: Sequelize.ENUM('Pendiente', 'Aprobada', 'Rechazada'),
    defaultValue: 'Pendiente',
  },
})

solicitudes.belongsTo(adoptantes, { foreignKey: 'adoptantes_id' });
solicitudes.belongsTo(mascotas, { foreignKey: 'mascotas_id' });


export { solicitudes }
