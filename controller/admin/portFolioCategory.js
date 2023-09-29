const createError = require("http-errors")
const { portFolioServices } = require("../../services/index")

module.exports = {
    createPortFolioCategorty: async (req, res, next) => {
        try {
            const req_data = req.body;

            const existPortFolioCategoryName = await portFolioServices.findPortFolioCategorty(null,req_data.name);
            if (existPortFolioCategoryName) {
                throw createError.Conflict("Portfolio category name already exists");
            }

            const portFolioCategortyData = await portFolioServices.createPortFolioCategorty(req_data)

            res.status(201).send({
                success: true,
                message: "Portfolio category is created successfully.",
                data: portFolioCategortyData
            })
        } catch (error) {
            next(error)
        }
    },
    allPortFolioCategorty: async (req, res, next) => {
        try {

            const portFolioCategorty = await portFolioServices.findAllPortFolioCategorty()

            res.status(201).send({
                success: true,
                message: "All portfolio category is fetch successfully.",
                data: portFolioCategorty
            })
        } catch (error) {
            next(error)
        }
    },
    onePortFolioCategorty: async (req, res, next) => {
        try {

            const { id } = req.params

            const portFolioCategorty = await portFolioServices.findByPortFolioCategortyId(id)
            if (!portFolioCategorty) throw createError.NotFound("The portfolio category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "One portfolio category is fetch successfully.",
                data: portFolioCategorty
            })
        } catch (error) {
            next(error)
        }
    },
    updatePortFolioCategorty: async (req, res, next) => {
        try {
            const req_data = req.body;
            const id = req.params.id

            const existPortFolioCategoryName = await portFolioServices.findPortFolioCategorty(id,req_data.name);
            if (existPortFolioCategoryName) {
                throw createError.Conflict("Portfolio category name already exists");
            }

            const portFolioCategortyData = await portFolioServices.updatePortFolioCategorty(id, req_data)
            if (!portFolioCategortyData.length) throw createError.NotFound("The Portfolio category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Portfolio category is update successfully.",
                data: portFolioCategortyData
            })
        } catch (error) {
            next(error)
        }
    },
    deletePortFolioCategorty: async (req, res, next) => {
        try {

            const { id } = req.params

            const portFolioCategorty = await portFolioServices.deletePortFolioCategorty(id)
            if (!portFolioCategorty) throw createError.NotFound("The Portfolio Category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Portfolio category is delete successfully",
                data: portFolioCategorty
            })
        } catch (error) {
            next(error)
        }
    }
}