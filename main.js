"use strict";

// x には横長画像、y には縦長画像を入れる
// 拡張子は固定、名前は 0 から始まる数字

const ext = ".jpg";
const dir = "img/";
const maxWidth = 1000; // 縦長画像を表示する限界幅

if(window.innerWidth > maxWidth){
    const el = document.getElementById("pc");
    el.src = dir + "x/" + 1 + ext;
} else {
    const el = document.getElementById("phone");
}
