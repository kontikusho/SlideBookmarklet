// CSSのクエリ検索を利用し、<meta property="og:video:url">のDOMを検索し、そのcontentプロパティにURLが書いてあるのでそこに飛ぶ
location.href=document.querySelector('meta[property="og:video:url"]').content;
