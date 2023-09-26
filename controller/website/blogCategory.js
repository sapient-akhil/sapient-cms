const createError = require("http-errors");
const { blogCategoryServices } = require("../../services/index");

module.exports = {
  allBlogCategorty: async (req, res, next) => {
    try {
      const BlogCategorty = await blogCategoryServices.findAllBlogCategorty();

      res.status(201).send({
        success: true,
        message: "All blog category is fetch successfully.",
        data: BlogCategorty,
      });
    } catch (error) {
      next(error);
    }
  },
  oneBlogCategorty: async (req, res, next) => {
    try {
      const { id } = req.params;

      const BlogCategorty = await blogCategoryServices.findByBlogCategortyId(
        id
      );
      if (!BlogCategorty)
        throw createError.NotFound(
          "The blog category with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "One blog category is fetch successfully.",
        data: BlogCategorty,
      });
    } catch (error) {
      next(error);
    }
  },
};
