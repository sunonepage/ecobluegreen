
$(function(){
    $(window).resize(function(){
        if($(window).width()>1210){
            $('.navbar').show();
        }else{
            $('.navbar').hide();
        }
    })
    if($(window).width()>1210){
        $('.navbar').show();
    }else{
        $('.navbar').hide();
    }

    $('.m_toggle').click(function(){
        if($(window).width()<1209){
            if($('.navbar').css('display') === 'none'){
                $('.navbar').show();
            }else{
                $('.navbar').hide();
            }
        }
    })   
})