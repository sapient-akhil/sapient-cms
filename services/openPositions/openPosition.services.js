const openPositionModel = require("./openPosition.model");

module.exports = {
  findAllOpenPosition: async () => {
    return new Promise(async (resolve) => {
      return resolve(
        await openPositionModel.aggregate([
          {
            $match: { active: true },
          },
          {
            $lookup: {
              from: "jobtypes",
              localField: "job_type",
              foreignField: "_id",
              as: "jobTypes",
            },
          },
          {
            $lookup: {
              from: "jobcategories",
              localField: "job_category",
              foreignField: "_id",
              as: "jobcategory",
            },
          },
          {
            $project: {
              _id: 1,
              job_title: 1,
              location: 1,
              date: 1,
              description: 1,
              experiences: 1,
              vacancy: 1,
              deadline: 1,
              working_hours: 1,
              working_days: 1,
              salary: 1,
              jo_types_id: { $arrayElemAt: ["$jobTypes._id", 0] },
              job_types_name: { $arrayElemAt: ["$jobTypes.name", 0] },
              job_category_id: { $arrayElemAt: ["$jobcategory._id", 0] },
              job_category_name: { $arrayElemAt: ["$jobcategory.name", 0] },
            },
          },
        ])
      );
    });
  },
  createOpenPosition: async (req_data) => {
    return new Promise(async (resolve) => {
      await openPositionModel.insertMany({ ...req_data });
      return resolve(await openPositionModel.find({ ...req_data }, { __v: 0 }));
    });
  },
  findByOpenPositionId: async (id) => {
    return new Promise(async (resolve) => {
      return resolve(
        await openPositionModel.aggregate([
          {
            $match: {
              _id: id, // Assuming you are using Mongoose
            },
          },
          {
            $lookup: {
              from: "jobtypes",
              localField: "job_type",
              foreignField: "_id",
              as: "jobTypes",
            },
          },
          {
            $lookup: {
              from: "jobcategories",
              localField: "job_category",
              foreignField: "_id",
              as: "jobcategory",
            },
          },
          {
            $project: {
              _id: 1,
              job_title: 1,
              location: 1,
              date: 1,
              description: 1,
              experiences: 1,
              vacancy: 1,
              deadline: 1,
              working_hours: 1,
              working_days: 1,
              salary: 1,
              jo_types_id: { $arrayElemAt: ["$jobTypes._id", 0] },
              job_types_name: { $arrayElemAt: ["$jobTypes.name", 0] },
              job_category_id: { $arrayElemAt: ["$jobcategory._id", 0] },
              job_category_name: { $arrayElemAt: ["$jobcategory.name", 0] },
            },
          },
        ])
      );
    });
  },
  findOpenPosition: async (id, name) => {
    return new Promise(async (resolve) => {
      return resolve(
        await openPositionModel.findOne(
          { _id: { $nin: [id] }, name },
          { __v: 0 }
        )
      );
    });
  },
  updateOpenPosition: async (_id, req_data) => {
    return new Promise(async (resolve) => {
      await openPositionModel.findByIdAndUpdate({ _id }, { ...req_data });
      return resolve(await openPositionModel.find({ _id }, { __v: 0 }));
    });
  },
  deleteOpenPosition: async (_id) => {
    return new Promise(async (resolve) => {
      await openPositionModel.updateOne(
        { _id },
        { active: false },
        { new: true }
      );
      return resolve(await openPositionModel.findOne({ _id }, { __v: 0 }));
    });
  },
};
