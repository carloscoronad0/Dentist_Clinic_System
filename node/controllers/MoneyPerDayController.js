import MoneyPerDayModel from "../models/MoneyPerDayModel.js"
import db from "../database/db.js";

// Metodos para el CRUD

// Mostrar todos los registros
export const getAllMoneyInfo = async (req, res) => {
    try {
        const info = await db.query('SELECT * FROM MoneyPerDays', {
            model: MoneyPerDayModel,
            mapToModel: true
        })
        res.json(info)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Mostrar un registro
export const getMoneyInfo = async (req, res) => {
    try {
        var query = 'SELECT * FROM MoneyPerDays WHERE date='
        const info = await db.query(query.concat(req.param.date), {
            model: MoneyPerDayModel,
            mapToModel: true
        })
        res.json(info[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}