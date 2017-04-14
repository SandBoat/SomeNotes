// Cookie
var cookieBtn = document.getElementById("Cookie_Test");
cookieBtn.onclick = function(){
	checkCookie();
}


function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}

function checkCookie() {
    username = getCookie('username')
    if (username != null && username != "") {
        alert('Welcome again ' + username + '!')
    } else {
        username = prompt('Please enter your name:', "")
        if (username != null && username != "") {
            setCookie('username', username, 365)
        }
    }
}

// var dt = new Date();   
// dt.setSeconds(dt.getSeconds() + 60);   
// document.cookie = "cookietest=1; expires=" + dt.toGMTString();   
// var cookiesEnabled = document.cookie.indexOf("cookietest=") != -1;   
// if(!cookiesEnabled) {   
//     //没有启用cookie   
//     alert("没有启用cookie ");  
// } else{  
//     //已经启用cookie   
//     alert("已经启用cookie ");  
// }  