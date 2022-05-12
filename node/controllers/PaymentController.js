import PaymentModel from "../models/PaymentModel.js"

// Metodos para el CRUD

// Mostrar todos los registros
export const getAllPayments = async (req, res) => {
    try {
        const payments = await PaymentModel.findAll()
        res.json(payments)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Mostrar un registro
export const getPayment = async (req, res) => {
    try {
        const payments = await PaymentModel.findAll({
            where: { id:req.params.id }
        })
        res.json(payments[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Crear un registro
export const createPayment = async (req, res) => {
    try {
        await PaymentModel.create(req.body)
        res.json( {"message": "Registro creado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Actualizar un registro
export const updatePayment = async (req, res) => {
    try {
        await PaymentModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro actualizado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Eliminar un registro
export const deletePayment = async (req, res) => {
    try {
        await PaymentModel.destroy({
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro eliminado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}