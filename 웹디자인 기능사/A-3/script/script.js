//헤더
$('header .main_menu li').on('mouseover', function(){
    $(this).find('.sub_menu').stop().slideDown();
})

$('header .main_menu li').on('mouseleave', function(){
    $(this).find('.sub_menu').stop().slideUp();
})

// 메인
setInterval(mainSlide, 3000);

var img = 2;
var now = 0;

function mainSlide(){
    $('.main ul li').eq(now).fadeIn();
    $('.main ul li').eq(now-1).fadeOut();

    now = now == img ? 0 : now += 1;

}

//컨텐츠
$('.contents .tab_section > ul > li').on('click', function(){
    var tab_idx = $(this).index();

    $('.contents .tab_section ul li').removeClass();
    $(this).addClass('on');

    $('.tab_section > div').hide();
    $('.tab_section > div').eq(tab_idx).show();
})

// 팝업
$('.tab_section .notice ul li').eq(0).on('click', function(){
    $('.modal').fadeIn();
})

$('.modal .close').on('click', function(){
    $(this).closest('.modal').fadeOut();
})
