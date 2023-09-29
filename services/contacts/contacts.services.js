const contactsModel = require("./contacts.model");

module.exports = {
  findAllContacts: async (view) => {
    return new Promise(async (resolve) => {
      const query = { active: true };
      if (view) {
        query.view = view;
      }
      return resolve(await contactsModel.find(query, { __v: 0 }));
    });
  },
  createContacts: async (req_data) => {
    return new Promise(async (resolve) => {
      await contactsModel.insertMany({ ...req_data });
      return resolve(await contactsModel.find({ ...req_data }, { __v: 0 }));
    });
  },
  updateViewFieldInContacts: async (_id) => {
    return new Promise(async (resolve) => {
      await contactsModel.updateOne({ _id }, { view: true }, { new: true });
      return resolve(await contactsModel.findOne({ _id }, { __v: 0 }));
    });
  },
};
