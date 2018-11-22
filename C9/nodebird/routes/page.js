
const express = require('express')

const router = express.Router();

router.get('/profile', (req, res) => {
    res.render('profile', {title : "내 정보 - nodebird", user: null})
    // res.send('hello world')
})

router.get('/join', (req ,res) => {
    // res.send('this is join')
    res.render('join', {
        title: '회원가입 - Nodebird',
        user: null,
        joinError : req.flash('joinError')
    })
})

router.get('/', (req,res,next)=> {
    // res.send('this is index!')
    res.render('main', {
        title: 'NodeBird',
        twits : [],
        user: null,
        loginError : req.flash('loginError')
    })
})

module.exports = router