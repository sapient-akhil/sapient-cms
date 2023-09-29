const portFolioModel = require("./portFolio.model");

module.exports = {
  findAllPortFolio: async () => {
    return new Promise(async (resolve) => {
      return resolve(
        await portFolioModel.aggregate([
          {
            $match: { active: true },
          },
          {
            $lookup: {
              from: "portfoliocategories",
              localField: "portfolio_category",
              foreignField: "_id",
              as: "portfolio_category",
            },
          },
          {
            $addFields: {
              portfolio_category: {
                $filter: {
                  input: "$portfolio_category",
                  as: "category",
                  cond: { $eq: ["$$category.active", true] }, // Filter active portfolio categories
                },
              },
            },
          },
          {
            $lookup: {
              from: "clients",
              localField: "client",
              foreignField: "_id",
              as: "clients",
            },
          },
          {
            $addFields: {
              clients: {
                $filter: {
                  input: "$clients",
                  as: "client",
                  cond: { $eq: ["$$client.active", true] }, // Filter active clients
                },
              },
            },
          },
          {
            $project: {
              _id: 1,
              name: 1,
              cover_image1: 1,
              title: 1,
              description: 1,
              cover_image2: 1,
              technology_title: 1,
              technology_description: 1,
              tech_image1: 1,
              tech_desc1: 1,
              tech_image2: 1,
              tech_desc2: 1,
              footer_image1: 1,
              footer_image2: 1,
              footer_description: 1,
              portfolioCategoryId: {
                $arrayElemAt: ["$portfolio_category._id", 0],
              },
              portfolioCategoryName: {
                $arrayElemAt: ["$portfolio_category.name", 0],
              },
              clientsId: { $arrayElemAt: ["$clients._id", 0] },
              clientsName: { $arrayElemAt: ["$clients.name", 0] },
            },
          },
        ])
      );
    });
  },
  createPortFolio: async (req_data) => {
    return new Promise(async (resolve) => {
      await portFolioModel.insertMany({ ...req_data });
      return resolve(await portFolioModel.find({ ...req_data }, { __v: 0 }));
    });
  },
  findByPortFolioId: async (id) => {
    return new Promise(async (resolve) => {
      return resolve(
        await portFolioModel.aggregate([
          {
            $match: {
              _id: id, // Assuming you are using Mongoose
            },
          },
          {
            $lookup: {
              from: "portfoliocategories",
              localField: "portfolio_category",
              foreignField: "_id",
              as: "portfolio_category",
            },
          },
          {
            $addFields: {
              portfolio_category: {
                $filter: {
                  input: "$portfolio_category",
                  as: "category",
                  cond: { $eq: ["$$category.active", true] }, // Filter active portfolio categories
                },
              },
            },
          },
          {
            $lookup: {
              from: "clients",
              localField: "client",
              foreignField: "_id",
              as: "clients",
            },
          },
          {
            $addFields: {
              clients: {
                $filter: {
                  input: "$clients",
                  as: "client",
                  cond: { $eq: ["$$client.active", true] }, // Filter active clients
                },
              },
            },
          },
          {
            $project: {
              _id: 1,
              name: 1,
              cover_image1: 1,
              title: 1,
              description: 1,
              cover_image2: 1,
              technology_title: 1,
              technology_description: 1,
              tech_image1: 1,
              tech_desc1: 1,
              tech_image2: 1,
              tech_desc2: 1,
              footer_image1: 1,
              footer_image2: 1,
              footer_description: 1,
              portfolioCategoryId: {
                $arrayElemAt: ["$portfolio_category._id", 0],
              },
              portfolioCategoryName: {
                $arrayElemAt: ["$portfolio_category.name", 0],
              },
              clientsId: { $arrayElemAt: ["$clients._id", 0] },
              clientsName: { $arrayElemAt: ["$clients.name", 0] },
            },
          },
        ])
      );
    });
  },
  updatePortFolio: async (_id, req_data) => {
    return new Promise(async (resolve) => {
      await portFolioModel.findByIdAndUpdate({ _id }, { ...req_data });
      return resolve(await portFolioModel.find({ _id }, { __v: 0 }));
    });
  },
  deletePortFolio: async (_id) => {
    return new Promise(async (resolve) => {
      await portFolioModel.updateOne({ _id }, { active: false }, { new: true });
      return resolve(await portFolioModel.findOne({ _id }, { __v: 0 }));
    });
  },
};
