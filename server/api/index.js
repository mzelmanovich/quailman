const router = require('express').Router();
const executeRoutes = require('./execute');

router.use('/execute', executeRoutes);

module.exports = router;
