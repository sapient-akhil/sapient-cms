const createError = require("http-errors");
const { blogServices } = require("../../services/index");
const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  allBlog: async (req, res, next) => {
    try {
      const blog = await blogServices.findAllBlogForUser();

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
      let id = req.params?.id;
      id = new ObjectId(id);

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
  findBlogBySlug: async (req, res, next) => {
    try {
      const slug_url = req.params.slug;

      const blog = await blogServices.findBlogBySlug(slug_url);
      if (!blog) throw createError.NotFound("This slug is not exist");

      res.status(201).send({
        success: true,
        message: "get all the blog",
        data: blog,
      });
    } catch (error) {
      next(error);
    }
  },
  findBlogByBlogCategory: async (req, res, next) => {
    try {
      const blog_category = req.params.category;

      const blog = await blogServices.findBlogByBlogCategorty(blog_category);
      // console.log("blog",blog[0].blogCategoryName)
      if (blog.length === 0) throw createError.NotFound("Blog category is not exist");

      res.status(201).send({
        success: true,
        message: "get all the blog",
        data: blog,
      });
    } catch (error) {
      next(error);
    }
  },
};
