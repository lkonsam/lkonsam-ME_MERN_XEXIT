const Resignation = require("../models/resignation.model");

const Response = require("../models/response.model");
// const ApiError = require("../utils/ApiError");

const create = async (req) => {
  const { lwd } = req.body;
  const user = req.user;
  const exists = await Resignation
  .findOne({ employeeId: user.id });
  if (!exists) {
    return await Resignation.create({ employeeId: user.id, lwd });
  } else {
    exists.lwd = lwd;
    return await exists.save();
  }
};

const createResponses = async (req) => {
  const user = req.user;
  const { responses } = req.body;
  return await Response.create({ employeeId: user.id, responses });
};

module.exports = {
  create,
  createResponses,
};
