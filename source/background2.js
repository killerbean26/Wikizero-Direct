chrome.webRequest.onBeforeRequest.addListener(
    function(temp) {
        var active_url = temp.url;
        var host = active_url.match(/(https?:\/\/|www\.?)(www\.)?([^\/\s]+)/ig)[0];
       if (host.includes("wikipedia.org")){
            host = host.replace("wikipedia.org","1wikipedia.org");
        }
        else if (host.includes("imgur.com")){
            host = host.replace("imgur.com","0imgur.com");
        }
        var new_url = document.createElement('a');
        new_url.href = active_url;
        var path = new_url.pathname;
        return {redirectUrl:host+path};
      
    },{urls: ["*://wikipedia.org/*","*://www.wikipedia.org/*","*://*.wikipedia.org/*","*://*.imgur.com/*"],
},["blocking"]);
