/*1.头部有移上变色效果*/
var linkList = document.getElementById("linkList");
for (var i = 0; i<linkList.children.length;i++) {
    //鼠标移入
    // if ( linkList.children[i].children)
    linkList.children[i].onmouseover = function (  ) {
        if(this.children.length !=0){
            this.getElementsByTagName("a")[0].style.color = "#7f7f7f";
        }
    }
    //鼠标移出
    linkList.children[i].onmouseout = function (  ) {
        if(this.children.length !=0){
            this.getElementsByTagName("a")[0].style.color = "";
        }
    }
}

/*2.导航栏有移上变色效果*/
var navList = document.getElementById("navList");
for (var i = 0; i<navList.children.length;i++) {
    //鼠标移入
    navList.children[i].onmouseover = function (  ) {
        this.getElementsByTagName("a")[0].style.color = "#d72502";
    }
    //鼠标移出
    navList.children[i].onmouseout = function (  ) {
        this.getElementsByTagName("a")[0].style.color = "";
    }
}


/* 3.	悬浮栏有移上位移效果*/

var navLeft = document.getElementById("navLeft");
var navContent = document.getElementById("navContent");
for (var i = 0; i < navLeft.children.length;i ++){
    //鼠标移入
    navLeft.children[i].onmouseover = function (  ) {
        navContent.style.display = "block";
        navContent.innerText = this.getElementsByClassName("l")[0].innerHTML;
        moveSlow(this.getElementsByTagName("a")[0].getElementsByClassName("l")[0],"marginLeft" ,8,30);
        moveSlow(this.getElementsByTagName("a")[0].getElementsByClassName("r")[0],"marginRight" ,-8,30);
    }
    //鼠标移出
    navLeft.children[i].onmouseout = function (  ) {
        navContent.style.display = "none";
        moveSlow(this.getElementsByTagName("a")[0].getElementsByClassName("l")[0],"marginLeft" ,0,30)
        moveSlow(this.getElementsByTagName("a")[0].getElementsByClassName("r")[0],"marginRight" ,0,30)
    }
}

/* 4.	banner图都轮播效果，切换箭头，分页*/
var banner =  document.getElementById("banner");//banner
var bannerContent = document.getElementById("bannerContent");//ul
var sel = document.getElementById("sel");//页码
var control = document.getElementById("control");//左右箭头
var selLeft = document.getElementById("selLeft");//左箭头
var selRight = document.getElementById("selRight");//右箭头
var bannerTimeID = null;
var indexBanner = 0;

var clientWidth = getClient().clientWidth;
bannerContent.style.width = bannerContent.children.length*clientWidth + "px";

for ( var i = 0 ;i <bannerContent.children.length; i++){
    bannerContent.children[i].style.width = clientWidth + "px";
}

bannerTimeID = setInterval(function (  ) {
    nextPage();
},3000);

bannerContent.onmouseover = function (  ) {
    clearInterval(bannerTimeID);
}

bannerContent.onmouseout = function (  ) {
    bannerTimeID = setInterval(function (  ) {
        nextPage();
    },3000);
}


//鼠标移入banner:左右箭头箭头显示
banner.onmouseover = function (  ) {
    control.style.display = "block";
}

//鼠标移出banner:左右箭头箭头隐藏
banner.onmouseout = function (  ) {
    control.style.display = "none";
}

//上一页
selLeft.onclick = function (  ) {
    //如果当前图片第一张图片
    if(indexBanner == 0){
        //下标修改为之后一张图片
        indexBanner = bannerContent.children.length-1;
        //将位置移动到最后一张图片
        bannerContent.style.left = -indexBanner*clientWidth +"px";
    }
    indexBanner --;
    goMove(bannerContent,-indexBanner*clientWidth,8);
    for(var i= 0; i<sel.children.length;i++){
        //排他思想显示对应页码
        if(indexBanner == i){
            sel.children[i].className= "current";
        }else{
            sel.children[i].removeAttribute("class");
        }
    }
}

//下一页
selRight.onclick = function (  ) {
    nextPage();
}

function nextPage (  ) {
    //如果当前位置为最后一张图片
    if(indexBanner ==bannerContent.children.length-1){
        //下标修改为第一张图片的下标
        indexBanner = 0;
        //将位置移动到一张图片的位置
        bannerContent.style.left ="0px";
    }
    indexBanner++;
    goMove(bannerContent,-indexBanner*clientWidth,8);
    for(var i= 0; i<sel.children.length;i++){
        //排他思想显示对应页码
        if(indexBanner == i){
            sel.children[i].className= "current";
        }else{
            sel.children[i].removeAttribute("class");
        }
    }
    //当下标是最后一张图时,显示第一个页码
    if(indexBanner == bannerContent.children.length-1){
        sel.children[0].className = "current";
    }
}

