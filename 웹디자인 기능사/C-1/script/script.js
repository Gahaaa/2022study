$('header .menu li').on('mouseenter', function(){
    $(this).find('.sub_menu').stop().slideDown();
})

$('header .menu li').on('mouseleave', function(){
    $(this).find('.sub_menu').stop().slideUp();
})

setInterval(mainSlide, 3000);
var now = 0;
var imgs = 2;
function mainSlide(){
    
    $('.main .slide ul').css({"margin-left": -750 * now + "px" });

    now = now == imgs? 0 : now +=1;
}

$('.contents .tab_section ul li').on('click', function(){
    var tab_idx= $(this).index();

    $('.contents .tab_section ul li').removeClass('on');
    $(this).addClass('on');

    $('.tab_section > div').hide();
    $('.tab_section > div').eq(tab_idx).show();
})

$('.notice ul li').eq(0).on('click', function(){
    $('.popup').fadeIn();
})

$('.popup .bg').on('click', hidePop);
$('.popup .pop_cont .close').on('click', hidePop);

function hidePop(){
    $('.popup').fadeOut();
}