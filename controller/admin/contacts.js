const createError = require("http-errors");
const { contactsServices } = require("../../services/index");

module.exports = {
  allContacts: async (req, res, next) => {
    try {
      const contacts = await contactsServices.findAllContacts();

      res.status(201).send({
        success: true,
        message: "All assigned projects fetched successfully.",
        data: contacts,
      });
    } catch (error) {
      next(error);
    }
  },
};
