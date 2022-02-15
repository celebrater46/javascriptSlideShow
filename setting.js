const ext = ".png"; // 拡張子は統一（.jpg に書き換えれば JPG 画像も使えます
const dir = "img/"; // 画像フォルダ「x」と「y」が入っているディレクトリ（他の HTML に組み込む際に書き換え
const xImages = 5; // 横長画像の枚数
const yImages = 5; // 縦長画像の枚数
const interval = 5000; // 画像切替周期（ミリ秒。5000以上推奨。あまり早くするとバグるかも）
const isRandom = true; // ランダム順に表示するかどうか（true でランダム、false だと 1 から順に表示）