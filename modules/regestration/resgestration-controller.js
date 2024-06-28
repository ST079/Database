const regestrationModel = require("./regestration-model");
//create
const create = (payload) => {
  return regestrationModel.create(payload, [
    {
      $project: {
        confirmPassword: 0,
      },
    },
  ]);
};

//read
const get = () => {
  return regestrationModel.find();
};
const getById = (_id) => {
  return regestrationModel.findOne({ _id });
};

//delete
const deleteById = (_id) => {
  return regestrationModel.deleteOne({ _id });
};

module.exports = { create, get, getById, deleteById };
