import db from "../database/db.js"; // importar la conexion
import { DataTypes } from "sequelize";

const CancellationModel = db.define('Cancellations', {
    appointment_id: {type: DataTypes.INTEGER},
    reason: {type: DataTypes.STRING}
})

export default CancellationModel