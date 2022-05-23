const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./router/admin')
const userRoute = require('./router/front')
const path = require('path')
const app = express();

// TE
app.set('view engine', 'ejs');
app.set('views', 'views');

// BP
app.use(bodyParser.urlencoded({extended:true}));

// Read Static file
app.use(express.static(path.join(__dirname, 'public')))

// Router Middleware
app.use('/admin', adminRoute.router);
app.use(userRoute)
app.use((req,res,next) => {
    res.status(404).render('404', {pageTitle:'404', path:'404'})
})

app.listen(3000);