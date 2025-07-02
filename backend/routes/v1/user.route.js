
const router = require("express").Router();
const { submitResignation, submitResponses  } = require("../../controllers/user.controller");
const { authenticate } = require('../../middlewares/auth.middleware.js');



router.post('/resign', authenticate, submitResignation);
router.post('/responses', authenticate, submitResponses);


module.exports = router;