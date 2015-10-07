// ytというオブジェクトにビデオID（URL内、?v=xxxxxxのxxxxx）が入っていたのでそれを利用した。
// 原理はhttp://youtube.com/?v=xxxxxxからhttp://youtube.com//emded/xxxxxxに移動するだけ
location.href='/embed/'+yt.config_.VIDEO_ID;
