const blogModel = require("./blog-model");
//  CRUD

//create
const create = (payload) => {
  return blogModel.create(payload);
};

//read
const get = () => {
  return blogModel.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: {
        path: "$author",
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        title: 1,
        author: "$author.username",
        content: 1,
        words: 1,
        catagories: 1,
      },
    },
  ]);
};
const getById = (_id) => {
  return blogModel.findOne({ _id });
};

//update
const updateById = (_id, payload) => {
  return blogModel.updateOne({ _id }, payload);
};

//delete
const deleteById = (_id) => {
  return blogModel.deleteOne({ _id });
};

module.exports = { create, get, getById, updateById, deleteById };
