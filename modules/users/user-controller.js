const userModel = require("./user-model");
//  CRUD

//create
const create = (payload) => {
  return userModel.create(payload);
};

//read
const get = () => {
  return userModel.find();
};
const getById = (_id) => {
  return userModel.findOne({ _id });
};

//update
const updateById = (_id, payload) => {
  return userModel.updateOne({ _id }, payload);
};

//delete
const deleteById = (_id) => {
  return userModel.deleteOne({ _id });
};

module.exports = { create, get, getById, updateById, deleteById };
