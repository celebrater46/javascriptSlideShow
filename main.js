"use strict";

const testLine = "「これは……テストでーす――」";
const div = document.getElementById("p-1");

const rotateChar = (line) => {
    let str = line;
    // str = str.replace(/「/g, "<span class='rotate'>「</span>");
    // str = str.replace(/」/g, "<span class='rotate'>」</span>");
    // str = str.replace(/ー/g, "<span class='rotate'>ー</span>");
    return str;
}

const createLines = (line) => {
    let str = "";
    for (let i = 0; i < 15; i++){
        const rotated = rotateChar(line);
        str += "<p id='line-" + i + "'>" + rotated + "</p>";
    }
    return str;
}

div.innerHTML = createLines(testLine);