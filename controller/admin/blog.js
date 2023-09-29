const createError = require("http-errors");
const { blogServices } = require("../../services/index");
const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  createBlog: async (req, res, next) => {
    try {
      const req_data = req.body;

      const faqs = await JSON.parse(req_data.faqs);
      const seo_fb = await JSON.parse(req_data.seo_fb);
      const seo_twitter = await JSON.parse(req_data.seo_twitter);
      const seo_main = await JSON.parse(req_data.seo_main);

      req_data.faqs = faqs;
      req_data.seo_fb = seo_fb;
      req_data.seo_twitter = seo_twitter;
      req_data.seo_main = seo_main;

      const existSlug = await blogServices.findSlug(null, req_data.slug_url);
      if (existSlug) throw createError.NotFound("Slug is already exist");

      const blog = await blogServices.createBlog(req_data);

      res.status(201).send({
        success: true,
        message: "Blog is created successfully.",
        data: blog,
      });
    } catch (error) {
      next(error);
    }
  },
  allBlog: async (req, res, next) => {
    try {
      const page = parseInt(req.query.page || 1);
      const pageSize = parseInt(req.query.pageSize || 10);

      const total = await blogServices.countBlogs();
      const pageCount = Math.ceil(total / pageSize);

      const blog = await blogServices.findAllBlog(page, pageSize);

      res.status(201).send({
        success: true,
        message: "All blog is fetch successfully.",
        data: blog,
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
  updateBlog: async (req, res, next) => {
    try {
      const req_data = req.body;
      const id = req.params.id;

      const faqs = await JSON.parse(req_data.faqs);
      const seo_fb = await JSON.parse(req_data.seo_fb);
      const seo_twitter = await JSON.parse(req_data.seo_twitter);
      const seo_main = await JSON.parse(req_data.seo_main);

      req_data.faqs = faqs;
      req_data.seo_fb = seo_fb;
      req_data.seo_twitter = seo_twitter;
      req_data.seo_main = seo_main;

      const existSlug = await blogServices.findSlug(id, req_data.slug_url);
      if (existSlug) throw createError.NotFound("Slug is already exist");

      const blog = await blogServices.updateBlog(id, req_data);
      if (!blog)
        throw createError.NotFound(
          "The blog with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "Blog is update successfully.",
        data: blog,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteBlog: async (req, res, next) => {
    try {
      const { id } = req.params;

      const blog = await blogServices.deleteBlog(id);
      if (!blog)
        throw createError.NotFound(
          "The blog with the provided ID could not be found. Please ensure the ID is correct and try again"
        );

      res.status(201).send({
        success: true,
        message: "Blog is delete successfully",
        data: blog,
      });
    } catch (error) {
      next(error);
    }
  },
};
