import db from "../database/db.js"; // importar la conexion
import { DataTypes } from "sequelize";

const DentistModel = db.define('Dentists', {
    dentist_name: {type: DataTypes.STRING},
    speciality: {type: DataTypes.STRING}
})

export default DentistModel