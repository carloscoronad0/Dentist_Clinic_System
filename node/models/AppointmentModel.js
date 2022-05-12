import db from "../database/db.js"; // importar la conexion
import { DataTypes } from "sequelize";

const AppointmentModel = db.define('Appointments', {
    dentist_id: {type: DataTypes.INTEGER},
    client_id: {type: DataTypes.INTEGER},
    appointment_date: {type: DataTypes.STRING},
    appointment_hour: {type: DataTypes.INTEGER}
})

export default AppointmentModel