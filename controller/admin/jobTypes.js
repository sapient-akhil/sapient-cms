const createError = require("http-errors")
const { jobTypesServices } = require("../../services/index")

module.exports = {
    createJobTypes: async (req, res, next) => {
        try {
            const req_data = req.body;

            const existJobTypesName = await jobTypesServices.findJobTypes(null,req_data.name);
            if (existJobTypesName) {
                throw createError.Conflict("Job type name already exists");
            }

            const jobTypesData = await jobTypesServices.createJobTypes(req_data)

            res.status(201).send({
                success: true,
                message: "Job type is created successfully.",
                data: jobTypesData
            })
        } catch (error) {
            next(error)
        }
    },
    allJobTypes: async (req, res, next) => {
        try {

            const jobTypes = await jobTypesServices.findAllJobTypes()

            res.status(201).send({
                success: true,
                message: "All Job type is fetch successfully.",
                data: jobTypes
            })
        } catch (error) {
            next(error)
        }
    },
    oneJobTypes: async (req, res, next) => {
        try {

            const { id } = req.params

            const jobTypes = await jobTypesServices.findByJobTypesId(id)
            if (!jobTypes) throw createError.NotFound("The Job type with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "One Job type is fetch successfully.",
                data: jobTypes
            })
        } catch (error) {
            next(error)
        }
    },
    updateJobTypes: async (req, res, next) => {
        try {
            const req_data = req.body;
            const id = req.params.id

            const existJobTypesName = await jobTypesServices.findJobTypes(id,req_data.name);
            if (existJobTypesName) {
                throw createError.Conflict("Job type name already exists");
            }

            const jobTypesData = await jobTypesServices.updateJobTypes(id, req_data)
            if (!jobTypesData.length) throw createError.NotFound("The Job type with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Job type is update successfully.",
                data: jobTypesData
            })
        } catch (error) {
            next(error)
        }
    },
    deleteJobTypes: async (req, res, next) => {
        try {

            const { id } = req.params

            const jobTypes = await jobTypesServices.deleteJobTypes(id)
            if (!jobTypes) throw createError.NotFound("The Job types with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Job type is delete successfully",
                data: jobTypes
            })
        } catch (error) {
            next(error)
        }
    }
}