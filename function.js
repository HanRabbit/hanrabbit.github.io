var vision = 12;

var searchbox = document.getElementById("secarh-box");
var bgImg = document.getElementById("bg");

var tipbox = document.getElementById("tip-box");

var updateLogText = document.getElementById("updateLogText");

document.body.style.overflow='hidden';

var isClick = 0;
var changeMode = 0;
var updateLog_num = vision;

var but_left = document.getElementById("but-left");
var but_right = document.getElementById("but-right");

var logo = document.getElementById("logo");

var bing = document.getElementById("bing");
var baidu = document.getElementById("baidu");
var google = document.getElementById("google");

var titleTipbox = document.getElementById("title-tipbox");

var isIn = 0;

var Bg1 = document.getElementById("bg1");
var Bg2 = document.getElementById("bg2");
var Bg3 = document.getElementById("bg3");

var LowMode = document.getElementById("LowMode");
var showDate = document.getElementById("showDate");

var searchBox_width;
var searchBox_clickWidth;

var LowModeIsChecked = 0;

var LowModeText = document.getElementById("LowMode_text");
var showDateText = document.getElementById("showDate_text");

var ___ = document.getElementById("---");

var CopyUl = document.getElementById("CopyUl");
var copy_1 = document.getElementById("copy-1");
var copy_2 = document.getElementById("copy-2");
var copy_3 = document.getElementById("copy-3");

var timeText = document.getElementById("time-text");
var dateText = document.getElementById("date-text");

var noReserve = document.getElementById("noReserve");
var noReserveText = document.getElementById("noReserveText");

var showDateIsChecked = 0;
var noReserveIsChecked = 1;

if(getCookie("isFirst") !== "1") {
    setCookie("isFirst", "1", "365");
    logoClick()
    titleTipbox.innerHTML = "欢迎来到 Quick HSearch";
}

searchMode = getCookie("searchMode");

updateCookieData();
updateLowMode();

showTime();

updateShowDate();
updateNoReserve();

var winX = window.innerWidth;
var winY = window.innerHeight;

if(winX <= winY) {
    timeText.style.fontSize = "50px";
    timeText.style.bottom = "-40px"
    dateText.style.fontSize = "8px";
    dateText.style.bottom = "-5px";
}
else {
    timeText.style.fontSize = "70px";
    timeText.style.bottom = "-60px"
    dateText.style.fontSize = "15px";
    dateText.style.bottom = "-10px";
}

function noReserve_Click() {
    if(noReserve.checked)
        setCookie("noReserve", "1", "365");
    else
        setCookie("noReserve", "0", "365");
    updateNoReserve();
}

function updateNoReserve() {
    // alert(getCookie("showDate"));
    if(getCookie("noReserve") === "0") {
        noReserveIsChecked = 0;
        noReserve.checked = false;
    }
    else {
        noReserveIsChecked = 1;
        noReserve.checked = true;
    }
}

function showDate_Click() {
    if(showDate.checked)
        setCookie("showDate", "1", "365");
    else
        setCookie("showDate", "0", "365");
    updateShowDate();
}

function updateShowDate() {
    // alert(getCookie("showDate"));
    if(getCookie("showDate") === "1") {
        showDateIsChecked = 1;
        showDate.checked = true;
    }
    else {
        showDateIsChecked = 0;
        showDate.checked = false;
    }
}

function showTime() {
    timeText.style.visibility = "inherit";
    timeText.style.bottom = "-60px";
    timeText.style.opacity = "1";

    dateText.style.visibility = "inherit";
    dateText.style.bottom = "-10px";
    dateText.style.opacity = "1";
}

function delTime() {
    timeText.style.visibility = "hidden";
    timeText.style.bottom = "-150px";
    timeText.style.opacity = "0";

    dateText.style.visibility = "hidden";
    dateText.style.bottom = "-130px";
    dateText.style.opacity = "0";
}

function time() {
    var a = new Date();
    var b = a.getMinutes();
    var c = a.getHours();

    if(b < 10)
        b = "0"+b;

    timeText.innerHTML = c + ":" + b;
}

