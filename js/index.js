/**
 * Created by Administrator on 2017/2/14.
 */
$(function(){

    var index = 0,timer=null;
    shows(index);
    $('section').eq(0).show().siblings('section').hide();

    //1监听GPS点击事件
    $('.gps li').click(function(){
        //1.1获取点击索引值
        index = $(this).index();
        //1.2切换导航显示及背景
        $(this).addClass('cur').siblings().removeClass('cur');
        $('section').eq(index).show().siblings('section').hide();
        //1.3导入显示隐藏方法
        shows(index);
        //1.4清除空降类
        setTimeout(function(){
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },10)
    });
    //2监听屏幕滚动事件
    $(window).mousewheel(function(event,d){
        //2.1节流限制
        clearTimeout(timer);
        timer = setTimeout(function(){
            //2.2获取滚动索引值
            index -= d;
            if(index>$('.gps li').length-1){
                index = 0;
            }else if(index < 0){
                index = $('.gps li').length-1;
            }
            //2.3切换显示


            $('.gps li').eq(index).addClass('cur').siblings().removeClass('cur');
            $('section').eq(index).show().siblings('section').hide();
            //2.4导入显示隐藏方法
            shows(index);
            //2.5清除空降类
            setTimeout(function(){
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            },10)
        },600);

    });

    //3logo和scroll显示隐藏方法

    function shows(num){
        if(num == 0){
            $('.hd-logo').hide();
            $('.scroll').show();
        }else{
            $('.hd-logo').show();
            $('.scroll').hide();
        }
    }


});