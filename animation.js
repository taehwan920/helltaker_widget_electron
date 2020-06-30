'use strict';
console.log('animation.js is working!');

const fs = require('fs');

const imagePath = './resources/app/images/devils'
const devils = fs.readdirSync(imagePath);
let devilIdx = devils.indexOf('Lucifer.png');
const devilName = `${devils[devilIdx].slice(0, -4)}`;

const translateName = (name) => {
    if (name === 'Azazel') { return '아자젤' }
    if (name === 'Cerberus') { return '케르베로스' }
    if (name === 'Judgement') { return '저지먼트' }
    if (name === 'Justice') { return '저스티스' }
    if (name === 'Lucifer') { return '루시퍼' }
    if (name === 'Malina') { return '말리나' }
    if (name === 'Modeus') { return '모데우스' }
    if (name === 'Pandemonica') { return '판데모니카' }
    if (name === 'Zdrada') { return '즈드라다' }
};
const KoreanName = translateName(devilName);

let frame_interval = 55;
let frame_pos_X = 0;
const frame_pos_Y = 0;
const mainFrame = document.querySelector('main');

let intervalEraser;

const danceDevil = () => {
    document.title = `안녕 ${KoreanName}!`;
    mainFrame.style.backgroundImage = `url('${imagePath}/${devils[devilIdx]}')`;

    clearInterval(intervalEraser);

    intervalEraser = setInterval(() => {
        mainFrame.style.backgroundPosition = `${frame_pos_X}px ${frame_pos_Y}px`;
        frame_pos_X = frame_pos_X < 1800
            ? frame_pos_X + 150
            : 150
    }, frame_interval)
};

danceDevil();

window.addEventListener('keydown', (e) => {
    const leftArrowKeyCode = 37;
    const rightArrowKeyCode = 39;

    if (e.keyCode === leftArrowKeyCode) {
        devilIdx = devilIdx - 1 >= 0
            ? devilIdx - 1
            : devils.length - 1
        danceDevil();
    }

    if (e.keyCode === rightArrowKeyCode) {
        devilIdx = devilIdx + 1 < devils.length
            ? devilIdx + 1
            : 0
        danceDevil();
    }

});

