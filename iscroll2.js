window.onload = function(){
    var myScroll = new IScroll('.activity_name',{
    scrollbars: false,
    scrollX: true,
    scrollY: false,
    snap: 'p>img'
    });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    var myScroll2 = new IScroll('.campaign_img',{
    scrollbars: false,
    scrollX: true,
    scrollY: false,
    snap: '.icon>img'
    });

    var myScroll3 = new IScroll('.ideology',{
        scrollbars: false,
        scrollX: true,
        scrollY: false,
        snap: 'p>span'
        });

}

