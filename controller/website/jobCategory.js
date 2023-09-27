const createError = require("http-errors")
const { jobCategoryServices } = require("../../services/index")

module.exports = {
    allJobCategorty: async (req, res, next) => {
        try {

            const jobCategorty = await jobCategoryServices.findAllJobCategorty()

            res.status(201).send({
                success: true,
                message: "All job category is fetch successfully.",
                data: jobCategorty
            })
        } catch (error) {
            next(error)
        }
    },
    oneJobCategorty: async (req, res, next) => {
        try {

            const { id } = req.params

            const jobCategorty = await jobCategoryServices.findByJobCategortyId(id)
            if (!jobCategorty) throw createError.NotFound("The Job category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "One job category is fetch successfully.",
                data: jobCategorty
            })
        } catch (error) {
            next(error)
        }
    },
}