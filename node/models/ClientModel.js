import db from "../database/db.js"; // importar la conexion
import { DataTypes } from "sequelize";

const ClientModel = db.define('Clients', {
    client_name: {type: DataTypes.STRING}
})

export default ClientModel