const createError = require("http-errors");
const { countersServices } = require("../../services/index");

module.exports = {
  allCounters: async (req, res, next) => {
    try {
      const counters = await countersServices.findAllCounters();

      res.status(201).send({
        success: true,
        message: "All assigned projects fetched successfully.",
        data: counters,
      });
    } catch (error) {
      next(error);
    }
  },
  oneCounters: async (req, res, next) => {
    try {
      const { id } = req.params;

      const counters = await countersServices.findByCountersId(id);
      if (!counters)
        throw createError.NotFound(
          "The assigned project with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "One assigned project is fetch successfully.",
        data: counters,
      });
    } catch (error) {
      next(error);
    }
  }
}
