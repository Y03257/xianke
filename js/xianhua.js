window.onload = function(){
    /*倒计时*/
    downTime();
};
/*倒计时*/
function downTime(){
    /*需要倒计时的时间*/

    var time = 5 * 60 * 60 ;
    var timer = null;

    /*操作dom*/
    var skTime = document.querySelector('.xs_time');
    /*所有的SPAN*/
    var spans = skTime.querySelectorAll('span');

    timer = setInterval(function(){
        if(time <= 0){
            clearInterval(timer);
            return false;
        }
        time -- ;
        /*格式化*/
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = time%60;

        console.log(h);
        console.log(m);
        console.log(s);

        spans[0].innerHTML = Math.floor(h/10);
        spans[1].innerHTML = h%10;

        spans[3].innerHTML = Math.floor(m/10);
        spans[4].innerHTML = m%10;

        spans[6].innerHTML = Math.floor(s/10);
        spans[7].innerHTML = s%10;

    },1000);


}
