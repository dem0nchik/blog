const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const app = express();
const config = require('../config')

const fs = require('fs-extra')

const bodyParser = require('body-parser');
const upload = require('express-fileupload');

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');


app.use(upload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) 


// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch(err) {
        res.json({message: err})
    }
})

// SUBMIT A POST
router.post('/', async (req, res) => {
    let mainImg = undefined;
    let bodyImages = []
    let bodyTexts = []
    let bodyTitle = null;
    let bodyLength = 0;

    if(req.body.bodyTitle){
        bodyTitle = req.body.bodyTitle;
        bodyLength = bodyTitle.length
        if(Array.isArray(bodyTitle)) {
            bodyTitle = bodyTitle.map(el => {
                if(el === '.')  return ''
                else return el
            })
        }
        else {
            if(bodyTitle === '.') bodyTitle = ''
        }
    }

    //Тело поста
    for(let i = 0; i < bodyLength; i++) {
        req.files ? 
            currentfiles = req.files['file' + i] : 
            currentfiles = undefined
        let images = []

        //масив картинок с тела поста
        if(currentfiles) {
            if(Array.isArray(currentfiles)) {
                currentfiles.forEach((el, i) => {
                    const imagename = Math.random().toString(16)+'.'+el.name.split('.').pop();
                    el.mv("public/photo/"+imagename, err => {
                        if(err) {
                            console.log('ошибка');
                        }
                    })
                    images.push(config.addr + '/photo/' + imagename);  
                }) 
                bodyImages.push(images); 
            } else {
                const imagename = Math.random().toString(16)+'.'+currentfiles.name.split('.').pop();
                currentfiles.mv("public/photo/"+imagename)
                bodyImages.push([config.addr + '/photo/' + imagename]); 
            }
        } else {
            bodyImages.push([]); 
        }

        //Проверяем текст части поста
        if(req.body['text' + i]) {
           const texts = []
           const currenttext = req.body['text' + i]

           if(Array.isArray(currenttext)) {
                currenttext.forEach(el => texts.push(el))
                bodyTexts.push(texts);
           } else {
                bodyTexts.push([currenttext]); 
           }
        } else {
            bodyTexts.push([]); 
        }
    }  


    //Главная картинка
    if(req.files) {
        //Загрузка главной картинки
        if(req.files.mainImg) {
            let mainImgName = Math.random().toString(16)+'.'+req.files.mainImg.name.split('.').pop();
            req.files.mainImg.mv("public/photo/" + mainImgName);
            mainImg = config.addr + '/photo/' + mainImgName;

        }
        //Сжатие картинок
        (async () => {
            const files = await imagemin(['public/photo/*.{jpg,png,jpeg}'], {
                destination: 'public/photo',
                plugins: [
                    imageminJpegtran({progressive: true}),
                    imageminPngquant({
                        quality: [0.6, 0.7]
                    })
                ]
            });
        })();        
    }
    //тело поста
    const bodyPost = []
    for(let i = 0; i < bodyLength; i++) {
        bodyPost.push({
            title: bodyTitle[i],
            text: bodyTexts[i],
            img: bodyImages[i]
        })
    }
    //Создание новго поста
    const post = new Post({
        title: req.body.title,
        date: req.body.date,
        mainImg: mainImg,
        body: bodyPost
    });

    //Сохранение в базу данных
    try {  
        const savedPost = await post.save();
        res.json(savedPost)
    } catch(err) {
        res.json({message: err})
    }
})



//SPECIFIC POST
router.get('/:postID', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postID);
        res.json(post)
    } catch(err) {
        res.json({message: err})
    }
})

//DELETE POST
router.delete('/:postID', async (req, res) => {
    const post = await Post.findById(req.params.postID);
    let allImages = []
    allImages.push(post.mainImg)
    post.body.forEach(el => {
        el.img.forEach(el =>  allImages.push(el))
    })

    if(allImages)
        for(index in allImages) {
            if(allImages[index])
                fs.unlink('public/photo/' + allImages[index].substring(32));
        }

    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postID});
        res.json(removedPost)
    } catch(err) {
        res.json({message: err})
    }
})

//UPDATE POST
router.put('/:postID', async (req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postID}, { $set: { title: req.body.up_title} });
        res.json(updatePost)
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router;