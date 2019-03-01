chrome.webRequest.onBeforeRequest.addListener(
    function(temp) {
        var active_url = temp.url;
        var host = active_url.match(/(https?:\/\/|www\.?)(www\.)?([^\/\s]+)/ig)[0];
        host = host.replace("wikipedia.org","0wikipedia.org");
        var new_url = document.createElement('a');
        new_url.href = active_url;
        var path = new_url.pathname;
        return {redirectUrl:host+path};
    },{urls: ["*://wikipedia.org/*","*://www.wikipedia.org/*","*://*.wikipedia.org/*",],
},["blocking"]);
