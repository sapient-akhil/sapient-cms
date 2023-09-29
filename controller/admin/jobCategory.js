const createError = require("http-errors")
const { jobCategoryServices } = require("../../services/index")

module.exports = {
    createJobCategorty: async (req, res, next) => {
        try {
            const req_data = req.body;

            const existJobCategoryName = await jobCategoryServices.findJobCategorty(null,req_data.name);
            if (existJobCategoryName) {
                throw createError.Conflict("Job category name already exists");
            }

            const jobCategortyData = await jobCategoryServices.createJobCategorty(req_data)

            res.status(201).send({
                success: true,
                message: "Job category is created successfully.",
                data: jobCategortyData
            })
        } catch (error) {
            next(error)
        }
    },
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
            if (!jobCategorty) throw createError.NotFound("The job category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "One job category is fetch successfully.",
                data: jobCategorty
            })
        } catch (error) {
            next(error)
        }
    },
    updateJobCategorty: async (req, res, next) => {
        try {
            const req_data = req.body;
            const id = req.params.id

            const existJobCategoryName = await jobCategoryServices.findJobCategorty(id,req_data.name);
            if (existJobCategoryName) {
                throw createError.Conflict("Job category name already exists");
            }

            const jobCategortyData = await jobCategoryServices.updateJobCategorty(id, req_data)
            if (!jobCategortyData.length) throw createError.NotFound("The job category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Job category is update successfully.",
                data: jobCategortyData
            })
        } catch (error) {
            next(error)
        }
    },
    deleteJobCategorty: async (req, res, next) => {
        try {

            const { id } = req.params

            const jobCategorty = await jobCategoryServices.deleteJobCategorty(id)
            if (!jobCategorty) throw createError.NotFound("The Job category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Job category is delete successfully",
                data: jobCategorty
            })
        } catch (error) {
            next(error)
        }
    }
}