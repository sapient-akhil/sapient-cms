const createError = require("http-errors");
const { blogServices } = require("../../services/index");

module.exports = {
  allBlog: async (req, res, next) => {
    try {
      const blog = await blogServices.findAllBlog();

      res.status(201).send({
        success: true,
        message: "All blog is fetch successfully.",
        data: blog,
      });
    } catch (error) {
      next(error);
    }
  },
  oneBlog: async (req, res, next) => {
    try {
      const { id } = req.params;

      const blog = await blogServices.findByBlogId(id);
      if (!blog)
        throw createError.NotFound(
          "The blog with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "One blog is fetch successfully.",
        data: blog,
      });
    } catch (error) {
      next(error);
    }
  },
};
