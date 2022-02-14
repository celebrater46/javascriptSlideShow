"use strict";

// x には横長画像、y には縦長画像を入れる
// 拡張子は固定、名前は 1 から始まる数字

const maxWidth = 1000; // 縦長画像を表示する限界幅
const isPc = window.innerWidth > maxWidth; // true or false
const el1 = document.getElementById(isPc ? "pc1" : "phone1");
const el2 = document.getElementById(isPc ? "pc2" : "phone2");
let intervalId;
let finished = [false, false];
let nth = 2; // 次に表示されるのは何枚めの画像か

const getRandom = () => {
    const max = isPc ? xImages : yImages;
    let random = 0;
    do{
        // 前の画像と同じナンバーが出てしまったらやりなおし
        random = Math.ceil(Math.random() * max);
    } while(random === nth);
    console.log("random: " + random);
    return random;
}

const getNextImage = () => {
    const max = isPc ? xImages : yImages;
    const xy = isPc ? "x/" : "y/";
    if(isRandom){
        nth = getRandom();
    } else {
        nth = nth >= max ? 1 : nth + 1;
    }
    return dir + xy + nth.toString() + ext;
}

const resetOpacity = () => {
    if(finished[0] && finished[1]){
        el1.src = el2.src;
        setTimeout(() => {
            el1.style.opacity = 1;
            el2.style.opacity = 0;
            el2.src = getNextImage();
        }, 1000);
        finished = [false, false];
    }
}

const changeImage = () => {
    if(el1.style.opacity === "" || el1.style.opacity === 0) {
        el1.style.opacity = 1;
    }
    if(el2.style.opacity !== 0){
        el2.style.opacity = 0;
    }

    let opacityZero = el1.style.opacity * 100;
    let intervalZero = setInterval(() => {
        opacityZero = opacityZero - 10;
        el1.style.opacity = opacityZero / 100;
        if(el1.style.opacity <= 0){
            clearInterval(intervalZero);
            finished[0] = true;
            resetOpacity();
        }
    }, 100);

    let opacityOne = el2.style.opacity * 100;
    let intervalOne = setInterval(() => {
        opacityOne = opacityOne + 10;
        el2.style.opacity = opacityOne / 100;
        if(el2.style.opacity >= 1){
            clearInterval(intervalOne);
            finished[1] = true;
            resetOpacity();
        }
    }, 100);
}

const init = () => {
    const xy = isPc ? "x/" : "y/";
    let first = 1;
    if(isRandom){
        nth = getRandom();
        first = getRandom();
    }
    el1.src = dir + xy + first.toString() + ext;
    el2.src = dir + xy + nth.toString() + ext;
}

const startSlideShow = () => {
    intervalId = setInterval(changeImage, interval);
}

const stopSlideShow = () => {
    clearInterval(intervalId);
}

init();