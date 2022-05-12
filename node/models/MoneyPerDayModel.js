import db from "../database/db.js"; // importar la conexion
import { DataTypes } from "sequelize";

const MoneyPerDayModel = db.define('MoneyPerDays', {
    date: {type: DataTypes.STRING},
    amount: {type: DataTypes.INTEGER}
})

export default MoneyPerDayModel