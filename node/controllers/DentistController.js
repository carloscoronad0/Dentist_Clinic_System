import DentistModel from "../models/DentistModel.js"; // importar el modelo

// Metodos para el CRUD

// Mostrar todos los registros
export const getAllDentists = async (req, res) => {
    try {
        const dentists = await DentistModel.findAll()
        res.json(dentists)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Mostrar un registro
export const getDentist = async (req, res) => {
    try {
        const dentists = await DentistModel.findAll({
            where: { id:req.params.id }
        })
        res.json(dentists[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Crear un registro
export const createDentist = async (req, res) => {
    try {
        await DentistModel.create(req.body)
        res.json( {"message": "Registro creado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Actualizar un registro
export const updateDentist = async (req, res) => {
    try {
        await DentistModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro actualizado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Eliminar un registro
export const deleteDentist = async (req, res) => {
    try {
        await DentistModel.destroy({
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro eliminado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}