setInterval(function () { time() }, 200);

function updateClear() {
    var winY = window.innerHeight;

    if(winY <= 650) {
        Bg1.style.opacity = "0";
        Bg2.style.opacity = "0";
        Bg3.style.opacity = "0";

        if(winY <= 600) {
            ___.style.opacity = "0";
            LowModeText.style.opacity = "0";
            showDateText.style.opacity = "0";
            noReserveText.style.opacity = "0";
        }
    }
    else {
        Bg1.style.opacity = "1";
        Bg2.style.opacity = "1";
        Bg3.style.opacity = "1";

        ___.style.opacity = "1";
        LowModeText.style.opacity = "1";
        showDateText.style.opacity = "1";
        noReserveText.style.opacity = "1";
    }
}

function date() {
    var a = new Date();
    var b = a.getDate();
    var c = a.getMonth() + 1;
    var d = a.getDay();
    switch(d) {
        case 1 :
            d = "星期一";
            break;
        case 2 :
            d = "星期二";
            break;
        case 3 :
            d = "星期三";
            break;
        case 4 :
            d = "星期四";
            break;
        case 5 :
            d = "星期五";
            break;
        case 6 :
            d = "星期六";
            break;
        case 0 :
            d = "星期日";
            break;
    }

    if(b < 10)
        b = "0" + b;

    if(showDateIsChecked === 0)
        dateText.innerHTML = c + "/" + b +"&nbsp &nbsp" + d;
    else
        dateText.style.bottom = "-120px";
}

setInterval(function () { date() }, 200);

function onMouse1() {
    if (searchbox.value !== ""){
        copy_1.style.background = "rgba(255, 255, 255, .6)";
    }
}

function outMouse1() {
    copy_1.style.background = "rgba(0, 0, 0, 0)";
}

function onMouse2() {
    copy_2.style.background = "rgba(255, 255, 255, .6)";
}

function outMouse2() {
    copy_2.style.background = "rgba(0, 0, 0, 0)";
}

function onMouse3() {
    if (searchbox.value !== ""){
        copy_3.style.background = "rgba(255, 255, 255, .6)";
    }
}

function outMouse3() {
    copy_3.style.background = "rgba(0, 0, 0, 0)";
}

var copyMode = 0;

function copy_() {
    searchbox.select();
    if(searchbox.value !== "")
        document.execCommand("Copy");
    // if(selectedText !== "")
    // 	document.execCommand('copy');
    copyMode = 1;
}

function copy_cut() {
    searchbox.select();
    if(searchbox.value !== "")
        document.execCommand("Copy");
    copyMode = 1;
    searchbox.value = "";
}

function paste() {
    navigator.clipboard.readText().then(a=>searchbox.value += a)
}

// alert(searchbox.clipboardData.getData('text/plain'));haha

function input_rightClick(Event) {
    var clickMode = event.button;
    if(clickMode === 2) {
        copyMode = 1;
        CopyUl.style.visibility = "inherit";
        CopyUl.style.opacity = "1";
        CopyUl.style.height = "83px";

        // alert(selectedText);
        if (searchbox.value === ""){
            copy_1.style.color = "rgba(255, 255, 255, .2)";
            copy_1.style.cursor = "default";

            copy_3.style.color = "rgba(255, 255, 255, .2)";
            copy_3.style.cursor = "default";
        }
        else {
            copy_1.style.color = "rgba(255, 255, 255, 1)";
            copy_1.style.cursor = "pointer";

            copy_3.style.color = "rgba(255, 255, 255, 1)";
            copy_3.style.cursor = "pointer";
        }

        CopyUl.style.top = event.pageY + "px";
        CopyUl.style.left = event.pageX + "px";

        if(LowModeIsChecked === 0) {
            searchbox.style.height = "55px";
            searchbox.style.width = searchBox_clickWidth;
            searchbox.style.marginTop = "130px";
            searchbox.style.backgroundColor = "rgba(0,0,0,0.90)";
            searchbox.style.color = "white";
            bgImg.style.filter = "blur(10px)";
            bgImg.style.transition = "0.3s";
            // bgImg.style.filter = "opacity(0.7)";
            bgImg.style.transform = ("scale(1.2)");
            oUl.style.width = searchBox_clickWidth;
            isClick = 1;
        }
        else {
            searchbox.style.height = "55px";
            searchbox.style.width = searchBox_clickWidth;
            searchbox.style.marginTop = "145px";
            searchbox.style.backgroundColor = "rgba(0,0,0,0.90)";
            searchbox.style.color = "white";
            // bgImg.style.filter = "blur(8px)";
            // bgImg.style.transform = ("scale(1.2)");
            oUl.style.width = searchBox_clickWidth;
            // bgImg.style.filter = "opacity(0.7)";
            isClick = 1;
        }
    }
    // alert(btnNum);
}

