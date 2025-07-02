const authRoutes = require("./auth.route");
const userRoutes = require("./user.route");
const adminRoutes = require("./admin.route");
const router = require("express").Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/admin', adminRoutes);

module.exports = router;