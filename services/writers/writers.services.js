const writersModel = require("./writers.model");

module.exports = {
  findAllWriters: async (page, pageSize) => {
    return new Promise(async (resolve) => {
      return resolve(
        await writersModel
          .find({ active: true }, { __v: 0 })
          .skip((page - 1) * pageSize)
          .limit(pageSize * 1)
      );
    });
  },
  createWritersData: async (req_data) => {
    return new Promise(async (resolve) => {
      await writersModel.insertMany({ ...req_data });
      return resolve(await writersModel.find({ ...req_data }, { __v: 0 }));
    });
  },
  existData: async (id, email, username) => {
    return new Promise(async (resolve) => {
      const existeEmail = await writersModel.countDocuments({
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
      const existeusername = await writersModel.countDocuments({
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
  countWriters: async () => {
    return new Promise(async (resolve) => {
      //   console.log("employeeId", employeeId);
      return resolve(await writersModel.countDocuments({ active: true }));
    });
  },
  findbyEmail: async (email) => {
    return new Promise(async (resolve) => {
        return resolve(
            await writersModel.findOne(
                { email },
                { __v: 0 }
            )
        )
    });
},
  findByWritersId: async (_id) => {
    return new Promise(async (resolve) => {
      return resolve(await writersModel.findOne({ _id }, { __v: 0 }));
    });
  },
  updateWritersData: async (_id, req_data) => {
    return new Promise(async (resolve) => {
      await writersModel.findByIdAndUpdate(
        { _id },
        { ...req_data },
        { new: true }
      );
      return resolve(await writersModel.findOne({ _id }, { __v: 0 }));
    });
  },
  deleteWritersData: async (_id) => {
    return new Promise(async (resolve) => {
      await writersModel.updateOne({ _id }, { active: false }, { new: true });
      return resolve(await writersModel.findOne({ _id }, { __v: 0 }));
    });
  },
};
