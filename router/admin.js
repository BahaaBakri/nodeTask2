const { Router } = require('express');
const express = require('express');
const { route } = require('express/lib/application');
const app = express();
const router = express.Router()
const products = [];

router.get('/addUser', (req, res,next) => {
    res.render('add-user', {pageTitle:'Add New User', path:'/add'});
});
router.post('/addUser', (req, res,next) => {
    products.push({name: req.body.title})
    res.redirect('/');
});

module.exports.router = router;
module.exports.products = products;