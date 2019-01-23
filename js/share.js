 $('a').attr('href','javascript:void(0)')
 $('.NIE-share-iconBtn>li').click(function () {
     console.log(1)
     $(".popup").show();
     $(".layer").show().css('width',$('#out-bg').width()); //查找ID为popup的DIV show()显示#gray
 });
 //点击关闭按钮
 $("a.guanbi").click(function () {
     $(".layer").hide(); //查找ID为popup的DIV hide()隐藏
 })
     $(document).mouseup(function () {
         $(".popup").css("cursor", "default");
         $(this).unbind("mousemove");
     });
 