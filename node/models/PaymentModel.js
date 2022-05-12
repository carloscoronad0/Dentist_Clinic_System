import db from "../database/db.js"; // importar la conexion
import { DataTypes } from "sequelize";

const PaymentModel = db.define('Payments', {
    appointment_id: {type: DataTypes.INTEGER},
    amount: {type: DataTypes.INT},
    method: {type: DataTypes.STRING}
})

export default PaymentModel