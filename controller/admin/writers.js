const createError = require("http-errors");
const { writersServices } = require("../../services/index");

module.exports = {
  createWritersByAdmin: async (req, res, next) => {
    try {
      const req_data = req.body;

      req_data.image = req_data.image ? req_data.image : null;

      const existData = await writersServices.existData(
        null,
        req_data.email,
        req_data.writername
      );

      if (existData.status) {
        const writersData = await writersServices.createWritersData(req_data);

        res.status(201).json({
          success: true,
          message: "Writer is created successfully.",
          data: writersData,
        });
      } else {
        res.status(201).json({
          success: false,
          message: existData.message,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  allWriters: async (req, res, next) => {
    try {
      const page = parseInt(req.query.page || 1);
      const pageSize = parseInt(req.query.pageSize || 10);

      const total = await writersServices.countWriters();
      const pageCount = Math.ceil(total / pageSize);

      const writers = await writersServices.findAllWriters(page, pageSize);
      if (!writers) throw createError.NotFound("No any writer is found.");

      res.status(201).send({
        success: true,
        message: "All writer data is fetch successfully.",
        data: writers,
        meta: {
          pagination: {
            page,
            pageSize,
            pageCount,
            total,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  },
  oneWriters: async (req, res, next) => {
    try {
      const id = req.params.id;

      const writersData = await writersServices.findByWritersId(id);
      if (!writersData)
        throw createError.NotFound(
          "The writer with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "One writer data is fetch successfully.",
        data: writersData,
      });
    } catch (error) {
      next(error);
    }
  },
  updateWritersByAdmin: async (req, res, next) => {
    try {
      const id = req.params.id;
      const req_data = req.body;

      req_data.image = req_data.image ? req_data.image : null;

      const existData = await writersServices.existData(
        id,
        req_data.email,
        req_data.writername
      );

      if (existData.status) {
        const writersData = await writersServices.updateWritersData(
          id,
          req_data
        );
        if (!writersData)
          throw createError.NotFound(
            "The writer with the provided ID could not be found. Please ensure the ID is correct and try again"
          );

        res.status(201).json({
          success: true,
          message: "Writer is update successfully.",
          data: writersData,
        });
      } else {
        res.status(201).json({
          success: false,
          message: existData.message,
        });
      }
    } catch (error) {
      next(error);
    }
  },
  deleteWritersByAdmin: async (req, res, next) => {
    try {
      const { id } = req.params;

      const writers = await writersServices.deleteWritersData(id);
      if (!writers)
        throw createError.NotFound(
          "The writer with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "Writer is delete successfully",
        data: writers,
      });
    } catch (error) {
      next(error);
    }
  },
};