for (var i = 0; i<sel.children.length++; i++){
    //添加自定义属性,存储与图片对应的下标
    sel.children[i].setAttribute("yeMa",i);
    sel.children[i].onclick = function (  ) {
        for (var j = 0; j <sel.children.length;j ++){
            indexBanner = this.getAttribute("yeMa");
            //排他思想获取显示下标
            if(sel.children[j] == this){
                sel.children[j].className = "current";
            }else{
                sel.children[j].removeAttribute("class");
            }
            //移动指定下标图片的位置
            goMove(bannerContent,-indexBanner*clientWidth,8);
        }
    }
}



/*5.右侧悬浮窗有移上效果，滑动到一定位置显示返回顶部*/
var returnTop = document.getElementById("returnTop");
//给window注册滚动事件
window.onscroll = function (  ) {
    if (getScroll().scrollTop > 300){
        returnTop.style.display = "block";
    }else {
        returnTop.style.display = "none";
    }
}

/*6.传智介绍有移上效果*/
var someMsgs = document.getElementsByClassName("some-msg");
for (var i = 0 ; i< someMsgs.length; i++){
    //鼠标移入
    someMsgs[i].onmouseover = function ( ) {
        moveSlow(this.getElementsByTagName("a")[0],"paddingTop",23,30);
    }
    //鼠标移出
    someMsgs[i].onmouseout = function ( ) {
        moveSlow(this.getElementsByTagName("a")[0],"paddingTop",28,30);
    }
}

/*7.深圳校区信息推荐有移上效果*/

var moveL = document.getElementById("moveL");
var moveR = document.getElementById("moveR");
var img = document.getElementById("img");
var imgTimeID = null;
var imgCurrentLeft = -100;

//图片向左移动
moveL.onmouseover = function (  ) {
    imgTimeID = setInterval(function (  ) {
        imgCurrentLeft -= 10;
        if(imgCurrentLeft >= -500){//未达到之情位置
            img.style.left = imgCurrentLeft + "px";
        }else{//到达或者超过目标位置
            clearInterval(imgTimeID);
            img.style.left = "-500px";
            imgCurrentLeft = -500;
        }
    },40);
}
moveL.onmouseout = function (  ) {
    clearInterval(imgTimeID);
}

//图片向右移动
moveR.onmouseover = function (  ) {
    imgTimeID = setInterval(function (  ) {
        imgCurrentLeft += 10;
        if(imgCurrentLeft <= -100){//未达到之情位置
            img.style.left = imgCurrentLeft + "px";
        }else{ //到达或者超过目标位置
            clearInterval(imgTimeID);
            img.style.left = "-100px";
            imgCurrentLeft = -100;
        }
    },40);
}
moveR.onmouseout = function (  ) {
    clearInterval(imgTimeID);
}

/*8.深圳校区就业薪资移上动画效果*/
var bigList = document.getElementById("bigList");
for (var i = 0; i<bigList.children.length-1;i++){
    //鼠标移入薪资
    bigList.children[i].onmouseover = function (  ) {
        //内容字体和边框的颜色改变
        this.getElementsByClassName("content")[0].style.color = "#d50212";
        this.getElementsByClassName("content")[0].style.borderColor = "#d50212";
        //缓慢移动到指定位置
        moveSlow(this.getElementsByClassName("look-more")[0],"top",70,30);
    }
    //鼠标移出薪资
    bigList.children[i].onmouseout = function (  ) {
        //恢复默认样式
        this.getElementsByClassName("content")[0].style.color ="";
        this.getElementsByClassName("content")[0].style.borderColor = "";
        //缓慢移动到原先位置
        moveSlow(this.getElementsByClassName("look-more")[0],"top",-80,30);
    }
}



/*9.深圳校区班级活动切换效果*/
var activityListLeft = document.getElementById("activityListLeft");//活动信息列表左
var activityListRight= document.getElementById("activityListRight");//活动信息列表右
var activityImg = document.getElementById("imgActivity");//活动图片列表
//遍历活动信息左边列表
for (var i = 0; i<activityListLeft.children.length;i++){
    //动态添加索引
    activityListLeft.children[i].index = i;
    //注册事件
    activityListLeft.children[i].onmouseover = function (  ) {
        //再次遍历列表,排他思想添加样式
        for ( var k = 0; k < activityListLeft.children.length; k++){
            //将右边列表的样式清除
            activityListRight.children[k].className = "";
            if ( this == activityListLeft.children[k]) {
                activityListLeft.children[k].className = "current";
            }else {
                activityListLeft.children [k].className = "";
            }
        }
        //遍历图片,显示与所以对应的图片
        for ( var j = 0;j<activityImg.children.length; j++){
            //排他思想
            if( j == this.index ) {
                activityImg.children[j].style.display = "block";
            }else {
                activityImg.children[j].style.display = "none";
            }
        }
    }
}

