const { Router } = require('express');
const express = require('express');
const { route } = require('express/lib/application');
const adminData = require('./admin');
const app = express();
const router = express.Router()

router.get('/', (req, res,next) => {
    const products = adminData.products;
    res.render('users', {pageTitle:'Users', products:products, path:'/'});
});

module.exports = router;