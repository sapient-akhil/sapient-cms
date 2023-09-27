const jobtypesModel = require("./jobType.model");

module.exports = {
  findAllJobTypes: async () => {
    return new Promise(async (resolve) => {
      return resolve(
        await jobtypesModel
          .find({ active: true }, { __v: 0 })
          .sort({ createdAt: -1 })
      );
    });
  },
  createJobTypes: async (req_data) => {
    return new Promise(async (resolve) => {
      await jobtypesModel.insertMany({ ...req_data });
      return resolve(
        await jobtypesModel.find({ ...req_data }, { __v: 0 })
      );
    });
  },
  findByJobTypesId: async (_id) => {
    return new Promise(async (resolve) => {
      return resolve(
        await jobtypesModel.findOne({ _id }, { __v: 0 })
      );
    });
  },
  findJobTypes: async (id, name) => {
    return new Promise(async (resolve) => {
      return resolve(
        await jobtypesModel.findOne(
          { _id: { $nin: [id] }, name },
          { __v: 0 }
        )
      );
    });
  },
  updateJobTypes: async (_id, req_data) => {
    return new Promise(async (resolve) => {
      await jobtypesModel.findByIdAndUpdate({ _id }, { ...req_data });
      return resolve(await jobtypesModel.find({ _id }, { __v: 0 }));
    });
  },
  deleteJobTypes: async (_id) => {
    return new Promise(async (resolve) => {
      await jobtypesModel.updateOne(
        { _id },
        { active: false },
        { new: true }
      );
      return resolve(
        await jobtypesModel.findOne({ _id }, { __v: 0 })
      );
    });
  },
};
