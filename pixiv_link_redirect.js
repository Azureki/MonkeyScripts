// ==UserScript==
// @name                Pixiv img Redirect
// @name:zh-CN          pixiv 图片重定向
// @description         convert picture link to works link
// @description:zh-CN   让 pixiv 图片链接跳转至目标网址。重定向处理将会在点击链接瞬间自动触发

// @author              Azureki
// @namespace           https://azureki.github.io
// @homepageURL         https://azureki.github.io
// @supportURL          https://github.com/Azureki/MonkeyScripts
// @license             GPL-3.0
// @icon                http://www.pixiv.net/favicon.ico

// @grant               none
// @run-at              document-start
// @include             *.inoreader.com/*

// @date                07/31/2019
// @modified            08/01/2019
// @version             1.0.0
// ==/UserScript==


function redirect(e){
    let dom = e.target,
        max_times = 2;
    while(dom && max_times--) {
        if(dom.nodeName.toUpperCase()==='A') {
            let pattern = /i.pximg.net(.+?)\/(\d+)_p\d+.+(&|$)/;
            dom.href = dom.href.replace(pattern, "www.pixiv.net/member_illust.php?mode=medium&illust_id=$2");
            return;
        }
        else
            dom = dom.parentNode;
    }
}

if(location.host==='i.pximg.net') {
    let pattern = /i.pximg.net(.+?)\/(\d+)_p\d+.+(&|$)/;
    location.href = location.href.replace(pattern, "www.pixiv.net/member_illust.php?mode=medium&illust_id=$2");
}
else
    window.addEventListener('click', redirect);
    window.addEventListener('auxclick', redirect);
