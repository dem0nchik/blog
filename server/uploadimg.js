
const app = express();

const upload = require('express-fileupload');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

const cookie = require('cookie');

app.use(upload());


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

    //уменьшение размера
    (async () => {
        const files = await imagemin(['imgold/*.{jpg,png,jpeg}'], {
            destination: 'imgnew',
            plugins: [
                imageminJpegtran({progressive: true}),
                imageminPngquant({
                    quality: [0.4, 0.5]
                })
            ]
        });
    })();

})

//Cookies
app.get('/q', (req, res) => {
    const cooka = cookie.parse(req.headers.cookie)
    //delete cookies
    //res.clearCookie("myFirstCook");
    if(cooka.myFirstCook)
        console.log('opa')
    else {
        console.log('nothing')
        res.cookie('myFirstCook', 'sdsa');
    }
    res.sendStatus(200);
})