function LowMode_Click() {
    if(LowMode.checked)
        setCookie("LowMode", "1", "365");
    else
        setCookie("LowMode", "0", "365");
    updateLowMode()
}

function updateLowMode() {
    if(getCookie("LowMode") === "1") {
        LowModeIsChecked = 1;
        LowMode.checked = true;
    }
    else {
        LowModeIsChecked = 0;
        LowMode.checked = false;
    }
}

function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)===0) return c.substring(name.length,c.length);
    }
    return "";
}

// setCookie("bgNum", "2", "100");

var winX = window.innerWidth;
var winY = window.innerHeight;

if(winX <= winY) {
    searchBox_width = "40%";
    searchBox_clickWidth = "80%";
}
else {
    searchBox_width = "17%";
    searchBox_clickWidth = "35%";
}

function updateCookieData() {
    var CookieBgImg = getCookie("bgNum");

    if(CookieBgImg === "2")
        bgImg.src = "./img/background/BG_B.jpg";
    else if(CookieBgImg === "3")
        bgImg.src = "./img/background/BG_C.jpg";
    else
        bgImg.src = "./img/background/BG_A.jpg";
}

searchbox.style.width = searchBox_width;

function BgChange1() {
    setCookie("bgNum", "1", "365");
    updateCookieData();
}

function BgChange2() {
    setCookie("bgNum", "2", "365");
    updateCookieData();
}

function BgChange3() {
    setCookie("bgNum", "3", "365");
    updateCookieData();
}

var oUl = document.getElementById('ul')
searchbox.onkeyup = function () {
    isIn = 1;
    var value = this.value;
    var oScript = document.createElement('script');
    oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=aa'
    document.body.appendChild(oScript)
}

setInterval(function () { updateList() }, 200);

function updateList() {
    if(searchbox.value === "") {
        oUl.style.visibility = 'hidden';
        oUl.style.display = "none";
        isIn = 0;
    }
    // searchbox.focus();
}

function aa(data) {
    oUl.style.visibility = "inherit";
    oUl.style.display = "block";
    var list = data.s;
    var str = '';

    if (list.length > 0 && searchbox.value !== "") {
        list.forEach(function (ele, index) {
            str += '<li><a class="keyWord" onclick="clearSearch()" target="_blank" href ="https://www.baidu.com/s?wd=' + ele + '">' + ele + '</li>';
        })
        oUl.innerHTML = str;
    } else {
        oUl.style.visibility = 'hidden';
        oUl.style.display = "none";
        isIn = 0;
    }
}

function clearSearch() {
    searchbox.value = "";
    oUl.style.visibility = 'hidden';
}

// var searchMode = "2";
updateSearchMode();
var noeClickFlag = 0;

function bing_C() {
    searchMode = "1";
    setCookie("searchMode", "1", "365")
    updateSearchMode();
}

function baidu_C() {
    searchMode = "2";
    setCookie("searchMode", "2", "365")
    updateSearchMode();
}

function google_C() {
    searchMode = "3";
    setCookie("searchMode", "3", "365")
    updateSearchMode();
}

