const jobCategoryModel = require("./jobCategory.model");

module.exports = {
  findAllJobCategorty: async () => {
    return new Promise(async (resolve) => {
      return resolve(
        await jobCategoryModel
          .find({ active: true }, { __v: 0 })
          .sort({ createdAt: -1 })
      );
    });
  },
  createJobCategorty: async (req_data) => {
    return new Promise(async (resolve) => {
      await jobCategoryModel.insertMany({ ...req_data });
      return resolve(
        await jobCategoryModel.find({ ...req_data }, { __v: 0 })
      );
    });
  },
  findByJobCategortyId: async (_id) => {
    return new Promise(async (resolve) => {
      return resolve(
        await jobCategoryModel.findOne({ _id }, { __v: 0 })
      );
    });
  },
  findJobCategorty: async (id, name) => {
    return new Promise(async (resolve) => {
      return resolve(
        await jobCategoryModel.findOne(
          { _id: { $nin: [id] }, name },
          { __v: 0 }
        )
      );
    });
  },
  updateJobCategorty: async (_id, req_data) => {
    return new Promise(async (resolve) => {
      await jobCategoryModel.findByIdAndUpdate({ _id }, { ...req_data });
      return resolve(await jobCategoryModel.find({ _id }, { __v: 0 }));
    });
  },
  deleteJobCategorty: async (_id) => {
    return new Promise(async (resolve) => {
      await jobCategoryModel.updateOne(
        { _id },
        { active: false },
        { new: true }
      );
      return resolve(
        await jobCategoryModel.findOne({ _id }, { __v: 0 })
      );
    });
  },
};
