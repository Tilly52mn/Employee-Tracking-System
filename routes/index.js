const express = require('express');
const router = express.Router();

router.use(require('./departmentRoutes'));
router.use(require('./employueeRoutes'));
router.use(require('./titleRoutes'));
router.use(require('./managerRoutes'));

module.exports = router;