function updateSearchMode() {
    searchMode = getCookie("searchMode");
    if(searchMode == "1") {
        bing.style.transitionDelay = "0s";
        baidu.style.transitionDelay = "0s";
        google.style.transitionDelay = "0s";

        bing.style.backgroundColor = "rgba(40,250,58,0.76)";
        baidu.style.backgroundColor = "rgba(0,0,0,0.55)";
        google.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
    }

    else if(searchMode == "3") {
        bing.style.transitionDelay = "0s";
        baidu.style.transitionDelay = "0s";
        google.style.transitionDelay = "0s";

        bing.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
        baidu.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
        google.style.backgroundColor = "rgba(40,250,58,0.76)";
    }

    else {
        bing.style.transitionDelay = "0s";
        baidu.style.transitionDelay = "0s";
        google.style.transitionDelay = "0s";

        bing.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
        baidu.style.backgroundColor = "rgba(40,250,58,0.76)";
        google.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
    }
//			searchbox.focus();
}

function ondClick() {
    searchbox.blur();
    if(noeClickFlag == 0) {
        noeClickFlag = 1;
        onClickBox();
        updateSearchMode();
        delTime();
        updateShowDate();

        CopyUl.style.visibility = "hidden";
        CopyUl.style.opacity = "0";
        CopyUl.style.height = "20px";

        baidu.style.transitionDelay = ".2s";
        google.style.transitionDelay = ".4s";
        bing.style.visibility = "inherit";
        baidu.style.visibility = "inherit";
        google.style.visibility = "inherit";
        bing.style.opacity = "1";
        baidu.style.opacity = "1";
        google.style.opacity = "1";

        Bg1.style.transition = ".2s";
        Bg1.style.top = "86%";
        Bg1.style.opacity = "1";
        Bg1.style.visibility = "inherit";

        Bg2.style.transition = ".4s";
        Bg2.style.top = "86%";
        Bg2.style.opacity = "1";
        Bg2.style.visibility = "inherit";

        Bg3.style.transition = ".6s";
        Bg3.style.top = "86%";
        Bg3.style.opacity = "1";
        Bg3.style.visibility = "inherit";

        showDateText.style.visibility = "inherit";
        showDateText.style.opacity = "1";
        showDateText.style.transitionDelay = "0.3s";

        LowModeText.style.visibility = "inherit";
        LowModeText.style.opacity = "1";
        LowModeText.style.transitionDelay = "0.3s";

        noReserveText.style.visibility = "inherit";
        noReserveText.style.opacity = "1";
        noReserveText.style.transitionDelay = "0.3s";

        ___.style.visibility = "inherit";
        ___.style.opacity = "1";
    }

    else {
        noeClickFlag = 0;
        onBlurBox();
        showTime();

        CopyUl.style.visibility = "hidden";
        CopyUl.style.opacity = "0";
        CopyUl.style.height = "20px";

        baidu.style.transitionDelay = ".2s";
        google.style.transitionDelay = ".4s";
        bing.style.visibility = "hidden";
        baidu.style.visibility = "hidden";
        google.style.visibility = "hidden";
        bing.style.opacity = "0";
        baidu.style.opacity = "0";
        google.style.opacity = "0";

        Bg1.style.transition = ".2s";
        Bg1.style.top = "50%";
        Bg1.style.opacity = "0";
        Bg1.style.visibility = "hidden";

        Bg2.style.transition = ".4s";
        Bg2.style.top = "50%";
        Bg2.style.opacity = "0";
        Bg2.style.visibility = "hidden";

        Bg3.style.transition = ".6s";
        Bg3.style.top = "50%";
        Bg3.style.opacity = "0";
        Bg3.style.visibility = "hidden";

        LowModeText.style.transitionDelay = "0s";
        LowModeText.style.visibility = "hidden";
        LowModeText.style.opacity = "0";

        showDateText.style.transitionDelay = "0s";
        showDateText.style.visibility = "hidden";
        showDateText.style.opacity = "0";

        noReserveText.style.transitionDelay = "0s";
        noReserveText.style.visibility = "hidden";
        noReserveText.style.opacity = "0";

        ___.style.visibility = "hidden";
        ___.style.opacity = "0";

        searchbox.blur();
    }
}

