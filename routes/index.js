const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* Save Data using Post Request. */
router.post('/savePost', function (req, res) {

    let err_msg = [];

    for (let i = 0, len = req.body.length; i < len; i++) {
        if (!req.body[i].imei) {
            err_msg.push({succes: false, message: 'IMEI number not provided. ' + i})
        } else if (!req.body[i].packageName) {
            err_msg.push({success: false, message: 'Application ID not provided in array. ' + i})
        } else if (!req.body[i].appName) {
            err_msg.push({success: false, message: 'Application Name not provided in array. ' + i})
        }
    }

    if (err_msg.length !== 0) {
        res.json(err_msg);
    } else {
        req.body.forEach((arr) => {
            let user = new User({
                imei: arr.imei,
                appID: arr.packageName,
                appName: arr.appName
            });

            user.save((err) => {
                if (err) {
                    res.json({success: false, message: err})
                }
            })
        });

        res.json({success: true, message: 'All data saved.'})
    }
});

/* Save Data using Get Request */
router.get('/saveGet/:imei/:packageName/:appName', function (req, res) {
    if (!req.params.imei) {
        res.json({succes: false, message: 'IMEI number not provided'})
    } else if (!req.params.packageName) {
        res.json({success: false, message: 'Application ID not provided'})
    } else if (!req.params.appName) {
        res.json({success: false, message: 'Application Name not provided.'})
    } else {
        let user = new User({
            imei: req.params.imei,
            packageName: req.params.packageName,
            appName: req.params.appName
        });

        user.save((err) => {
            if (err) {
                res.json({success: false, message: err})
            } else {
                res.json({success: 'true', message: 'Data Saved'})
            }
        })
    }
});

module.exports = router;
