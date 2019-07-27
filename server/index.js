const express = require('express');
const server = express();
const upload = require('express-fileupload');

server.use(upload());

server.listen(3003);

server.post('/api', (req, res) => {
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