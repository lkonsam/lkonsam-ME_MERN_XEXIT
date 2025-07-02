const resignationService = require("../services/resignation.service");
const catchAsync = require("../utils/catchAsync");

const submitResignation = catchAsync( async (req, res) => {
  const resignation = await resignationService.create(req);
  res.status(200).json({ data: { resignation } });
});

const submitResponses = async (req, res) => {
  await resignationService.createResponses( req );
  res.status(200).send();
};

module.exports = {
  submitResignation, 
  submitResponses
}