function onBlurBox() {
//			alert(changeMode);
    var winX = window.innerWidth;
    var winY = window.innerHeight;

    if (noeClickFlag === 0 && isIn === 0 && copyMode === 0) {
        searchbox.value = "";

        if(winX <= winY) {
            timeText.style.fontSize = "50px";
            timeText.style.bottom = "-40px"
            dateText.style.fontSize = "8px";
            dateText.style.bottom = "-5px";
        }
        else {
            timeText.style.fontSize = "70px";
            timeText.style.bottom = "-60px"
            dateText.style.fontSize = "15px";
            dateText.style.bottom = "-10px";
        }

        CopyUl.style.visibility = "hidden";
        CopyUl.style.opacity = "0";
        CopyUl.style.height = "20px";

        oUl.style.visibility = 'hidden';
        searchbox.style.marginTop = "150px";
        searchbox.style.height = "50px";
        searchbox.style.backgroundColor = "rgba(0,0,0,0.60)";
        searchbox.style.color = "rgba(0, 0, 0, 0)";
        bgImg.style.filter = "blur(0px)";
        // bgImg.style.filter = "opacity(1)";
        bgImg.style.transform = ("scale(1.0)");

        bing.style.visibility = "hidden";
        baidu.style.visibility = "hidden";
        google.style.visibility = "hidden";
        bing.style.opacity = "0";
        baidu.style.opacity = "0";
        google.style.opacity = "0";
        isClick = 0;
        searchbox.style.width = searchBox_width;
    }
    else {
        copyMode = 0;
        CopyUl.style.visibility = "hidden";
        CopyUl.style.opacity = "0";
        CopyUl.style.height = "20px";
        searchbox.focus();
    }
    // searchbox.blur();
    // bgImg.focus();
//			changeMode = 0;
// 		searchbox.focus();
}

function onClickBox() {
    var winX = window.innerWidth;
    var winY = window.innerHeight;

    CopyUl.style.visibility = "hidden";
    CopyUl.style.opacity = "0";
    CopyUl.style.height = "20px";

    copyMode = 0;

    if(LowModeIsChecked == 0) {
        searchbox.style.height = "55px";
        searchbox.style.width = searchBox_clickWidth;
        searchbox.style.marginTop = "130px";
        searchbox.style.backgroundColor = "rgba(0,0,0,0.90)";
        searchbox.style.color = "white";
        bgImg.style.filter = "blur(10px)";
        bgImg.style.transition = "0.3s";
        // bgImg.style.filter = "opacity(0.7)";
        bgImg.style.transform = ("scale(1.2)");
        oUl.style.width = searchBox_clickWidth;
        isClick = 1;
    }
    else {
        searchbox.style.height = "55px";
        searchbox.style.width = searchBox_clickWidth;
        searchbox.style.marginTop = "130px";
        searchbox.style.backgroundColor = "rgba(0,0,0,0.90)";
        searchbox.style.color = "white";
        // bgImg.style.filter = "blur(8px)";
        // bgImg.style.transform = ("scale(1.2)");
        oUl.style.width = searchBox_clickWidth;
        // bgImg.style.filter = "opacity(0.7)";
        isClick = 1;
    }
}

function onMouseBox() {
    if (isClick == 0) {
        var winX = window.innerWidth;
        var winY = window.innerHeight;

        if(winX <= winY) {
            searchBox_width = "40%";
            searchBox_clickWidth = "80%";
            searchbox.style.width = "60%";
        }
        else {
            searchBox_width = "17%";
            searchBox_clickWidth = "35%";
            searchbox.style.width = "26%";
        }
    }
}

