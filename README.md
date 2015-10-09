# SlideBookmarklet
いろんなサイトでコンテンツを画面幅に合わせるブックマークレット集

ブックマークレットの登録の仕方は下のやつを選択してドラッグ&ドロップで一応出来ます。

どんなふうに動いているのか気になる方はブックマークレットの中身をJSファイルにしてコメントで簡単に解説しているのでそれ読んでください。

## SlideShare用

SlideShareから

```javascript
javascript:location.href=$('.twitter_player').attr('value');
```

埋め込まれたコンテンツ用

```javascript
javascript:(function(){var slideList=document.querySelectorAll('iframe[src^="https://www.slideshare.net"]');var slides=Array.apply(this,slideList);slides.forEach(function(slide){var link=document.createElement('a');link.text='画面幅に合わせて開く';link.href=slide.src;link.target='_blank';slide.insertAdjacentElement('afterEnd',link);slide.insertAdjacentElement('afterEnd',document.createElement('br'));});})();
```

## SpeakerDeck

```javascript
javascript:location.href=$('iframe').attr('src');
```

## Youtube (New)

```javascript
javascript:location.href='/embed/'+yt.config_.VIDEO_ID;
```

# 今後の予定
時間があったら他のサイトにも対応していくのはもちろんのこと、できればChrome拡張機能としてボタンつけるやつ作れたらいいなと思ってます。
あとブックマークレットいっぱい登録するのはアレなので将来的に一つで済ませるとかやりたいです。
