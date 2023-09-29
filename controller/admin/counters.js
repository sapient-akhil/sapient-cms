const createError = require("http-errors");
const { countersServices } = require("../../services/index");

module.exports = {
  createCounters: async (req, res, next) => {
    try {
      const req_data = req.body;
      console.log("req_data", req_data);
      const counters = await countersServices.createCounters(req_data);

      res.status(201).send({
        success: true,
        message: "Counter is created successfully.",
        data: counters,
      });
    } catch (error) {
      next(error);
    }
  },
  allCounters: async (req, res, next) => {
    try {
      const counters = await countersServices.findAllCounters();

      res.status(201).send({
        success: true,
        message: "All counters fetched successfully.",
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
          "The counter with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "One counter is fetch successfully.",
        data: counters,
      });
    } catch (error) {
      next(error);
    }
  },
  updateCounters: async (req, res, next) => {
    try {
      const req_data = req.body;
      const id = req.params.id;

      const counters = await countersServices.updateCounters(id, req_data);
      if (!counters)
        throw createError.NotFound(
          "The counter with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "Counter is update successfully.",
        data: counters,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteCounters: async (req, res, next) => {
    try {
      const { id } = req.params;

      const counters = await countersServices.deleteCounters(id);
      if (!counters)
        throw createError.NotFound(
          "The counter with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "Counter is delete successfully",
        data: counters,
      });
    } catch (error) {
      next(error);
    }
  },
};
