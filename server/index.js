require('dotenv').config({path: __dirname + '/.env'})

const app = require('./app');
const config = require('./config');
const mongoose = require('mongoose');

mongoose.connect(config.MONGO_URL, { useNewUrlParser: true })

app.listen(config.PORT);



