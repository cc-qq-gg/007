let index = 1,
index2 =0,
timer = null,
timer2=null,
nav1a = $('.nav').eq(0).find('a');
nav2a = $('.nav').eq(1).find('a');
let len = nav1a.length,
len2 = nav2a.length,
as = $('.nav a');
//第一个轮播图
nav1a.on('mouseenter', function () {
    clearInterval(timer)
    index = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    $('#art-2').find('section').eq(index).addClass('active').siblings().removeClass('active')
})

nav1a.on('mouseleave', function () {
    autoplay()
})
autoplay()
autoplay2()
function autoplay() {
    timer = setInterval(() => {
        // play(nav1a,index,len)
        if (index >= len) index = 0;
        nav1a.eq(index).addClass('active').siblings().removeClass('active')
        $('#art-2').find('section').eq(index).addClass('active').siblings().removeClass('active')
        index++;
    }, 1500)
}

// 第二个轮播图
function autoplay2() {
    timer2 = setInterval(() => {
        if (index2 >= len2) index2 = 0;
        nav2a.eq(index2).addClass('active').siblings().removeClass('active')
        $('#art-3').find('section').eq(index2).addClass('active').siblings().removeClass('active')
        index2++;
        // console.log(index2);
    }, 2500)
}
nav2a.on('mouseenter', function () {
    clearInterval(timer2);
    index2 = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $('#art-3').find('section').eq(index2).addClass('active').siblings().removeClass('active');
})
nav2a.on('mouseout', function () {
    autoplay2();
})

$('.btn-audio').click(function(){
    $(this).toggleClass('off');
    
})
// 设置a标签默认行为
$('a').each(function(index,val){
    let item=$(val);
    if(item.attr('href')&&item.attr('href').indexOf('//')!==-1){item.attr('href','javascript:;')}
})
$('div').each(function(index,val){
    $(val).prop('data-mp4','');
})