// slideshareのリンクを表示しているiframeを全て取得
var slideList = document.querySelectorAll('iframe[src^="https://www.slideshare.net"]');
// DOMListから配列に変換
var slides = Array.apply(this, slideList);
slides.forEach(function (slide) {
	// 追加するDOMの作成
    var link = document.createElement('a');
    link.text = '画面幅に合わせて開く';
    link.href = slide.src;
    link.target = '_blank';

    // insertAdjacentElementで入れたい場所に入れる。afterEndはslideの次の場所。
    // link,<br>の順に実行しているのは追加する場所が<iframe>の次の場所だから
    slide.insertAdjacentElement('afterEnd', link);
    slide.insertAdjacentElement('afterEnd', document.createElement('br'));
});