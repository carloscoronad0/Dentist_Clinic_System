import CancellationModel from "../models/CancellationModel.js"; // importar el modelo

// Metodos para el CRUD

// Mostrar todos los registros
export const getAllCancellations = async (req, res) => {
    try {
        const cancellations = await CancellationModel.findAll()
        res.json(cancellations)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Mostrar un registro
export const getCancellation = async (req, res) => {
    try {
        const cancellations = await CancellationModel.findAll({
            where: { id:req.params.id }
        })
        res.json(cancellations[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Crear un registro
export const createCancellation = async (req, res) => {
    try {
        await CancellationModel.create(req.body)
        res.json( {"message": "Registro creado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Actualizar un registro
export const updateCancellation = async (req, res) => {
    try {
        await CancellationModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro actualizado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Eliminar un registro
export const deleteCancellation = async (req, res) => {
    try {
        await CancellationModel.destroy({
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro eliminado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}