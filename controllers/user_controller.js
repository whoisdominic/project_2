const express = require("express");
const users = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");


////////////////
//Authorization Routes
////////////////

const authCheck = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/user/login');
    }
};

//////////////////////////
// User Routes
//////////////////////////

//Authentication Route, Login
users.post('/login', (req, res) => {
    //See if user exists
    User.findOne({
        username: req.body.username
    }, (err, foundUser) => {
        if (err) {
            //send error if error
            res.send(err);
        } else if (!foundUser) {
            //send to sign up if user doesn't exist
            console.log('stopped at !founduser');
            res.redirect('/user/Signup');
        } else {
            //copmpare passwords
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                //send to index
                console.log('Password is correct');
                req.session.currentUser = foundUser.username;
                res.redirect('/');
            } else {
                //tell them its a wrong password
                console.log('Wrong password');
                res.redirect('/user/login');
            }
        }
    });
});


// creates a user
users.post("/", (req, res) => {
    console.log(req.body);
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    );
    console.log(req.body);

    User.create(req.body, (err, createdUser) => {
        console.log(createdUser);
        res.redirect("/");
    });
});

users.get('/myvotes', authCheck, (req, res) => {
    User.findOne({
        username: req.session.currentUser
    }, (err, foundUser) => {
        if (err) {
            res.send(err)
        } else {
            res.render('MyVotes', {
                currentUser: req.session.currentUser,
                userData: foundUser
            })
        }
    })
})

users.put('/account/edit/:id', (req, res) => {
    req.body.password = bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(10)
    );
    User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            console.log(err);
            res.redirect('/')
        } else {
            req.session.currentUser = data.username
            res.redirect('/user/account');
        }
    });
});

users.get('/account/edit', authCheck, (req, res) => {
    User.findOne({
        username: req.session.currentUser
    }, (err, foundUser) => {
        if (err) {
            res.send(err)
        } else {
            res.render('EditAccount', {
                currentUser: req.session.currentUser,
                userData: foundUser
            })
        }
    })
})



users.get('/account', authCheck, (req, res) => {
    User.findOne({
        username: req.session.currentUser
    }, (err, foundUser) => {
        if (err) {
            res.send(err)
        } else {
            res.render('Account', {
                currentUser: req.session.currentUser,
                userData: foundUser
            })
        }
    })
})


users.get('/signup', (req, res) => {
    res.render('Signup');
});

//ROUTE TO LOGIN PAGE
users.get('/login', (req, res) => {
    res.render('Login', {
        currentUser: req.session.currentUser
    });
});

// Logout
users.delete('/', (req, res) => {
    console.log('User is logged out');
    req.session.destroy(() => {
        res.redirect('/');
    });
});

module.exports = users;