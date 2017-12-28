chrome.webRequest.onBeforeRequest.addListener(
  function(info){
    // verify working, THIS IS REALLY ANNOYING (if turned on)
    // window.alert(info.url);
    // pass to 'https://archive.lightspeedsystems.com/SubmitDomain.php?Domain='
    /*if (info.url.includes("keyword")){
      return {redirectUrl: "http://block.ednerd.net/block.html"};
    }*/
    if (info.url.includes("block.ednerd")){
      console.log("Block Request");
      return;
    }
    var xhr = createCORSRequest('GET', info.url);
    if (!xhr) {
      throw new Error('CORS not supported');
    }else{
      xhr.onload = function(){
        str = xhr.responseText;
        str = str.match('return false;">(.*)?</a>')[1];
        //finish stuff here
        window.alert(str);
      };
    	xhr.send();
    }

    return info.url;
  },
  {
    urls: [
      "<all_urls>"
    ]
  },
  ["blocking"]
);


function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  window.alert("Made Request");
  if ("withCredentials" in xhr) {
    xhr.open(method, "http://block.ednerd.net/filter.php?Domain="+url, true);
    // xhr.open(method, "https://archive.lightspeedsystems.com/SubmitDomain.php?Domain="+url, true);
  } else if (typeof XDomainRequest != "undefined") { requests.
    xhr = new XDomainRequest();
    xhr.open(method, "http://block.ednerd.net/filter.php?Domain="+url);
    //xhr.open(method, "https://archive.lightspeedsystems.com/SubmitDomain.php?Domain="+url);
  } else {
    xhr = null;
  }
  return xhr;
}
