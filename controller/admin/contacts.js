const createError = require("http-errors");
const { contactsServices } = require("../../services/index");

module.exports = {
  allContacts: async (req, res, next) => {
    try {
      const view = req.query.view;

      const page = parseInt(req.query.page || 1);
      const pageSize = parseInt(req.query.pageSize || 10);

      const total = await contactsServices.countContacts(view);
      const pageCount = Math.ceil(total / pageSize);

      const contacts = await contactsServices.findAllContacts(
        view,
        page,
        pageSize
      );

      res.status(201).send({
        success: true,
        message: "All contacts fetched successfully.",
        data: contacts,
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

  // allBlog: async (req, res, next) => {
  //   try {

  //     const total = await blogServices.countBlogs();
  //     const pageCount = Math.ceil(total / pageSize);

  //     const blog = await blogServices.findAllBlog(page, pageSize);

  //     res.status(201).send({
  //       success: true,
  //       message: "All blog is fetch successfully.",
  //       data: blog,
  //       meta: {
  //         pagination: {
  //           page,
  //           pageSize,
  //           pageCount,
  //           total,
  //         },
  //       },
  //     });
  //   } catch (error) {
  //     next(error);
  //   }
  // },
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
