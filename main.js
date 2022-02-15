"use strict";

// x には横長画像、y には縦長画像を入れる
// 拡張子は固定、名前は 1 から始まる数字

const maxWidth = 1000; // 縦長画像を表示する限界幅
const isPc = window.innerWidth > maxWidth; // true or false
const el1 = document.getElementById(isPc ? "pc1" : "phone1");
const el2 = document.getElementById(isPc ? "pc2" : "phone2");
let intervalId;
let intervalOne;
let intervalTwo;
let finished = [false, false];
// let reset = true; // ウィンドウがアクティブでない時、処理を実行したかどうか
let isWorking = false; // スライドショーが動作してるか否か
let nth = 2; // 次に表示されるのは何枚めの画像か

const getRandom = () => {
    const max = isPc ? xImages : yImages;
    let random = 0;
    do{
        // 前の画像と同じナンバーが出てしまったらやりなおし
        random = Math.ceil(Math.random() * max);
    } while(random === nth);
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
    const wait = interval - 1000; // 1000 はフェードアウト＆フェードインの分
    if(finished[0] && finished[1]){
        el1.src = el2.src;
        setTimeout(() => {
            el1.style.opacity = 1;
        }, Math.ceil(wait * 0.3));
        setTimeout(() => {
            el2.style.opacity = 0;
        }, Math.ceil(wait * 0.6));
        setTimeout(() => {
            el2.src = getNextImage();
            finished = [false, false];
        }, Math.ceil(wait * 0.9));
    }
}

const changeImage = () => {
    if(el1.style.opacity === "" || el1.style.opacity === 0) {
        el1.style.opacity = 1;
    }
    if(el2.style.opacity !== 0){
        el2.style.opacity = 0;
    }

    let opacityOne = el1.style.opacity * 100;
    intervalOne = setInterval(() => {
        opacityOne = opacityOne - 10;
        el1.style.opacity = opacityOne / 100;
        if(el1.style.opacity <= 0){
            clearInterval(intervalOne);
            finished[0] = true;
            resetOpacity();
        }
    }, 100);

    let opacityTwo = el2.style.opacity * 100;
    intervalTwo = setInterval(() => {
        opacityTwo = opacityTwo + 10;
        el2.style.opacity = opacityTwo / 100;
        if(el2.style.opacity >= 1){
            clearInterval(intervalTwo);
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
    if(isWorking === false){
        intervalId = setInterval(changeImage, interval);
        isWorking = true;
    }
    // ウィンドウがアクティブでない場合（他のタブを見ていたり、他のアプリがアクティブになっているなど）、Opacity を強制的にリセットする
    // setInterval(() => {
    //     if(document.hasFocus() === false){
    //         if(reset === false){
    //             clearInterval(intervalId);
    //             clearInterval(intervalOne);
    //             clearInterval(intervalTwo);
    //             el1.style.opacity = 1;
    //             el2.style.opacity = 0;
    //             console.log("clearInterval and reset opacities");
    //             reset = true;
    //         }
    //     } else {
    //         if(reset){
    //             intervalId = setInterval(changeImage, interval);
    //             reset = false;
    //         }
    //     }
    // }, 100);
}

const stopSlideShow = () => {
    clearInterval(intervalId);
    clearInterval(intervalOne);
    clearInterval(intervalTwo);
    el1.style.opacity = 1;
    el2.style.opacity = 0;
    console.log("clearInterval and reset opacities");
    // reset = true;
    isWorking = false;
}

// ウィンドウがフォーカスになったら、処理をスタート
window.addEventListener('focus', startSlideShow, false);

// ウィンドウからフォーカスが外れたら、処理を停止
window.addEventListener('blur', stopSlideShow, false);

init();