const Jimp = require('jimp');

let imgRawBackground = 'images/raw/background_sun.jpg';
let imgLogo = 'images/raw/logo.png';
let imgComp = 'images/comp/firstBanner.png';

Jimp.read(imgRawBackground)
    .then(background => (
        Jimp.read(imgLogo).then(logo => ([background, logo])
    )))
    .then(images => (
        images[0].composite(images[1], 50, 50)
    ))
    .then(compImage => (
        compImage.write(imgComp)
    ))
    .catch(err => {
        console.error(err);
    });