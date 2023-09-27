const createError = require("http-errors")
const { openPositionServices } = require("../../services/index")
const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
    createOpenPosition: async (req, res, next) => {
        try {
            const req_data = req.body;

            const openPositionData = await openPositionServices.createOpenPosition(req_data)

            res.status(201).send({
                success: true,
                message: "Open position is created successfully.",
                data: openPositionData
            })
        } catch (error) {
            next(error)
        }
    },
    allOpenPosition: async (req, res, next) => {
        try {

            const openPosition = await openPositionServices.findAllOpenPosition()

            res.status(201).send({
                success: true,
                message: "All Open position is fetch successfully.",
                data: openPosition
            })
        } catch (error) {
            next(error)
        }
    },
    oneOpenPosition: async (req, res, next) => {
        try {

            let id = req.params?.id;
            id = new ObjectId(id);

            const openPosition = await openPositionServices.findByOpenPositionId(id)
            if (!openPosition) throw createError.NotFound("The Open position with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "One Open position is fetch successfully.",
                data: openPosition
            })
        } catch (error) {
            next(error)
        }
    },
    updateOpenPosition: async (req, res, next) => {
        try {
            const req_data = req.body;
            const id = req.params.id

            const openPositionData = await openPositionServices.updateOpenPosition(id, req_data)
            if (!openPositionData.length) throw createError.NotFound("The Open position with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Open position is update successfully.",
                data: openPositionData
            })
        } catch (error) {
            next(error)
        }
    },
    deleteOpenPosition: async (req, res, next) => {
        try {

            const { id } = req.params

            const openPosition = await openPositionServices.deleteOpenPosition(id)
            if (!openPosition) throw createError.NotFound("The Open positions with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Open position is delete successfully",
                data: openPosition
            })
        } catch (error) {
            next(error)
        }
    }
}