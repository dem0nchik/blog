const express = require('express');
const app = express();
//const cookie = require('cookie');
const bodyParser = require('body-parser');
const cors = require('cors');
const upload = require('express-fileupload');
const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')


app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(upload());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))  


const postRoute = require('./routes/post');
const userRoute = require('./routes/user');

app.use('/api/posts', postRoute);
app.use('/api/user', userRoute);

module.exports = app;