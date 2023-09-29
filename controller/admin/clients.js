const createError = require("http-errors")
const { clientsServices } = require("../../services/index")

module.exports = {
    createClients: async (req, res, next) => {
        try {
            const req_data = req.body;

            const existClients = await clientsServices.findClients(null,req_data.name);
            if (existClients) {
                throw createError.Conflict("Clients name already exists");
            }

            const clientsData = await clientsServices.createClients(req_data)

            res.status(201).send({
                success: true,
                message: "Clients is created successfully.",
                data: clientsData
            })
        } catch (error) {
            next(error)
        }
    },
    allClients: async (req, res, next) => {
        try {

            const clients = await clientsServices.findAllClients()

            res.status(201).send({
                success: true,
                message: "All clients is fetch successfully.",
                data: clients
            })
        } catch (error) {
            next(error)
        }
    },
    oneClients: async (req, res, next) => {
        try {

            const { id } = req.params

            const clients = await clientsServices.findByClientId(id)
            if (!clients) throw createError.NotFound("The Clients with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "One clients is fetch successfully.",
                data: clients
            })
        } catch (error) {
            next(error)
        }
    },
    updateClients: async (req, res, next) => {
        try {
            const req_data = req.body;
            const id = req.params.id

            const existClients = await clientsServices.findClients(id,req_data.name);
            if (existClients) {
                throw createError.Conflict("Clients name already exists");
            }

            const clientsData = await clientsServices.updateClients(id, req_data)
            if (!clientsData.length) throw createError.NotFound("The Clients with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Clients is update successfully.",
                data: clientsData
            })
        } catch (error) {
            next(error)
        }
    },
    deleteClients: async (req, res, next) => {
        try {

            const { id } = req.params

            const clients = await clientsServices.deleteClients(id)
            if (!clients) throw createError.NotFound("The clients with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Clients is delete successfully",
                data: clients
            })
        } catch (error) {
            next(error)
        }
    }
}