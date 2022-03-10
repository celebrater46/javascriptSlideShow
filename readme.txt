JSSS (JavaScript Slide Show) についてあれこれ

##############################################
利用規約とか
##############################################

当プログラムは富士見永人が個人のHP公開向けに開発したものであり、極めてシンプルなプログラムです。

MITライセンスでの配布となります。
著作権表示とライセンス表示をしていただければ改変、再配布してくださって構いません。
当プログラムを使用して発生した如何なる問題にも作者は責任を負いません。
詳しくはMITライセンスでググってください。
　
本プログラムの利用を開始した時点で規約に同意したとみなされます。
　
バグなどの不具合報告があれば可能な範囲で対応する予定ですが、多忙につき保障はできません。

サンプル画像の著作権は放棄してません。
保存、鑑賞は自由ですが、無断転載とかはしないでください。


##############################################
使い方
##############################################

レスポンシブデザイン対応。PC だと横長画像が、スマホだと縦長画像が表示されます。
拡張子は固定です。デフォルトでは png に設定サれていますが、main.js の上部にある const ext を書き換えることで jpg なども使えます。
横長画像は x フォルダ、縦長画像は y に放り込んでください。
その際、名前は 1 から始まる番号にしてください（例：1.png, 2.png ...）。

setting.js の const xImages と const yImages にそれぞれのフォルダに入れた画像の枚数を入力してください。
テスト用のボタンが組み込まれていますが、要らなければ適当に取っ払ってスクリプトを適当に書き換えてください。
setting.js の const isRandom を false にすると、画像が 1 から順番に表示されるようになります。true だとランダムになります。

ご自身で用意した HTML や PHP に組み込む場合、JSSS の index.html の中にある、
<link rel="stylesheet" href="jsss.css" type="text/css">
<div class="jsss box"> と中の画像、
<script type="text/javascript" src="setting.js"></script>
<script type="text/javascript" src="main.js"></script>
を移植する必要があります（各ファイルへのリンクはディレクトリ構成に応じて書き換えます）。

また、ページを開いたら自動的にスライドショーを開始するには、
<script type="text/javascript" src="main.js"></script> よりも下に、
<script>startSlideShow()</script> という開始宣言を追加する必要があります。



############################################################################################
############################################################################################
About JSSS (JavaScript Slide Show)

##############################################
Terms of service
##############################################

This "JSSS (JavaScript Slide Show)" is the App that I "Enin Fujimi" developed for exhibition my pictures.

JSSS is MIT license.
If specify a copyright, you can edit JSSS and give it out on the Web.
I never take responsibility even if JSSS leads any troubles.

I regard you accept this agreement as you start to use JSSS.

If you find any bug, tell me it. I will fix the bugs, but I don't know when it resolves.

JSSS is very simple and being developed quickly.


Copyright (C) Enin Fujimi All Rights Reserved.