//遍历活动信息左边列表
for (var i = 0; i<activityListRight.children.length;i++){
    activityListRight.children[i].index = i + activityListRight.children.length;
    activityListRight.children[i].onmouseover = function (  ) {
        //再次遍历列表,排他思想添加样式
        for ( var k = 0; k < activityListRight.children.length; k++){
            activityListLeft.children[k].className = "";
            if ( this ==   activityListRight.children[k]) {
                activityListRight.children [k].className = "current";
            }else {
                activityListRight.children [k].className = "";
            }
        }
        for ( var j = 0; j<activityImg.children.length; j++){
            if( j == this.index ) {
                //对应下标的图片显示
                activityImg.children[j].style.display = "block";
            }else {
                //不对应下标的图片隐藏
                activityImg.children[j].style.display = "none";
            }
        }
    }

}


/*10.展开模块效果*/
var payList = document.getElementById("payList");
var controlDown = document.getElementById("controlDown");
var controlUp = document.getElementById("controlUp");

controlDown.onclick = function (  ) {
    moveSlow(payList,"height",550,30);
    controlDown.style.display = "none";
    controlUp.style.display = "block";
}

controlUp.onclick = function (  ) {
    moveSlow(payList,"height",367,30);
    controlUp.style.display = "none";
    controlDown.style.display = "block";
}

/*11.底部移上变色效果*/
var bottomLinks = document.getElementById("bottomLinks");
for (var i = 0 ;i < bottomLinks.getElementsByTagName("a").length; i++){
    bottomLinks.getElementsByTagName("a")[i].onmouseover = function (  ) {
        this.style.color = "#d50212";
    }
    bottomLinks.getElementsByTagName("a")[i].onmouseout = function (  ) {
        this.style.color = "";
    }
}



/**
 * 匀速动画
 * @param obj
 * @param target
 */
function goMove ( obj,target,time) {
    //清除定时器
    clearInterval(obj.timeID);
    //开启定时器移动
    obj.timeID=setInterval(function (  ) {
        //获取当前位置
        var current =  obj.offsetLeft;
        //判断移动方向
        var isLeft = current<target? true:false;
        //计算本次移动距离
        isLeft?current +=10:current-=10;
        //开始移动
        obj.style.left = current + "px";
        //边界检测
        if(isLeft?current>=target:current<=target) {
            //清除定时器
            clearInterval(obj.timeID);
            //复位
            obj.style.left = target + "px";
        }
    },time);
}

/**
 * 缓动动画
 * @param obj
 * @param target
 * @param attr
 */

function moveSlow ( obj,attr,target, time) {
    //清除之前的定时器
    clearInterval(obj.timeID);
    //开启定时器移动
    obj.timeID = setInterval(function (  ) {
        //获取元素当前位置
        var current = parseInt(getStyle(obj,attr));
        //计算本次移动距离
        var step = (target-current)/10;
        //将距离取整
        step = step>0?Math.ceil(step):Math.floor(step);
        //开始移动
        current += step;
        obj.style[attr] = current +"px";//注意不能用点语法获取属性值
        //终点检测
        if (current == target){
            clearInterval(obj.timeID);
        }
    },time);
}

/**
 * 功能 : 获取属性的属性值
 * @param obj   获取的元素
 * @param attr   需要获取的属性
 * @returns {*}    属性值
 */

function getStyle ( obj,attr ) {
    //能力检测
    if(window.getComputedStyle){//谷歌火狐浏览器
        var style = window.getComputedStyle(obj,null);
        //注意不能用点语法获取
        return style[attr];
    }else{ //IE8浏览器
        return obj.currentStyle[attr];
    }
}

/**
 * 获取滚动距离
 * @returns {{scrollLeft: number, scrollTop: number}}
 */
function getScroll (  ) {
    var y = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    var x = window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
    return {
        scrollLeft:x,
        scrollTop:y
    };
}

/**
 * 获取网页可视区域的大小
 * @returns {{clientWidth: number, clientHeight: number}}
 */
function getClient (  ) {
    var x = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0 ;
    var y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0 ;
    return {
        clientWidth:x,
        clientHeight:y
    }
}