function onOutBox() {
    if (isClick == 0) {
        var winX = window.innerWidth;
        var winY = window.innerHeight;

        if(winX <= winY) {
            searchBox_width = "40%";
            searchBox_clickWidth = "80%";
            searchbox.style.width = "40%";
        }
        else {
            searchBox_width = "17%";
            searchBox_clickWidth = "35%";
            searchbox.style.width = "17%";
        }
    }
}

function onEnterSearch() {
    if (event.keyCode === 13) {
        if(searchMode === "1")
            window.open("https://cn.bing.com/search?q="+searchbox.value, "_blank");
        if(searchMode === "2")
            window.open("https://www.baidu.com/s?wd="+searchbox.value, "_blank");
        if(searchMode === "3")
            window.open("https://www.google.com/search?q="+searchbox.value, "_blank");
        if(noReserveIsChecked === 1)
            searchbox.value = "";
    }
}

function About() {
    updateLog_num = vision;
    changeAboutWin();
    tipbox.style.filter = "blur(0px)";
    tipbox.style.backgroundColor = "rgba(255,255,255,0.8)";
//			tipbox.style.display = "block";
    tipbox.style.visibility = "inherit";
    // titleTipbox.innerHTML = "更新日志";
    update_list();
    // updateLogText.innerHTML = "版本号：v1.47\n更新日期：2020/5/24 17:58\n\n更新描述：\n新增：可在“设置”中打开或关闭“不保留搜索内容”\n新增：可在“设置”中打开或关闭日期显示\n新增：日期的动画效果\n优化：代码性能\n优化：时间和日期的布局\n重做：“欢迎”和“关于”窗口内容\n修复：时间和日期重叠bug\n修复：“星期日”日期显示为“0”的问题";
    but_left.style.display = "inline";
    but_right.style.display = "inline";

//				updateLogText.innerHTML = "<h3>关于</h3>感谢您使用此网站<br/>此网站为Han的快捷搜索<br/>为Han本人开发及维护<br/>如有问题，请发送至<br/>“Tianzihan5357@163.com”<br/>谢谢您的配合！";
}

function changeAboutWin() {
    const winX = window.innerWidth/2-250;
    const winY = window.innerHeight/3.8;

    tipbox.style.left = winX;
    tipbox.style.top = winY;
}

//		function About_thanks() {
//			tipbox.style.filter = "blur(0px)";
//			tipbox.style.backgroundColor = "rgba(255,255,255,0.8)";
////			tipbox.style.display = "block";
//			tipbox.style.visibility = "inherit";
//		}

function AboutExit() {
    tipbox.style.filter = "blur(200px)";
    tipbox.style.backgroundColor = "rgba(0, 0, 0, 0)";
//			tipbox.style.display = "none";
    tipbox.style.visibility = "hidden";
}

function reduce() {
    if(updateLog_num > 1)
        updateLog_num --;
//			if(updateLog_num == 1) {
//				but_left.setAttribute("disabled", true);
//				but_right.setAttribute("disabled", false);
//			}
//			else{
//				but_left.setAttribute("disabled", false);
//				but_right.setAttribute("disabled", false);
//			}
    update_list();

}

function add() {
    if(updateLog_num < vision)
        updateLog_num ++;
//			if(updateLog_num == 2) {
//				but_right.setAttribute("disabled", true);
//				but_left.setAttribute("disabled", false);
//			}
//			else {
//				but_right.setAttribute("disabled", false);
//				but_left.setAttribute("disabled", false);
//			}
    update_list();
}

