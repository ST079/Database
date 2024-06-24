const blogModel = require("./blog-model");
//  CRUD

//create
const create = (payload) => {
  return blogModel.create(payload);
};

//read
const get = () => {
  return blogModel.find();
};
const getById = ({ id }) => {
  return blogModel.findOne({ id });
};

//update
const updateById = ({ id }, payload) => {
  return blogModel.updateOne({ id }, payload);
};

//delete
const deleteById = ({id}) => {
  return blogModel.deleteOne({ id });
};

module.exports = { create, get, getById, updateById, deleteById };
