# SlideBookmarklet
スライドシェアとかのスライド見るやつが画面幅に合わせるボタンとかないからブックマークレットでなんとかするやつ

ブックマークレットの登録はブックマークバーにドラッグ&ドロップで登録できますが、いまいち登録の仕方が分からなかったら[ググって](https://www.google.co.jp/search?q=%E3%83%96%E3%83%83%E3%82%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%90%E3%83%BC&espv=2&biw=1366&bih=643&source=lnms&sa=X&ved=0CAYQ_AUoAGoVChMI4sz8m-OsyAIVQzSUCh3deQ6U&dpr=1#q=%E3%83%96%E3%83%83%E3%82%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88%20%E7%99%BB%E9%8C%B2%E6%96%B9%E6%B3%95)みてください

どんなふうに動いているのか気になる方はブックマークレットの中身をJSファイルにしてコメントで簡単に解説しているのでそれ読んでください。

## SlideShare用

[SlideHare][1]
[1]:javascript:location.href=$('.twitter_player').attr('value'); "SlideShare"

## SpeakerDeck
[SpeakerDeck][2]
[2]:javascript:location.href=$('iframe').attr('src'); "SpeakerDeck"

# 今後の予定
時間があったら他のサイトにも対応していくのはもちろんのこと、できればChrome拡張機能としてボタンつけるやつ作れたらいいなと思ってます。
あとブックマークレットいっぱい登録するのはアレなので将来的に一つで済ませるとかやりたいです。
