const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.post('/save', function (req, res) {
    if (!req.body.imei) {
        res.json({succes: false, message: 'IMEI number not provided'})
    } else if (!req.body.appID) {
        res.json({success: false, message: 'Application ID not provided'})
    } else if (!req.body.appName) {
        res.json({success: false, message: 'Application Name not provided.'})
    } else {
        let user = new User({
            imei: req.body.imei,
            appID: req.body.appID,
            appName: req.body.appName
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
