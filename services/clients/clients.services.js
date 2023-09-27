const clientModel = require("./clients.model");

module.exports = {
  findAllClients: async () => {
    return new Promise(async (resolve) => {
      return resolve(
        await clientModel
          .find({ active: true }, { __v: 0 })
          .sort({ createdAt: -1 })
      );
    });
  },
  createClients: async (req_data) => {
    return new Promise(async (resolve) => {
      await clientModel.insertMany({ ...req_data });
      return resolve(
        await clientModel.find({ ...req_data }, { __v: 0 })
      );
    });
  },
  findByClientId: async (_id) => {
    return new Promise(async (resolve) => {
      return resolve(
        await clientModel.findOne({ _id }, { __v: 0 })
      );
    });
  },
  findClients: async (id, name) => {
    return new Promise(async (resolve) => {
      return resolve(
        await clientModel.findOne(
          { _id: { $nin: [id] }, name },
          { __v: 0 }
        )
      );
    });
  },
  updateClients: async (_id, req_data) => {
    return new Promise(async (resolve) => {
      await clientModel.findByIdAndUpdate({ _id }, { ...req_data });
      return resolve(await clientModel.find({ _id }, { __v: 0 }));
    });
  },
  deleteClients: async (_id) => {
    return new Promise(async (resolve) => {
      await clientModel.updateOne(
        { _id },
        { active: false },
        { new: true }
      );
      return resolve(
        await clientModel.findOne({ _id }, { __v: 0 })
      );
    });
  },
};
