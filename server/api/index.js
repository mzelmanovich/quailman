const router = require('express').Router();
const executeRoutes = require('./execute');
const authRoutes = require('./authentication');
const requestRoutes = require('./request');

router.use('/execute', executeRoutes);
router.use('/authentication', authRoutes);
router.use('/auth', authRoutes);
router.use('/request', requestRoutes);
module.exports = router;
