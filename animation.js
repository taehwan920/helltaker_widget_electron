'use strict';
console.log('animation.js is working!');

const fs = require('fs');

const imagePath = './images/devils'
const devils = fs.readdirSync(imagePath);
let devilIdx = devils.indexOf('Lucifer.png');

let frame_interval = 55;
let frame_pos_X = 0;
const frame_pos_Y = 0;
const mainFrame = document.querySelector('main');

let intervalEraser;

const danceDevil = () => {
    document.title = `Hello ${devils[devilIdx].slice(0, -4)}!`;
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