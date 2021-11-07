const express = require('express');
const router = express.Router();

router.use(require('./department'));
// router.use('/',require('./employueeRoutes'));
// router.use('/',require('./titleRoutes'));
// router.use('/',require('./managerRoutes'));

module.exports = router;