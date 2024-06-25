const roleModel = require("./role-model");
//  CRUD

//create
const create = (payload) => {
  return roleModel.create(payload);
};

//read
const get = () => {
  return roleModel.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "username",
        foreignField: "_id",
        as: "username",
      },
    },
    {
      $unwind: {
        path: "$username",
        preserveNullAndEmptyArrays: false,
      },
    },
    {
      $project: {
        username: "$username.username",
        role: 1,
      },
    },
  ]);
};
const getById = (_id) => {
  return roleModel.findOne({ _id });
};

//update
const updateById = (_id, payload) => {
  return roleModel.updateOne({ _id }, payload);
};

//delete
const deleteById = (_id) => {
  return roleModel.deleteOne({ _id });
};

module.exports = { create, get, getById, updateById, deleteById };
