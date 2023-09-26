const countersModel = require("./counters.model");

module.exports = {
  findAllCounters: async () => {
    return new Promise(async (resolve) => {
      return resolve(
        await countersModel
          .find({ active: true }, { __v: 0 })
          .sort({ createdAt: -1 })
      );
    });
  },
  createCounters: async (req_data) => {
    return new Promise(async (resolve) => {
      await countersModel.insertMany({ ...req_data });
      return resolve(await countersModel.find({ ...req_data }, { __v: 0 }));
    });
  },
  findByCountersId: async (_id) => {
    return new Promise(async (resolve) => {
      return resolve(await countersModel.findOne({ _id }, { __v: 0 }));
    });
  },
  findCounters: async (name) => {
    return new Promise(async (resolve) => {
      return resolve(await countersModel.findOne({ name }, { __v: 0 }));
    });
  },
  updateCounters: async (_id, req_data) => {
    return new Promise(async (resolve) => {
      await countersModel.findByIdAndUpdate({ _id }, { ...req_data });
      return resolve(await countersModel.find({ _id }, { __v: 0 }));
    });
  },
  deleteCounters: async (_id) => {
    return new Promise(async (resolve) => {
      await countersModel.updateOne({ _id }, { active: false }, { new: true });
      return resolve(await countersModel.findOne({ _id }, { __v: 0 }));
    });
  },
};
