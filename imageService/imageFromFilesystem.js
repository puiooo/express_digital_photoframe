const jimp = require('jimp');
const fs = require('fs');

let config = require('../config/config.json');
console.log("Set pictures path to: " + config.filePath);

module.exports.readRandomFromFile = async function readRandomFromFile() {
    try {
        let files = fs.readdirSync(config.filePath);

        let randomImageFilename = files[Math.floor(Math.random() * files.length)];

        let image = await jimp.read(config.filePath + "/" + randomImageFilename);

        if(image.getHeight() > image.getWidth()){
            await image.resize(jimp.AUTO, config.image.height);
        }
        else {
            await image.resize(config.image.width, jimp.AUTO);
        }
        await image.quality(config.image.quality);
        return await image.getBase64Async(jimp.AUTO);
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}
