const adminModel = require("./admin.model");

module.exports = {
  createAdminData: async (req_data) => {
    return new Promise(async (resolve) => {
      await adminModel.insertMany({ ...req_data });
      return resolve(await adminModel.find({ ...req_data }, { __v: 0 }));
    });
  },
  existData: async (id, email, username) => {
    return new Promise(async (resolve) => {
      const existeEmail = await adminModel.countDocuments({
        _id: { $nin: [id] },
        email,
      });
      console.log("existeEmail", existeEmail);
      if (existeEmail) {
        return resolve({
          status: false,
          message: "Email Already Exist",
        });
      }
      const existeusername = await adminModel.countDocuments({
        _id: { $nin: [id] },
        username,
      });
      if (existeusername) {
        return resolve({
          status: false,
          message: "Username Already Exist",
        });
      }
      if (!existeEmail && !existeusername) {
        return resolve({
          status: true,
          message: "All Data Is Not Exist",
        });
      }
    });
  },
  findbyEmail: async (email) => {
    return new Promise(async (resolve) => {
        return resolve(
            await adminModel.findOne(
                { email },
                { __v: 0 }
            )
        )
    });
},
};
