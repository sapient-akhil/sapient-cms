const createError = require("http-errors");
const { contactsServices } = require("../../services/index");

module.exports = {
  createContacts: async (req, res, next) => {
    try {
      const req_data = req.body;
      console.log("req_data", req_data);
      const contacts = await contactsServices.createContacts(req_data);

      res.status(201).send({
        success: true,
        message: "Assigned project is created successfully.",
        data: contacts,
      });
    } catch (error) {
      next(error);
    }
  },
};
