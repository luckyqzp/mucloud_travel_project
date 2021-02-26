/*
*轮播图特效
* 日期： 2021年2月26日
* 姓名：luckyqzp
*/

(function () {
    //得到元素
    var carousel_list = document.getElementById('carousel_list');
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');

    //克隆第一张li
    var clone_li = carousel_list.firstElementChild.cloneNode(true);
    //上树
    carousel_list.appendChild(clone_li);
    //当前正在显示的图片序号，从0开始
    var idx = 0;
    //右按钮事件监听
    right_btn.onclick = function () {
        //加上过渡
        carousel_list.style.transition = 'transform .5s ease 0s';
        //idx 要加1
        idx++;
        //拉动
        carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        //判断是否是最后一张,如果是最后一张，那么就要拉动回来
        if (idx > 4) {
            setTimeout(function () {
                //去掉过渡
                carousel_list.style.transition = 'none';
                //删除transform属性
                carousel_list.style.transform = 'none';
                //全局图片序号变为0
                idx = 0;
            }, 500);
        }
    }
    // 左按钮的事件监听
    left_btn.onclick = function () {
        //左按钮很特殊，要先写if语句，而不是idx--
        if (idx == 0) {
            //瞬间拉动到最后
            carousel_list.style.transition = 'none';
            //拉到最后(瞬间移动)
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%)';
            //改变idx的值
            idx = 4;

            //小技巧，延时0毫秒非常有用,可以让刚才的瞬移发生之后，再把过渡加上。
            setTimeout(function(){
                //加上过渡
                carousel_list.style.transition = 'transform .5s ease 0s';
                //动画
                carousel_list.style.transform = 'translateX(' + -16.66 * 4 + '%)';
                //改变idx的值
                idx = 4;
            },0);
    }else{
        idx --;
        //拉到
        carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
    }
}
})();