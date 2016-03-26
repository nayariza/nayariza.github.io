
(function($){
	$(function() {	
			$('#navi .switch').on('click', function() {
				$(this).next().slideToggle(300);
				$(this).toggleClass('active');
			});
	});
})(jQuery);
//起動時ページフェードイン
$(function(){
	$('#container:not(body #wrap)').css({display:'block',marginLeft:$(window).width(),opacity:'0'});
	$('#container:not(body #wrap)').animate({marginLeft:'0px',opacity:'1'},4000);
	$('body #wrap').css({display:'block',opacity:'0'});
	$('body #wrap').animate({opacity:'1'},4000);
});
//TOPへ戻る
$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
//ページ内スクロール
$(function(){
$('a[href^=#]').click(function() {
var speed = 1000;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$('body,html').animate({scrollTop:position}, speed, 'swing');
return false;
});
});
//地図
$(function(){
google.maps.event.addDomListener(window, 'load', function () {
	var latlng = new google.maps.LatLng(33.707313,130.853087);
	var myOptions = {
    zoom: 17, /*拡大比率*/
    center: latlng, /*表示枠内の中心点*/
    mapTypeId: google.maps.MapTypeId.ROADMAP,/*表示タイプの指定*/
	   scrollwheel: false,
  };
	var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
	var marker = new google.maps.Marker({
                position: latlng, /* マーカーを立てる場所の緯度・経度 */
                map: map, /*マーカーを配置する地図オブジェクト */
                title: '採銅所駅周辺地図'});
				});
				});