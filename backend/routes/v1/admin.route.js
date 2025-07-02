const router = require("express").Router();
const {
  allResignations,
  updateResignations,
  allResponses,
} = require("../../controllers/admin.controller");
const { authenticateAdmin } = require("../../middlewares/auth.middleware.js");

router.get("/resignations", authenticateAdmin, allResignations);
router.put("/conclude_resignation", authenticateAdmin, updateResignations);
router.get("/exit_responses", authenticateAdmin, allResponses);

module.exports = router;
