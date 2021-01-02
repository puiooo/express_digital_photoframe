const express = require('express');
const router = express.Router();

const imageService = require("../imageService/imageFromFilesystem.js")

router.get('/', function (req, res, next) {
    imageService.readRandomFromFile().then(image => {
        res.render('index', {title: 'Digital Picture Frame', imgBase64: image});
    });
});

module.exports = router;
