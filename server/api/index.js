const router = require('express').Router();
const executeRoutes = require('./execute');
const authRoutes = require('./authentication');

router.use('/execute', executeRoutes);
router.use('/authentication', authRoutes);
router.use('/auth', authRoutes);
module.exports = router;
