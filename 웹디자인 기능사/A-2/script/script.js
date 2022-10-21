$('header .main_menu li').on('mouseenter', function(){
    $('header .main_menu li ul').stop().slideDown();
})

$('header .main_menu li').on('mouseleave', function(){
    $('header .main_menu li ul').stop().slideUp();
})

// 메인 이미지 슬라이드
var now = 0;
var imgs = 2;

setInterval(function(){
    $(".main ul").css('margin-left',-100 * (now+1) + '%' );

    if(now ==2 ){
        now = 0;
        $(".main ul").css('margin-left', 0);

    }else{
        now += 1;
    }
}, 3000);

//팝업
$('.contents .notice ul li').eq(0).on('click', function(){
    $('.popup').fadeIn();
})

$('.popup .cont a').on('click', function(){
    $('.popup').fadeOut();
})