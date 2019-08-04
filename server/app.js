const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookie = require('cookie');

const upload = require('express-fileupload');

app.use(upload());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))  


const postRoute = require('./routes/post');

app.post('/api', (req, res) => {
    
    //загрузка в папку
    if(req.files) {
        const image = req.files.image;
        const imagename = image.name;
        image.mv("public/photo/"+imagename, err => {
            if(err) {
                console.log(err);
                res.send("error occured");
            } else {
                res.send("done");
            }
        })
    }
})
app.use('/api/posts', postRoute);

app.get('/api/', (req, res) => {
    res.sendStatus(200);
})

module.exports = app;