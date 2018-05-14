$(function(){
    var timer = setTimeout(function(){
        $(".wrapper").removeClass("init");
    },200)
    //绑定点击事件
    $('.item').click(function(e){
        var _this = this;
        $(_this).addClass('active').parent().addClass('item-wrapper');
    })
    $('.close').click(function(e){
        e.stopPropagation();
        $('.item').removeClass('active').parent().removeClass('item-wrapper');
    })

})
