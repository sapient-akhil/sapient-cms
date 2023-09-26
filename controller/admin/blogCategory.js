const createError = require("http-errors")
const { blogCategoryServices } = require("../../services/index")

module.exports = {
    createBlogCategorty: async (req, res, next) => {
        try {
            const req_data = req.body;

            const existBlogCategoryName = await blogCategoryServices.findbyName(req_data.name);
            if (existBlogCategoryName) {
                throw createError.Conflict("Blog category name already exists");
            }

            const BlogCategortyData = await blogCategoryServices.createBlogCategorty(req_data)

            res.status(201).send({
                success: true,
                message: "Blog category is created successfully.",
                data: BlogCategortyData
            })
        } catch (error) {
            next(error)
        }
    },
    allBlogCategorty: async (req, res, next) => {
        try {

            const BlogCategorty = await blogCategoryServices.findAllBlogCategorty()

            res.status(201).send({
                success: true,
                message: "All blog category is fetch successfully.",
                data: BlogCategorty
            })
        } catch (error) {
            next(error)
        }
    },
    oneBlogCategorty: async (req, res, next) => {
        try {

            const { id } = req.params

            const BlogCategorty = await blogCategoryServices.findByBlogCategortyId(id)
            if (!BlogCategorty) throw createError.NotFound("The blog category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "One blog category is fetch successfully.",
                data: BlogCategorty
            })
        } catch (error) {
            next(error)
        }
    },
    updateBlogCategorty: async (req, res, next) => {
        try {
            const req_data = req.body;
            const id = req.params.id

            const existBlogCategoryName = await blogCategoryServices.findbyName(req_data.name);
            if (existBlogCategoryName) {
                throw createError.Conflict("Blog category name already exists");
            }

            const BlogCategortyData = await blogCategoryServices.updateBlogCategorty(id, req_data)
            if (!BlogCategortyData.length) throw createError.NotFound("The blog category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Blog category is update successfully.",
                data: BlogCategortyData
            })
        } catch (error) {
            next(error)
        }
    },
    deleteBlogCategorty: async (req, res, next) => {
        try {

            const { id } = req.params

            const BlogCategorty = await blogCategoryServices.deleteBlogCategorty(id)
            if (!BlogCategorty) throw createError.NotFound("The Blog Category with the provided ID could not be found. Please ensure the ID is correct and try again")

            res.status(201).send({
                success: true,
                message: "Blog category is delete successfully",
                data: BlogCategorty
            })
        } catch (error) {
            next(error)
        }
    }
}