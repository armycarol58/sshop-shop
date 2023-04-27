var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render("index.html")
})

router.get('/about', function (req, res, next) {
    res.render("about.html")
})

router.get('/shop', function (req, res, next) {
    res.render("shop.html")
})

router.get('/contact', function (req, res, next) {
    res.render("contact.html")
})



module.exports = router;

