var express = require('express');
var router = express.Router();

const v1Router = require('./v1');

router.use("/", v1Router);

// router.get('/', function (req, res, next) {
//     res.send('true')
// })

module.exports = router;

