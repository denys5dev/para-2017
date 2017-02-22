var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('./../models/User');

router.post('/', function (req, res, next) {
    var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(200).json({
            message: 'User saved',
            data: result
        });
    });
});

router.post('/login', function (req, res, err) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: { message: 'Invalid login credentials' }
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: { message: 'Invalid login credentials' }
            });
        }
        var token = jwt.sign({ user: user }, 'secret', { expiresIn: 7200 });
        res.status(200).json({
            message: 'Successfully login',
            token: token,
            userId: user._id,
            role: user.role,
            userName: user.name
        });
    });
});

module.exports = router;