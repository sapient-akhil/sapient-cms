const createError = require("http-errors");
const { contactsServices } = require("../../services/index");

module.exports = {
  allContacts: async (req, res, next) => {
    try {
      const view = req.query.view;
      const contacts = await contactsServices.findAllContacts(view);

      res.status(201).send({
        success: true,
        message: "All contacts fetched successfully.",
        data: contacts,
      });
    } catch (error) {
      next(error);
    }
  },
  updateViewFieldInContacts: async (req, res, next) => {
    try {
      const { id } = req.params;

      const contacts = await contactsServices.updateViewFieldInContacts(id);
      if (!contacts)
        throw createError.NotFound(
          "The contacts with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "contacts view field is update successfully",
        data: contacts,
      });
    } catch (error) {
      next(error);
    }
  },
};
