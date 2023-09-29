const createError = require("http-errors");
const { portFolioServices } = require("../../services/index");

module.exports = {
  allPortFolioCategorty: async (req, res, next) => {
    try {
      const portFolioCategorty = await portFolioServices.findAllPortFolioCategorty();

      res.status(201).send({
        success: true,
        message: "All portfolio category is fetch successfully.",
        data: portFolioCategorty,
      });
    } catch (error) {
      next(error);
    }
  },
  onePortFolioCategorty: async (req, res, next) => {
    try {
      const { id } = req.params;

      const portFolioCategorty =await portFolioServices.findByPortFolioCategortyId(id);
      if (!portFolioCategorty)
        throw createError.NotFound(
          "The portfolio category with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "One portfolio category is fetch successfully.",
        data: portFolioCategorty,
      });
    } catch (error) {
      next(error);
    }
  },
};
