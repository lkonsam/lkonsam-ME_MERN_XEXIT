const Resignation = require("../models/resignation.model");
const Response = require('../models/response.model');

const getAllResignations = async () => {
  return await Resignation.find();
};

const concludeResignation = async (req) => {
  const { resignationId, approved, lwd } = req.body;
  const updated = await Resignation.findByIdAndUpdate(resignationId, {
    status: approved ? 'approved' : 'rejected',
    lwd,
  }, { new: true });
  return updated;
};

const getAllResponses = async () => {
  return await Response.find();
};

module.exports = {
  getAllResignations,
  concludeResignation,
  getAllResponses
}