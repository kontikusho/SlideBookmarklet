# SlideBookmarklet
いろんなサイトでコンテンツを画面幅に合わせるブックマークレット集

ブックマークレットの登録の仕方は下のやつを選択してドラッグ&ドロップで一応出来ます。

どんなふうに動いているのか気になる方はブックマークレットの中身をJSファイルにしてコメントで簡単に解説しているのでそれ読んでください。

## SlideShare用

```javascript
javascript:location.href=$('.twitter_player').attr('value');
```

## SpeakerDeck

```javascript
javascript:location.href=$('iframe').attr('src');
```

## Youtube (New)

```javascript
javascript:location.href=document.querySelector('meta[property="og:video:url"]').content;
```

# 今後の予定
時間があったら他のサイトにも対応していくのはもちろんのこと、できればChrome拡張機能としてボタンつけるやつ作れたらいいなと思ってます。
あとブックマークレットいっぱい登録するのはアレなので将来的に一つで済ませるとかやりたいです。
