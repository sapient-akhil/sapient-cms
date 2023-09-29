const createError = require("http-errors");
const { portFolioServices } = require("../../services/index");
const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  allPortFolio: async (req, res, next) => {
    try {
      const portFolio = await portFolioServices.findAllPortFolio();

      res.status(201).send({
        success: true,
        message: "All port folio is fetch successfully.",
        data: portFolio,
      });
    } catch (error) {
      next(error);
    }
  },
  onePortFolio: async (req, res, next) => {
    try {
      let id = req.params?.id;
      id = new ObjectId(id);

      const portFolio = await portFolioServices.findByPortFolioId(id);
      if (!portFolio)
        throw createError.NotFound(
          "The Port folio with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "One port folio is fetch successfully.",
        data: portFolio,
      });
    } catch (error) {
      next(error);
    }
  },
};
