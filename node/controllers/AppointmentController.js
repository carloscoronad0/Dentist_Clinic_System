import AppointmentModel from "../models/AppointmentModel.js"

// Metodos para el CRUD

// Mostrar todos los registros
export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await AppointmentModel.findAll()
        res.json(appointments)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Mostrar un registro
export const getAppointment = async (req, res) => {
    try {
        const appointments = await AppointmentModel.findAll({
            where: { id:req.params.id }
        })
        res.json(appointments[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Crear un registro
export const createAppointment = async (req, res) => {
    try {
        await AppointmentModel.create(req.body)
        res.json( {"message": "Registro creado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Actualizar un registro
export const updateAppointment = async (req, res) => {
    try {
        await AppointmentModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro actualizado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Eliminar un registro
export const deleteAppointment = async (req, res) => {
    try {
        await AppointmentModel.destroy({
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro eliminado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}