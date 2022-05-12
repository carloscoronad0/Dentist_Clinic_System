import ClientModel from "../models/ClientModel"; // importar el modelo

// Metodos para el CRUD

// Mostrar todos los registros
export const getAllClients = async (req, res) => {
    try {
        const clients = await ClientModel.findAll()
        res.json(clients)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Mostrar un registro
export const getClient = async (req, res) => {
    try {
        const clients = await ClientModel.findAll({
            where: { id:req.params.id }
        })
        res.json(clients[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Crear un registro
export const createClient = async (req, res) => {
    try {
        await ClientModel.create(req.body)
        res.json( {"message": "Registro creado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Actualizar un registro
export const updateClient = async (req, res) => {
    try {
        await ClientModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro actualizado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Eliminar un registro
export const deleteClient = async (req, res) => {
    try {
        await ClientModel.destroy({
            where: { id: req.params.id }
        })
        res.json( {"message": "Registro eliminado correctamente"} )
    } catch (error) {
        res.json( {message: error.message} )
    }
}