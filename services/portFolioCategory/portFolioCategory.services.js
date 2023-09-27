const portFolioCategortyModel = require("./portFolioCategory.model");

module.exports = {
  findAllPortFolioCategorty: async () => {
    return new Promise(async (resolve) => {
      return resolve(
        await portFolioCategortyModel
          .find({ active: true }, { __v: 0 })
          .sort({ createdAt: -1 })
      );
    });
  },
  createPortFolioCategorty: async (req_data) => {
    return new Promise(async (resolve) => {
      await portFolioCategortyModel.insertMany({ ...req_data });
      return resolve(
        await portFolioCategortyModel.find({ ...req_data }, { __v: 0 })
      );
    });
  },
  findByPortFolioCategortyId: async (_id) => {
    return new Promise(async (resolve) => {
      return resolve(
        await portFolioCategortyModel.findOne({ _id }, { __v: 0 })
      );
    });
  },
  findPortFolioCategorty: async (id, name) => {
    return new Promise(async (resolve) => {
      return resolve(
        await portFolioCategortyModel.findOne(
          { _id: { $nin: [id] }, name },
          { __v: 0 }
        )
      );
    });
  },
  updatePortFolioCategorty: async (_id, req_data) => {
    return new Promise(async (resolve) => {
      await portFolioCategortyModel.findByIdAndUpdate({ _id }, { ...req_data });
      return resolve(await portFolioCategortyModel.find({ _id }, { __v: 0 }));
    });
  },
  deletePortFolioCategorty: async (_id) => {
    return new Promise(async (resolve) => {
      await portFolioCategortyModel.updateOne(
        { _id },
        { active: false },
        { new: true }
      );
      return resolve(
        await portFolioCategortyModel.findOne({ _id }, { __v: 0 })
      );
    });
  },
};
