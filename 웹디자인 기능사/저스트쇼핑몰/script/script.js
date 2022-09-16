$("header nav").on('mouseenter', function(){

    $(this).stop().find('ul').slideDown();

})

$("header nav").on('mouseleave', function(){

    $(this).stop().find('ul').slideUp();
    
})

// 

setInterval(function(){
    $('.main_slide').animate({'margin-left':'-100%'},function(){
         $('.main_slide ul li').first().appendTo('.main_slide ul')
         $('.main_slide').css({'margin-left':'0%'})
    })
},3000)

$('.tab_section ul li a').on('click', tabCkick)

function tabCkick(){
    let thisInx= $(this).closest('li').index();
    $('.tab_section > ul > li').css('background','#b4fee3');
    $(this).closest('li').css('background','#00c29f');
    $('.tab_section ul li a').css('color','#222');
    $(this).css('color','#fff');
    $(this).closest('.tab_section').find('.tab_cont').css('display','none');
    $(this).closest('.tab_section').find('.tab_cont').eq(thisInx).css('display','block');
}

$('.tab_cont ul li').eq(0).on('click', function(){
    $('.modal').fadeIn()
})

$('.modal .cont span').on('click', function(){
    $('.modal').fadeOut()
})