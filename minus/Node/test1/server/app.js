const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoute = require('./routes/blogRoutes');


// express app
const app = express();


// connect to mongodb
const dbURI = 'mongodb+srv://alitesting:rn695d9yjMFlIEzZ@nodetuts.lp05rgb.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(3000);
        console.log('mangodb connected');
    })
    .catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');


// middleware & static file
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

// blog routes
app.use('/blogs',blogRoute);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});