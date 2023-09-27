const contactsModel = require("./contacts.model");

module.exports = {
  findAllContacts: async () => {
    return new Promise(async (resolve) => {
      return resolve(await contactsModel.find({ active: true }, { __v: 0 }));
    });
  },
  createContacts: async (req_data) => {
    return new Promise(async (resolve) => {
      await contactsModel.insertMany({ ...req_data });
      return resolve(await contactsModel.find({ ...req_data }, { __v: 0 }));
    });
  },
};
