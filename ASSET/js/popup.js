chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var site_url = document.getElementById("site_url");
    if(typeof(localStorage.lastKeyword)!="undefined")
        document.getElementById("input_keyword").value = localStorage.lastKeyword;
    var full_url = tabs[0].url;
    site_url.value = full_url.replace(/\w*:\/\/([^\/]*)\/.*/, "$1");
    var submit_button = document.getElementById("submit");
    submit_button.onclick=function(){
        var keyword = document.getElementById("input_keyword").value;
        localStorage.lastKeyword = keyword;
        var host = site_url.value;
        var baidu = document.getElementById("use_baidu");
        if (baidu.checked) {
            window.open("http://www.baidu.com/s?wd=site:("+ host +")+" + keyword);
        }
        
        var google = document.getElementById("use_google");
        if (google.checked) {
            window.open("http://www.google.com/search?safe=off&q=site:"+ host +"+" + keyword);
        }

        var bing = document.getElementById("use_bing");
        if (bing.checked) {
            window.open("http://www.bing.com/search?q=site:" + host + "+" + keyword);
        }

        var sogou = document.getElementById("use_sogou");
        if (sogou.checked) {
            window.open("https://www.sogou.com/web?query=site:" + host + "+" + keyword);
        }
    };
});

