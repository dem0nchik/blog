const express = require('express');
const router = express.Router();
const User = require('../models/user');
const app = express();
const config = require('../config')
const bodyParser = require('body-parser');
const passport = require('passport')

const initializePassport = require('../passport-config')

const srchUserLog = async login => await User.find({user: login})
const srchUserId = async id => await User.find({id: id})
initializePassport(
    passport,
    login => searchUser = srchUserLog(login).then(user => user),
    id => searchUser = srchUserId(id).then(user => user)
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) 

router.post('/signin', async (req, res) => {
    const searchUser = await User.find({user: req.body.user});
    console.log( req.body.user)
    if(!searchUser.length) {
        const user = new User({
            user: req.body.user,
            password: req.body.password,
        });

        //Сохранение в базу данных
        try {  
            await user.save();
            res.json({message: 'Успешная регистрация'})
        } catch(err) {
            res.json({message: err})
        }
    } else {
        res.json({message: 'Пользователь уже существует'})
    }
})

router.post('/login', 
    passport.authenticate('local', {
        failureFlash: true
    })
)

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router;