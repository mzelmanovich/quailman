const router = require('express').Router();
const authRoutes = require('./authentication');
const requestRoutes = require('./request');

router.use('/authentication', authRoutes);
router.use('/auth', authRoutes);
router.use('/request', requestRoutes);
module.exports = router;
