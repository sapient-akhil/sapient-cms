const blogModel = require("./blog.model");

module.exports = {
  findAllBlog: async (page, pageSize) => {
    return new Promise(async (resolve) => {
      return resolve(
        await blogModel
          .aggregate([
            {
              $match: { active: true },
            },
            {
              $lookup: {
                from: "blogcategories",
                localField: "blog_category",
                foreignField: "_id",
                as: "blogcategories",
              },
            },
            {
              $addFields: {
                blogcategories: {
                  $filter: {
                    input: "$blogcategories",
                    as: "category",
                    cond: { $eq: ["$$category.active", true] }, // Filter active blog categories
                  },
                },
              },
            },
            {
              $lookup: {
                from: "writers",
                localField: "writer",
                foreignField: "_id",
                as: "writers",
              },
            },
            {
              $addFields: {
                writers: {
                  $filter: {
                    input: "$writers",
                    as: "writer",
                    cond: { $eq: ["$$writer.active", true] }, // Filter active writers
                  },
                },
              },
            },
            {
              $project: {
                _id: 1,
                blog_title: 1,
                tldr: 1,
                time_to_read: 1,
                publish_date: 1,
                blog_content: 1,
                image: 1,
                seo_fb: 1,
                seo_twitter: 1,
                slug_url: 1,
                seo_main: 1,
                faqs: 1,
                contact_description: 1,
                blogCategoryId: { $arrayElemAt: ["$blogcategories._id", 0] },
                blogCategoryName: { $arrayElemAt: ["$blogcategories.name", 0] },
                writersId: { $arrayElemAt: ["$writers._id", 0] },
                writersUsername: { $arrayElemAt: ["$writers.username", 0] },
              },
            },
          ])
          .sort({ publish_date: -1 })
          .skip((page - 1) * pageSize)
          .limit(pageSize * 1)
      );
    });
  },
  findAllBlogForUser: async (page, pageSize) => {
    return new Promise(async (resolve) => {
      return resolve(
        await blogModel
          .aggregate([
            {
              $match: { active: true },
            },
            {
              $lookup: {
                from: "blogcategories",
                localField: "blog_category",
                foreignField: "_id",
                as: "blogcategories",
              },
            },
            {
              $addFields: {
                blogcategories: {
                  $filter: {
                    input: "$blogcategories",
                    as: "category",
                    cond: { $eq: ["$$category.active", true] }, // Filter active blog categories
                  },
                },
              },
            },
            {
              $lookup: {
                from: "writers",
                localField: "writer",
                foreignField: "_id",
                as: "writers",
              },
            },
            {
              $addFields: {
                writers: {
                  $filter: {
                    input: "$writers",
                    as: "writer",
                    cond: { $eq: ["$$writer.active", true] }, // Filter active writers
                  },
                },
              },
            },
            {
              $project: {
                _id: 1,
                blog_title: 1,
                tldr: 1,
                time_to_read: 1,
                publish_date: 1,
                blog_content: 1,
                image: 1,
                seo_fb: 1,
                seo_twitter: 1,
                slug_url: 1,
                seo_main: 1,
                faqs: 1,
                contact_description: 1,
                blogCategoryId: { $arrayElemAt: ["$blogcategories._id", 0] },
                blogCategoryName: { $arrayElemAt: ["$blogcategories.name", 0] },
                writersId: { $arrayElemAt: ["$writers._id", 0] },
                writersUsername: { $arrayElemAt: ["$writers.username", 0] },
              },
            },
          ])
          .sort({ publish_date: -1 })
      );
    });
  },
  createBlog: async (req_data) => {
    return new Promise(async (resolve) => {
      const data = await blogModel.insertMany({ ...req_data });
      return resolve(data);
    });
  },
  countBlogs: async () => {
    return new Promise(async (resolve) => {
      //   console.log("employeeId", employeeId);
      return resolve(await blogModel.countDocuments({ active: true }));
    });
  },
  findBlogBySlug: async (slug_url) => {
    return new Promise(async (resolve) => {
      const data = await blogModel.findOne({ slug_url });
      return resolve(data);
    });
  },
  findSlug: async (id, slug_url) => {
    return new Promise(async (resolve) => {
        return resolve(
            await blogModel.findOne(
                { _id: { $nin: [id] }, slug_url },
                { __v: 0 }
            )
        )
    });
},
  updateBlog: async (_id, req_data) => {
    return new Promise(async (resolve) => {
      const data = await blogModel.findByIdAndUpdate({ _id }, { ...req_data });
      return resolve(data);
    });
  },
  findByBlogId: async (id) => {
    return new Promise(async (resolve) => {
      return resolve(
        await blogModel.aggregate([
          {
            $match: {
              _id: id, // Assuming you are using Mongoose
            },
          },
          {
            $lookup: {
              from: "blogcategories",
              localField: "blog_category",
              foreignField: "_id",
              as: "blogcategories",
            },
          },
          {
            $lookup: {
              from: "writers",
              localField: "writer",
              foreignField: "_id",
              as: "writers",
            },
          },
          {
            $project: {
              _id: 1,
              blog_title: 1,
              tldr: 1,
              time_to_read: 1,
              publish_date: 1,
              blog_content: 1,
              image: 1,
              slug_url: 1,
              seo_fb: 1,
              seo_twitter: 1,
              seo_main: 1,
              faqs: 1,
              contact_description: 1,
              blogCategoryId: { $arrayElemAt: ["$blogcategories._id", 0] },
              blogCategoryName: { $arrayElemAt: ["$blogcategories.name", 0] },
              writersId: { $arrayElemAt: ["$writers._id", 0] },
              writersUsername: { $arrayElemAt: ["$writers.username", 0] },
            },
          },
        ])
      );
    });
  },
  deleteBlog: async (_id) => {
    return new Promise(async (resolve) => {
      await blogModel.updateOne({ _id }, { active: false }, { new: true });
      return resolve(await blogModel.findOne({ _id }, { __v: 0 }));
    });
  },
};
