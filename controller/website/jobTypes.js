const createError = require("http-errors");
const { jobTypesServices } = require("../../services/index");

module.exports = {
  allJobTypes: async (req, res, next) => {
    try {
      const jobTypes = await jobTypesServices.findAllJobTypes();

      res.status(201).send({
        success: true,
        message: "All Job type is fetch successfully.",
        data: jobTypes,
      });
    } catch (error) {
      next(error);
    }
  },
  oneJobTypes: async (req, res, next) => {
    try {
      const { id } = req.params;

      const jobTypes = await jobTypesServices.findByJobTypesId(id);
      if (!jobTypes)
        throw createError.NotFound(
          "The Job type with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "One Job type is fetch successfully.",
        data: jobTypes,
      });
    } catch (error) {
      next(error);
    }
  },
};
