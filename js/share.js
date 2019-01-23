 $('a').attr('href','javascript:void(0)')
 $('.NIE-share-iconBtn>li').click(function () {
    let index=$(this).index();
    let btn=$('.right').find(':submit');
    let btnText;
    if(index===0)btnText="易信登录";
    if(index===1)btnText="微信登录";
    if(index===2)btnText="微博登录";
    if(index===3)btnText="空间登录";
    btn.val(btnText);
     $(".popup").show();
     $(".layer").show().css('width',$('#out-bg').width()); 
 });
 //点击关闭按钮
 $("a.guanbi").click(function () {
     $(".layer").hide(); 
 })
     $(document).mouseup(function () {
         $(".popup").css("cursor", "default");
         $(this).unbind("mousemove");
     });

// 创建单利
function Single(){

 }
 Single.prototype.createSingle=function(){
    let el=$(``)
 }
