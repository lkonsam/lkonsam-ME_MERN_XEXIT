const adminService = require("../services/admin.service");
const catchAsync = require("../utils/catchAsync");

const allResignations = catchAsync( async (req, res) => {
  const data = await adminService.getAllResignations();
  res.status(200).send({ data });
  
});

const updateResignations = catchAsync( async  (req, res) => {
  await adminService.concludeResignation(req);
  res.status(200).send();
});

const allResponses = catchAsync( async  (req, res) => {
  const data = await adminService.getAllResponses();
  res.status(200).send({ data });
});

module.exports = {
  allResignations,
  updateResignations,
  allResponses
}