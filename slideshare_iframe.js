// slideshare�̃����N��\�����Ă���iframe��S�Ď擾
var slideList = document.querySelectorAll('iframe[src^="https://www.slideshare.net"]');
// DOMList����z��ɕϊ�
var slides = Array.apply(this, slideList);
slides.forEach(function (slide) {
	// �ǉ�����DOM�̍쐬
    var link = document.createElement('a');
    link.text = '��ʕ��ɍ��킹�ĊJ��';
    link.href = slide.src;
    link.target = '_blank';

    // insertAdjacentElement�œ��ꂽ���ꏊ�ɓ����BafterEnd��slide�̎��̏ꏊ�B
    // link,<br>�̏��Ɏ��s���Ă���̂͒ǉ�����ꏊ��<iframe>�̎��̏ꏊ������
    slide.insertAdjacentElement('afterEnd', link);
    slide.insertAdjacentElement('afterEnd', document.createElement('br'));
});