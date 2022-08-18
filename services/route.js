const express = require('express');
const router = express.Router();
const verify = require('./verify/verify');

router.get('/show/', verify.showCertificate);
router.get('/verify/:sheetID/:certificateID', verify.verifyCerticicate);

module.exports = router;
