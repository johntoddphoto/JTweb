var swfobject=function(){var UNDEF="undefined",OBJECT="object",SHOCKWAVE_FLASH="Shockwave Flash",SHOCKWAVE_FLASH_AX="ShockwaveFlash.ShockwaveFlash",FLASH_MIME_TYPE="application/x-shockwave-flash",EXPRESS_INSTALL_ID="SWFObjectExprInst",win=window,doc=document,nav=navigator,domLoadFnArr=[],regObjArr=[],timer=null,storedAltContent=null,storedAltContentId=null,isDomLoaded=false,isExpressInstallActive=false;var ua=function(){var w3cdom=typeof doc.getElementById!=UNDEF&&typeof doc.getElementsByTagName!=UNDEF&&typeof doc.createElement!=UNDEF&&typeof doc.appendChild!=UNDEF&&typeof doc.replaceChild!=UNDEF&&typeof doc.removeChild!=UNDEF&&typeof doc.cloneNode!=UNDEF,playerVersion=[0,0,0],d=null;if(typeof nav.plugins!=UNDEF&&typeof nav.plugins[SHOCKWAVE_FLASH]==OBJECT){d=nav.plugins[SHOCKWAVE_FLASH].description;if(d){d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1");playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10);playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10);playerVersion[2]=/r/.test(d)?parseInt(d.replace(/^.*r(.*)$/,"$1"),10):0;}}
else if(typeof win.ActiveXObject!=UNDEF){var a=null,fp6Crash=false;try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".7");}
catch(e){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX+".6");playerVersion=[6,0,21];a.AllowScriptAccess="always";}
catch(e){if(playerVersion[0]==6){fp6Crash=true;}}
if(!fp6Crash){try{a=new ActiveXObject(SHOCKWAVE_FLASH_AX);}
catch(e){}}}
if(!fp6Crash&&a){try{d=a.GetVariable("$version");if(d){d=d.split(" ")[1].split(",");playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)];}}
catch(e){}}}
var u=nav.userAgent.toLowerCase(),p=nav.platform.toLowerCase(),webkit=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,ie=false,windows=p?/win/.test(p):/win/.test(u),mac=p?/mac/.test(p):/mac/.test(u);return{w3cdom:w3cdom,pv:playerVersion,webkit:webkit,ie:ie,win:windows,mac:mac};}();var onDomLoad=function(){if(!ua.w3cdom){return;}
addDomLoadEvent(main);if(ua.ie&&ua.win){try{doc.write("<scr"+"ipt id=__ie_ondomload defer=true src=//:></scr"+"ipt>");var s=getElementById("__ie_ondomload");if(s){s.onreadystatechange=function(){if(this.readyState=="complete"){this.parentNode.removeChild(this);callDomLoadFunctions();}};}}
catch(e){}}
if(ua.webkit&&typeof doc.readyState!=UNDEF){timer=setInterval(function(){if(/loaded|complete/.test(doc.readyState)){callDomLoadFunctions();}},10);}
if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("DOMContentLoaded",callDomLoadFunctions,null);}
addLoadEvent(callDomLoadFunctions);}();function callDomLoadFunctions(){if(isDomLoaded){return;}
if(ua.ie&&ua.win){var s=createElement("span");try{var t=doc.getElementsByTagName("body")[0].appendChild(s);t.parentNode.removeChild(t);}
catch(e){return;}}
isDomLoaded=true;if(timer){clearInterval(timer);timer=null;}
var dl=domLoadFnArr.length;for(var i=0;i<dl;i++){domLoadFnArr[i]();}}
function addDomLoadEvent(fn){if(isDomLoaded){fn();}
else{domLoadFnArr[domLoadFnArr.length]=fn;}}
function addLoadEvent(fn){if(typeof win.addEventListener!=UNDEF){win.addEventListener("load",fn,false);}
else if(typeof doc.addEventListener!=UNDEF){doc.addEventListener("load",fn,false);}
else if(typeof win.attachEvent!=UNDEF){win.attachEvent("onload",fn);}
else if(typeof win.onload=="function"){var fnOld=win.onload;win.onload=function(){fnOld();fn();};}
else{win.onload=fn;}}
function main(){var rl=regObjArr.length;for(var i=0;i<rl;i++){var id=regObjArr[i].id;if(ua.pv[0]>0){var obj=getElementById(id);if(obj){regObjArr[i].width=obj.getAttribute("width")?obj.getAttribute("width"):"0";regObjArr[i].height=obj.getAttribute("height")?obj.getAttribute("height"):"0";if(hasPlayerVersion(regObjArr[i].swfVersion)){if(ua.webkit&&ua.webkit<312){fixParams(obj);}
setVisibility(id,true);}
else if(regObjArr[i].expressInstall&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){showExpressInstall(regObjArr[i]);}
else{displayAltContent(obj);}}}
else{setVisibility(id,true);}}}
function fixParams(obj){var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var e=createElement("embed"),a=nestedObj.attributes;if(a){var al=a.length;for(var i=0;i<al;i++){if(a[i].nodeName.toLowerCase()=="data"){e.setAttribute("src",a[i].nodeValue);}
else{e.setAttribute(a[i].nodeName,a[i].nodeValue);}}}
var c=nestedObj.childNodes;if(c){var cl=c.length;for(var j=0;j<cl;j++){if(c[j].nodeType==1&&c[j].nodeName.toLowerCase()=="param"){e.setAttribute(c[j].getAttribute("name"),c[j].getAttribute("value"));}}}
obj.parentNode.replaceChild(e,obj);}}
function fixObjectLeaks(id){if(ua.ie&&ua.win&&hasPlayerVersion("8.0.0")){win.attachEvent("onunload",function(){var obj=getElementById(id);if(obj){for(var i in obj){if(typeof obj[i]=="function"){obj[i]=function(){};}}
obj.parentNode.removeChild(obj);}});}}
function showExpressInstall(regObj){isExpressInstallActive=true;var obj=getElementById(regObj.id);if(obj){if(regObj.altContentId){var ac=getElementById(regObj.altContentId);if(ac){storedAltContent=ac;storedAltContentId=regObj.altContentId;}}
else{storedAltContent=abstractAltContent(obj);}
if(!(/%$/.test(regObj.width))&&parseInt(regObj.width,10)<310){regObj.width="310";}
if(!(/%$/.test(regObj.height))&&parseInt(regObj.height,10)<137){regObj.height="137";}
doc.title=doc.title.slice(0,47)+" - Flash Player Installation";var pt=ua.ie&&ua.win?"ActiveX":"PlugIn",dt=doc.title,fv="MMredirectURL="+win.location+"&MMplayerType="+pt+"&MMdoctitle="+dt,replaceId=regObj.id;if(ua.ie&&ua.win&&obj.readyState!=4){var newObj=createElement("div");replaceId+="SWFObjectNew";newObj.setAttribute("id",replaceId);obj.parentNode.insertBefore(newObj,obj);obj.style.display="none";win.attachEvent("onload",function(){obj.parentNode.removeChild(obj);});}
createSWF({data:regObj.expressInstall,id:EXPRESS_INSTALL_ID,width:regObj.width,height:regObj.height},{flashvars:fv},replaceId);}}
function displayAltContent(obj){if(ua.ie&&ua.win&&obj.readyState!=4){var el=createElement("div");obj.parentNode.insertBefore(el,obj);el.parentNode.replaceChild(abstractAltContent(obj),el);obj.style.display="none";win.attachEvent("onload",function(){obj.parentNode.removeChild(obj);});}
else{obj.parentNode.replaceChild(abstractAltContent(obj),obj);}}
function abstractAltContent(obj){var ac=createElement("div");if(ua.win&&ua.ie){ac.innerHTML=obj.innerHTML;}
else{var nestedObj=obj.getElementsByTagName(OBJECT)[0];if(nestedObj){var c=nestedObj.childNodes;if(c){var cl=c.length;for(var i=0;i<cl;i++){if(!(c[i].nodeType==1&&c[i].nodeName.toLowerCase()=="param")&&!(c[i].nodeType==8)){ac.appendChild(c[i].cloneNode(true));}}}}}
return ac;}
function createSWF(attObj,parObj,id){var r,el=getElementById(id);if(typeof attObj.id==UNDEF){attObj.id=id;}
if(ua.ie&&ua.win){var att="";for(var i in attObj){if(attObj[i]!=Object.prototype[i]){if(i=="data"){parObj.movie=attObj[i];}
else if(i.toLowerCase()=="styleclass"){att+=' class="'+attObj[i]+'"';}
else if(i!="classid"){att+=' '+i+'="'+attObj[i]+'"';}}}
var par="";for(var j in parObj){if(parObj[j]!=Object.prototype[j]){par+='<param name="'+j+'" value="'+parObj[j]+'" />';}}
el.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+att+'>'+par+'</object>';fixObjectLeaks(attObj.id);r=getElementById(attObj.id);}
else if(ua.webkit&&ua.webkit<312){var e=createElement("embed");e.setAttribute("type",FLASH_MIME_TYPE);for(var k in attObj){if(attObj[k]!=Object.prototype[k]){if(k=="data"){e.setAttribute("src",attObj[k]);}
else if(k.toLowerCase()=="styleclass"){e.setAttribute("class",attObj[k]);}
else if(k!="classid"){e.setAttribute(k,attObj[k]);}}}
for(var l in parObj){if(parObj[l]!=Object.prototype[l]){if(l!="movie"){e.setAttribute(l,parObj[l]);}}}
el.parentNode.replaceChild(e,el);r=e;}
else{var o=createElement(OBJECT);o.setAttribute("type",FLASH_MIME_TYPE);for(var m in attObj){if(attObj[m]!=Object.prototype[m]){if(m.toLowerCase()=="styleclass"){o.setAttribute("class",attObj[m]);}
else if(m!="classid"){o.setAttribute(m,attObj[m]);}}}
for(var n in parObj){if(parObj[n]!=Object.prototype[n]&&n!="movie"){createObjParam(o,n,parObj[n]);}}
el.parentNode.replaceChild(o,el);r=o;}
return r;}
function createObjParam(el,pName,pValue){var p=createElement("param");p.setAttribute("name",pName);p.setAttribute("value",pValue);el.appendChild(p);}
function getElementById(id){return doc.getElementById(id);}
function createElement(el){return doc.createElement(el);}
function hasPlayerVersion(rv){var pv=ua.pv,v=rv.split(".");v[0]=parseInt(v[0],10);v[1]=parseInt(v[1],10);v[2]=parseInt(v[2],10);return(pv[0]>v[0]||(pv[0]==v[0]&&pv[1]>v[1])||(pv[0]==v[0]&&pv[1]==v[1]&&pv[2]>=v[2]))?true:false;}
function createCSS(sel,decl){if(ua.ie&&ua.mac){return;}
var h=doc.getElementsByTagName("head")[0],s=createElement("style");s.setAttribute("type","text/css");s.setAttribute("media","screen");if(!(ua.ie&&ua.win)&&typeof doc.createTextNode!=UNDEF){s.appendChild(doc.createTextNode(sel+" {"+decl+"}"));}
h.appendChild(s);if(ua.ie&&ua.win&&typeof doc.styleSheets!=UNDEF&&doc.styleSheets.length>0){var ls=doc.styleSheets[doc.styleSheets.length-1];if(typeof ls.addRule==OBJECT){ls.addRule(sel,decl);}}}
function setVisibility(id,isVisible){var v=isVisible?"inherit":"hidden";if(isDomLoaded){getElementById(id).style.visibility=v;}
else{createCSS("#"+id,"visibility:"+v);}}
function getTargetVersion(obj){if(!obj)
return 0;var c=obj.childNodes;var cl=c.length;for(var i=0;i<cl;i++){if(c[i].nodeType==1&&c[i].nodeName.toLowerCase()=="object"){c=c[i].childNodes;cl=c.length;i=0;}
if(c[i].nodeType==1&&c[i].nodeName.toLowerCase()=="param"&&c[i].getAttribute("name")=="swfversion"){return c[i].getAttribute("value");}}
return 0;}
function getExpressInstall(obj){if(!obj)
return"";var c=obj.childNodes;var cl=c.length;for(var i=0;i<cl;i++){if(c[i].nodeType==1&&c[i].nodeName.toLowerCase()=="object"){c=c[i].childNodes;cl=c.length;i=0;}
if(c[i].nodeType==1&&c[i].nodeName.toLowerCase()=="param"&&c[i].getAttribute("name")=="expressinstall"){return c[i].getAttribute("value");}}
return"";}
return{registerObject:function(objectIdStr,swfVersionStr,xiSwfUrlStr){if(!ua.w3cdom||!objectIdStr){return;}
var obj=document.getElementById(objectIdStr);var xi=getExpressInstall(obj);var regObj={};regObj.id=objectIdStr;regObj.swfVersion=swfVersionStr?swfVersionStr:getTargetVersion(obj);regObj.expressInstall=xiSwfUrlStr?xiSwfUrlStr:((xi!="")?xi:false);regObjArr[regObjArr.length]=regObj;setVisibility(objectIdStr,false);},getObjectById:function(objectIdStr){var r=null;if(ua.w3cdom&&isDomLoaded){var o=getElementById(objectIdStr);if(o){var n=o.getElementsByTagName(OBJECT)[0];if(!n||(n&&typeof o.SetVariable!=UNDEF)){r=o;}
else if(typeof n.SetVariable!=UNDEF){r=n;}}}
return r;},embedSWF:function(swfUrlStr,replaceElemIdStr,widthStr,heightStr,swfVersionStr,xiSwfUrlStr,flashvarsObj,parObj,attObj){if(!ua.w3cdom||!swfUrlStr||!replaceElemIdStr||!widthStr||!heightStr||!swfVersionStr){return;}
widthStr+="";heightStr+="";if(hasPlayerVersion(swfVersionStr)){setVisibility(replaceElemIdStr,false);var att=(typeof attObj==OBJECT)?attObj:{};att.data=swfUrlStr;att.width=widthStr;att.height=heightStr;var par=(typeof parObj==OBJECT)?parObj:{};if(typeof flashvarsObj==OBJECT){for(var i in flashvarsObj){if(flashvarsObj[i]!=Object.prototype[i]){if(typeof par.flashvars!=UNDEF){par.flashvars+="&"+i+"="+flashvarsObj[i];}
else{par.flashvars=i+"="+flashvarsObj[i];}}}}
addDomLoadEvent(function(){createSWF(att,par,replaceElemIdStr);if(att.id==replaceElemIdStr){setVisibility(replaceElemIdStr,true);}});}
else if(xiSwfUrlStr&&!isExpressInstallActive&&hasPlayerVersion("6.0.65")&&(ua.win||ua.mac)){setVisibility(replaceElemIdStr,false);addDomLoadEvent(function(){var regObj={};regObj.id=regObj.altContentId=replaceElemIdStr;regObj.width=widthStr;regObj.height=heightStr;regObj.expressInstall=xiSwfUrlStr;showExpressInstall(regObj);});}},getFlashPlayerVersion:function(){return{major:ua.pv[0],minor:ua.pv[1],release:ua.pv[2]};},hasFlashPlayerVersion:hasPlayerVersion,createSWF:function(attObj,parObj,replaceElemIdStr){if(ua.w3cdom&&isDomLoaded){return createSWF(attObj,parObj,replaceElemIdStr);}
else{return undefined;}},createCSS:function(sel,decl){if(ua.w3cdom){createCSS(sel,decl);}},addDomLoadEvent:addDomLoadEvent,addLoadEvent:addLoadEvent,getQueryParamValue:function(param){var q=doc.location.search||doc.location.hash;if(param==null){return q;}
if(q){var pairs=q.substring(1).split("&");for(var i=0;i<pairs.length;i++){if(pairs[i].substring(0,pairs[i].indexOf("="))==param){return pairs[i].substring((pairs[i].indexOf("=")+1));}}}
return"";},expressInstallCallback:function(){if(isExpressInstallActive&&storedAltContent){var obj=getElementById(EXPRESS_INSTALL_ID);if(obj){obj.parentNode.replaceChild(storedAltContent,obj);if(storedAltContentId){setVisibility(storedAltContentId,true);if(ua.ie&&ua.win){storedAltContent.style.display="block";}}
storedAltContent=null;storedAltContentId=null;isExpressInstallActive=false;}}}};}();