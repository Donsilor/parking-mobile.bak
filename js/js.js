/**
 * Created by Administrator on 2018/8/16.
 */
window.onload = function(){
        function setHeight(id){
            var box = document.getElementById(id);
            var Width = box.currentStyle? box.currentStyle.width : window.getComputedStyle(box, null).width;
            Width = parseInt(Width);
            box.style.height = Width + 'px';

        }
        setHeight('login_icon');
        setHeight('img');



    };