function update_list() {
    titleTipbox.innerHTML = "更新日志";
    const visions = new Array(vision);

    visions[1] = "版本号：v1.0\n更新日期：2020/5/5 13:21\n\n更新描述：\n新增：添加毛玻璃效果以及一些动画效果\n新增：百度搜索引擎\n新增：黑色主题\n新增：Logo及版权声明\n优化：搜索框动画Bug";
    visions[2] = "版本号：v1.1\n更新日期：2020/5/6 7:55\n\n更新描述：\n新增：一些动画效果\n新增：“关于”窗口\n新增：“历史”更新日志\n优化：动画Bug";
    visions[3] = "版本号：v1.11\n更新日期：2020/5/6 15:52\n\n更新描述：\n新增：一些图标效果\n本网站更名为“Quick HSearch”";
    visions[4] = "版本号：v1.21\n更新日期：2020/5/6 17:07\n\n更新描述：\n新增：“Google”和“Bing”两种搜索方式\n新增：设置\n进入设置：双击搜索框，可选择搜索方式\n\n\n此网站正式发布在“Github”上!!!";
    visions[5] = "版本号：v1.22\n更新日期：2020/5/7 9:09\n\n更新描述：\n优化：进入“设置”的算法\n优化：信息提示框，由“p”更改为“texarea”，控件位置重新排版\n更改：进入“设置”：双击搜索框，进入设置\n更改：退出“设置”：再次双击搜索框，退出设置";
    visions[6] = "版本号：v1.23\n更新日期：2020/5/10 21:36\n\n更新描述：\n优化：“关于”界面的关闭图标\n优化：页面加载速度\n新增：“关于”界面的关闭图标的动态效果\n新增：“关于”界面的左右箭头的动态效果\n修复：“关于”界面在PC上显示位置错误的bug\n修复：更新日志显示错误的bug";
    visions[7] = "版本号：v1.24\n更新日期：2020/5/11 16:02\n\n更新描述：\n修复：客户端字体缺失而导致显示错误的问题\n修复：搜索框在PC上显示的大小\n重做：Quick HSearch的图标，将其更改为动态图标\n新增：响应式demo，同时适应PC和Android";
    visions[8] = "版本号：v1.34\n更新日期：2020/5/12 8:59\n\n更新描述：\n优化：代码性能\n新增：关联词提示（注：退出搜索框需清除搜索框内容\n优化：html布局\n优化：关联词提示框会根据横竖屏自动更改大小\n优化：搜索框动画";
    visions[9] = "版本号：v1.44\n更新日期：2020/5/18 11:17\n\n更新描述：\n新增：2款壁纸（注：可在“设置”中切换）\n新增：Cookie，可存储用户设置（包括壁纸，搜索方式 等）\n新增：进入“设置”界面后壁纸的动态效果\n优化：搜索方式的动画，消除延迟\n优化：“关于”界面字体不统一的问题\n优化：代码逻辑";
    visions[10] = "版本号：v1.45\n更新日期：2020/5/19 8:55\n\n更新描述：\n新增：低配置模式，可在“设置”中调整\n新增：低配置模式的Cookie\n重做：“设置”界面的布局\n修复：Android无法搜索的Bug";
    visions[11] = "版本号：v1.46\n更新日期：2020/5/20 13:00\n\n更新描述：\n新增：PC端的右键“复制粘贴”窗口\n新增：初次使用的欢迎窗口\n新增：日期时间显示\n优化：PC端更新日志窗口的字体\n优化：搜索框和“复制”窗口的代码逻辑\n优化：“复制粘贴”窗口的动态效果";
    visions[12] = "版本号：v1.47\n更新日期：2020/5/24 17:58\n\n更新描述：\n新增：可在“设置”中打开或关闭“不保留搜索内容”\n新增：可在“设置”中打开或关闭日期显示\n新增：日期的动画效果\n优化：代码性能\n优化：时间和日期的布局\n重做：“欢迎”和“关于”窗口内容\n修复：时间和日期重叠bug\n修复：“星期日”日期显示为“0”的问题";

    updateLogText.innerHTML = visions[updateLog_num];
}

function logoClick() {
    About();
    titleTipbox.innerHTML = "Quick HSearch";
    updateLogText.innerHTML = "网站上线日期：2020/5/5\n\n感谢您使用此网站=￣ω￣=\n此网站为Han的Quick HSearch快捷搜索，\n由Han本人开发及维护。\n服务器由Github提供\n更新日志请点击底部的版本号\n如有问题，请发送至“Tianzihan5357@163.com”\n谢谢您的配合！\n\n（注：双击搜索框以进入“设置”）";
    but_left.style.display = "none";
    but_right.style.display = "none";
}