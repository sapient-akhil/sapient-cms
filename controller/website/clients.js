const createError = require("http-errors")
const { clientsServices } = require("../../services/index")

module.exports = {
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
            if (!clients) throw createError.NotFound("The clients with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "One clients is fetch successfully.",
                data: clients
            })
        } catch (error) {
            next(error)
        }
    },
}