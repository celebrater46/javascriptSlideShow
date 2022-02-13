"use strict";

// x には横長画像、y には縦長画像を入れる
// 拡張子は固定、名前は 1 から始まる数字

const ext = ".png";
const dir = "img/";
const xImages = 5; // 横長画像の枚数
const yImages = 5; // 縦長画像の枚数
const maxWidth = 1000; // 縦長画像を表示する限界幅
const isPc = window.innerWidth > maxWidth; // true or false
const el1 = document.getElementById(isPc ? "pc1" : "phone1");
const el2 = document.getElementById(isPc ? "pc2" : "phone2");
const interval = 3000; // 画像切替周期（ミリ秒）
let intervalId;
let finished = [];
let nth = 2; // 次に表示されるのは何枚めの画像か

const getNextImage = () => {
    const max = isPc ? xImages : yImages;
    const xy = isPc ? "x/" : "y/";
    nth = nth >= max ? 1 : nth + 1;
    console.log("getNextImage is working: " + dir + "x/" + nth.toString() + ext);
    return dir + xy + nth.toString() + ext;
}

const resetOpacity = () => {
    if(finished[0] && finished[1]){
        const nextImage = el2.src;
        el1.src = nextImage;
        window.setTimeout(() => {
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
    // フェードアウトの処理（opacityを100ミリ秒ごとに0.1づつ減らす）
    let intervalZero = setInterval( () => {
        opacityZero = opacityZero - 10;
        el1.style.opacity = opacityZero / 100;
        if(el1.style.opacity <= 0){
            clearInterval(intervalZero);
            finished[0] = true;
            resetOpacity();
        }
    }, 100);

    let opacityOne = el2.style.opacity * 100;
    // フェードインの処理（opacityを100ミリ秒ごとに0.1づつ増やす）
    let intervalOne = setInterval( () => {
        opacityOne = opacityOne + 10;
        el2.style.opacity = opacityOne / 100;
        if(el2.style.opacity >= 1){
            clearInterval(intervalOne);
            finished[1] = true;
            resetOpacity();
        }
    }, 100);
}

const startSlideShow = () => {
    intervalId = window.setInterval(changeImage, interval);
}

const stopSlideShow = () => {
    clearInterval(intervalId);
}
