
const express = require('express')
const passport = require('passport')
const bcrypt = require('bcrypt')
const { isLoggedIn , isNotLoggedIn } = require('./middleware')
const { User } = require('../models')


const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const { email, nick, password } = req.body
    try {
        const exUser = await User.find( { where : { email } });
        if (exUser) {
            req.flash('joinError', '이미 가입된 이메일 입니다.');
            return res.redirect('/join')
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create( {
            email,
            nick,
            password : hash
        });
        return res.redirect('/')
    } catch (err) {
        console.error(err)
        return next(err)
    }

})

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.err(authError)
            return next(authError)
        }
        if (!user) {
            req.flash('loginError', info.message);
            return res.redirect('/')
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError)
                return next(loginError)
            }
            return res.redirect('/')
        })
    }) (req, res, next);
})

router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    req.session.destroy();
    res.redirect('/')
})


router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/',
}), (req, res) => {
  res.redirect('/');
});



module.exports = router

