const createError = require("http-errors");
const { openPositionServices } = require("../../services/index");
const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  allOpenPosition: async (req, res, next) => {
    try {
      const openPosition = await openPositionServices.findAllOpenPosition();

      res.status(201).send({
        success: true,
        message: "All Open position is fetch successfully.",
        data: openPosition,
      });
    } catch (error) {
      next(error);
    }
  },
  oneOpenPosition: async (req, res, next) => {
    try {
      let id = req.params?.id;
      id = new ObjectId(id);
      
      const openPosition = await openPositionServices.findByOpenPositionId(id);
      if (!openPosition)
        throw createError.NotFound(
          "The Open position with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "One Open position is fetch successfully.",
        data: openPosition,
      });
    } catch (error) {
      next(error);
    }
  },
};
