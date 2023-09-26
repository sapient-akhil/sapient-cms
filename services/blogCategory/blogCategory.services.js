const blogCategortyModel = require("./blogCategory.model")

module.exports = {
    findAllBlogCategorty: async () => {
        return new Promise(async (resolve) => {
            return resolve(
                await blogCategortyModel.find({ active: true }, { __v: 0 }).sort({ createdAt: -1 })
            )
        });
    },
    createBlogCategorty: async (req_data) => {
        return new Promise(async (resolve) => {
            await blogCategortyModel.insertMany({ ...req_data });
            return resolve(
                await blogCategortyModel.find(
                    { ...req_data },
                    { __v: 0 }
                )
            );
        });
    },
    findbyName: async (name) => {
        return new Promise(async (resolve) => {
            return resolve(
                await blogCategortyModel.findOne(
                    { name, active: true },
                )
            )
        });
    },
    findByBlogCategortyId: async (_id) => {
        return new Promise(async (resolve) => {
            return resolve(
                await blogCategortyModel.findOne(
                    { _id },
                    { __v: 0 }
                )
            );
        });
    },
    findBlogCategorty: async (link, name) => {
        return new Promise(async (resolve) => {
            return resolve(
                await blogCategortyModel.findOne(
                    { link, name },
                    { __v: 0 }
                )
            )
        });
    },
    updateBlogCategorty: async (_id, req_data) => {
        return new Promise(async (resolve) => {
            await blogCategortyModel.findByIdAndUpdate({ _id }, { ...req_data });
            return resolve(
                await blogCategortyModel.find(
                    { _id },
                    { __v: 0 }
                )
            );
        });
    },
    deleteBlogCategorty: async (_id) => {
        return new Promise(async (resolve) => {
            await blogCategortyModel.updateOne({ _id }, { active: false }, { new: true });
            return resolve(
                await blogCategortyModel.findOne(
                    { _id },
                    { __v: 0 }
                )
            );
        });
    }
}