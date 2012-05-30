if(typeof jwplayer=="undefined"){jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};var $jw=jwplayer;jwplayer.version="6.0.2218";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(d){var j=document,g=window,b=navigator,h="undefined",f="string",c="object";var k=d.utils=function(){};k.exists=function(l){switch(typeof(l)){case f:return(l.length>0);break;case c:return(l!==null);case h:return false}return true};k.styleDimension=function(l){return l+(l.toString().indexOf("%")>0?"":"px")};k.getAbsolutePath=function(r,q){if(!k.exists(q)){q=j.location.href}if(!k.exists(r)){return undefined}if(a(r)){return r}var s=q.substring(0,q.indexOf("://")+3);var p=q.substring(s.length,q.indexOf("/",s.length+1));var m;if(r.indexOf("/")===0){m=r.split("/")}else{var n=q.split("?")[0];n=n.substring(s.length+p.length+1,n.lastIndexOf("/"));m=n.split("/").concat(r.split("/"))}var l=[];for(var o=0;o<m.length;o++){if(!m[o]||!k.exists(m[o])||m[o]=="."){continue}else{if(m[o]==".."){l.pop()}else{l.push(m[o])}}}return s+p+"/"+l.join("/")};function a(m){if(!k.exists(m)){return}var n=m.indexOf("://");var l=m.indexOf("?");return(n>0&&(l<0||(l>n)))}k.extend=function(){var l=k.extend["arguments"];if(l.length>1){for(var n=1;n<l.length;n++){for(var m in l[n]){if(k.exists(l[n][m])){l[0][m]=l[n][m]}}}return l[0]}return null};k.log=function(m,l){if(typeof console!=h&&typeof console.log!=h){if(l){console.log(m,l)}else{console.log(m)}}};var e=k.userAgentMatch=function(m){var l=b.userAgent.toLowerCase();return(l.match(m)!==null)};k.isIE=function(){return e(/msie/i)};k.isMobile=function(){return e(/(iP(hone|ad|od))|android/i)};k.isIOS=function(){return e(/iP(hone|ad|od)/i)};k.isIPod=function(){return e(/iP(hone|od)/i)};k.isIPad=function(){return e(/iPad/i)};k.saveCookie=function(l,m){j.cookie="jwplayer."+l+"="+m+"; path=/"};k.getCookies=function(){var o={};var n=j.cookie.split("; ");for(var m=0;m<n.length;m++){var l=n[m].split("=");if(l[0].indexOf("jwplayer.")==0){o[l[0].substring(9,l[0].length)]=l[1]}}return o};k.typeOf=function(m){var l=typeof m;if(l==="object"){if(!m){return"null"}return(m instanceof Array)?"array":l}else{return l}};k.translateEventResponse=function(n,l){var p=k.extend({},l);if(n==d.events.JWPLAYER_FULLSCREEN&&!p.fullscreen){p.fullscreen=p.message=="true"?true:false;delete p.message}else{if(typeof p.data==c){p=k.extend(p,p.data);delete p.data}else{if(typeof p.metadata==c){k.deepReplaceKeyName(p.metadata,["__dot__","__spc__","__dsh__"],["."," ","-"])}}}var m=["position","duration","offset"];for(var o in m){if(p[m[o]]){p[m[o]]=Math.round(p[m[o]]*1000)/1000}}return p};k.flashVersion=function(){var l=b.plugins,m;if(l!=h){m=l["Shockwave Flash"];if(m){return parseInt(m.description.replace(/\D+(\d+)\..*/,"$1"))}}if(typeof g.ActiveXObject!=h){try{m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(m){return parseInt(m.GetVariable("$version").split(" ")[1].split(",")[0])}}catch(n){}}return 0};k.getScriptPath=function(n){var l=j.getElementsByTagName("script");for(var m=0;m<l.length;m++){var o=l[m].src;if(o&&o.indexOf(n)>=0){return o.substr(0,o.indexOf(n))}}return""};k.deepReplaceKeyName=function(s,n,l){switch(d.utils.typeOf(s)){case"array":for(var p=0;p<s.length;p++){s[p]=d.utils.deepReplaceKeyName(s[p],n,l)}break;case c:for(var o in s){var r,q;if(n instanceof Array&&l instanceof Array){if(n.length!=l.length){continue}else{r=n;q=l}}else{r=[n];q=[l]}var m=o;for(var p=0;p<r.length;p++){m=m.replace(new RegExp(n[p],"g"),l[p])}s[m]=d.utils.deepReplaceKeyName(s[o],n,l);if(o!=m){delete s[o]}}break}return s};var i=k.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};k.getPluginPathType=function(m){if(typeof m!=f){return}m=m.split("?")[0];var n=m.indexOf("://");if(n>0){return i.ABSOLUTE}var l=m.indexOf("/");var o=k.extension(m);if(n<0&&l<0&&(!o||!isNaN(o))){return i.CDN}return i.RELATIVE};k.getPluginName=function(l){return l.replace(/^.*\/([^-]*)-?.*\.(swf|js)$/,"$1")};k.getPluginVersion=function(l){return l.replace(/[^-]*-?([^\.]*).*$/,"$1")};k.isYouTube=function(l){return(l.indexOf("youtube.com")>-1||l.indexOf("youtu.be")>-1)}})(jwplayer);(function(i){var b="video/",g="audio/",e="image",h="mp4",f={f4a:g+h,f4v:b+h,mov:b+h,m4a:g+h,m4v:b+h,mp4:b+h,aac:g+"aac",mp3:g+"mp3",ogg:g+"ogg",oga:g+"ogg",ogv:b+"ogg",webm:b+"webm",m3u8:"application/vnd.apple.mpegurl"},b="video",d={flv:b,f4v:b,mov:b,m4a:b,m4v:b,mp4:b,aac:b,mp3:"sound",smil:"rtmp",m3u8:"hls"};var a=i.extensionmap={};for(var c in f){a[c]={html5:f[c]}}for(c in d){if(!a[c]){a[c]={}}a[c].flash=d[c]}})(jwplayer.utils);(function(b){var a=b.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},c=document;b.scriptloader=function(e){var f=a.NEW,g=jwplayer.events,d=new g.eventdispatcher();b.extend(this,d);this.load=function(){if(f==a.NEW){f=a.LOADING;var h=c.createElement("script");h.onload=function(i){f=a.COMPLETE;d.sendEvent(g.COMPLETE)};h.onerror=function(i){f=a.ERROR;d.sendEvent(g.ERROR)};h.onreadystatechange=function(){if(h.readyState=="loaded"||h.readyState=="complete"){f=a.COMPLETE;d.sendEvent(g.COMPLETE)}};c.getElementsByTagName("head")[0].appendChild(h);h.src=e}};this.getStatus=function(){return f}}})(jwplayer.utils);(function(a){a.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c};a.seconds=function(d){d=d.replace(",",".");var b=d.split(":");var c=0;if(d.substr(-1)=="s"){c=Number(d.substr(0,d.length-1))}else{if(d.substr(-1)=="m"){c=Number(d.substr(0,d.length-1))*60}else{if(d.substr(-1)=="h"){c=Number(d.substr(0,d.length-1))*3600}else{if(b.length>1){c=Number(b[b.length-1]);c+=Number(b[b.length-2])*60;if(b.length==3){c+=Number(b[b.length-3])*3600}}else{c=Number(d)}}}}return c};a.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d++){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"'+f.replace(/"/g,'\\"')+'"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"'+e.replace(/"/g,'\\"')+'"';break;case"object":if(a.exists(e)){e=a.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"'+d+'":'+String(e))}}}if(b){return"["+String(g)+"]"}else{return"{"+String(g)+"}"}}};a.extension=function(b){if(!b){return""}b=b.substring(b.lastIndexOf("/")+1,b.length).split("?")[0];if(b.lastIndexOf(".")>-1){return b.substr(b.lastIndexOf(".")+1,b.length).toLowerCase()}};a.stringToColor=function(b){b=b.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(b.length==3){b=b.charAt(0)+b.charAt(0)+b.charAt(1)+b.charAt(1)+b.charAt(2)+b.charAt(2)}return parseInt(b,16)}})(jwplayer.utils);(function(a){a.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING",COMPLETED:"COMPLETED"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed"}})(jwplayer);(function(a){var b=jwplayer.utils;a.eventdispatcher=function(h,c){var e=h,g=c,f,d;this.resetEventListeners=function(){f={};d=[]};this.resetEventListeners();this.addEventListener=function(i,l,k){try{if(!b.exists(f[i])){f[i]=[]}if(b.typeOf(l)=="string"){l=(new Function("return "+l))()}f[i].push({listener:l,count:k})}catch(j){b.log("error",j)}return false};this.removeEventListener=function(j,l){if(!f[j]){return}try{for(var i=0;i<f[j].length;i++){if(f[j][i].listener.toString()==l.toString()){f[j].splice(i,1);break}}}catch(k){b.log("error",k)}return false};this.addGlobalListener=function(k,j){try{if(b.typeOf(k)=="string"){k=(new Function("return "+k))()}d.push({listener:k,count:j})}catch(i){b.log("error",i)}return false};this.removeGlobalListener=function(k){if(!k){return}try{for(var i=0;i<d.length;i++){if(d[i].listener.toString()==k.toString()){d.splice(i,1);break}}}catch(j){b.log("error",j)}return false};this.sendEvent=function(k,m){if(!b.exists(m)){m={}}b.extend(m,{id:e,version:jwplayer.version,type:k});if(g){b.log(k,m)}if(b.typeOf(f[k])!="undefined"){for(var j=0;j<f[k].length;j++){try{f[k][j].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),f[k][j].listener)}if(f[k][j]){if(f[k][j].count===1){delete f[k][j]}else{if(f[k][j].count>0){f[k][j].count=f[k][j].count-1}}}}}var i;for(i=0;i<d.length;i++){try{d[i].listener(m)}catch(l){b.log("There was an error while handling a listener: "+l.toString(),d[i].listener)}if(d[i]){if(d[i].count===1){delete d[i]}else{if(d[i].count>0){d[i].count=d[i].count-1}}}}}}})(jwplayer.events);(function(a){var c={};var b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,f,e){var d=a.utils.getPluginName(h);if(c[d]){c[d].registerPlugin(h,f,e)}else{a.utils.log("A plugin ("+h+") was registered with the player that was not loaded. Please check your configuration.");for(var g in b){b[g].pluginFailed()}}}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]}}})(jwplayer);(function(b){var a=jwplayer.utils,c=jwplayer.events,d="undefined";b.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2};b.plugin=function(e){var g="http://plugins.longtailvideo.com",l=a.loaderstatus.NEW,m,k,n;var f=new c.eventdispatcher();a.extend(this,f);function h(){switch(a.getPluginPathType(e)){case a.pluginPathType.ABSOLUTE:return e;case a.pluginPathType.RELATIVE:return a.getAbsolutePath(e,window.location.href);case a.pluginPathType.CDN:var q=a.getPluginName(e);var p=a.getPluginVersion(e);var o=(window.location.href.indexOf("https://")==0)?g.replace("http://","https://secure"):g;return o+"/"+jwplayer.version.split(".")[0]+"/"+q+"/"+q+(p!==""?("-"+p):"")+".js"}}function j(o){n=setTimeout(function(){l=a.loaderstatus.COMPLETE;f.sendEvent(c.COMPLETE)},1000)}function i(o){l=a.loaderstatus.ERROR;f.sendEvent(c.ERROR)}this.load=function(){if(l==a.loaderstatus.NEW){if(e.lastIndexOf(".swf")>0){m=e;l=a.loaderstatus.COMPLETE;f.sendEvent(c.COMPLETE);return}l=a.loaderstatus.LOADING;var o=new a.scriptloader(h());o.addEventListener(c.COMPLETE,j);o.addEventListener(c.ERROR,i);o.load()}};this.registerPlugin=function(q,p,o){if(n){clearTimeout(n);n=undefined}if(p&&o){m=o;k=p}else{if(typeof p=="string"){m=p}else{if(typeof p=="function"){k=p}else{if(!p&&!o){m=q}}}}l=a.loaderstatus.COMPLETE;f.sendEvent(c.COMPLETE)};this.getStatus=function(){return l};this.getPluginName=function(){return a.getPluginName(e)};this.getFlashPath=function(){if(m){switch(a.getPluginPathType(m)){case a.pluginPathType.ABSOLUTE:return m;case a.pluginPathType.RELATIVE:if(e.lastIndexOf(".swf")>0){return a.getAbsolutePath(m,window.location.href)}return a.getAbsolutePath(m,h());case a.pluginPathType.CDN:if(m.indexOf("-")>-1){return m+"h"}return m+"-h"}}return null};this.getJS=function(){return k};this.getPluginmode=function(){if(typeof m!=d&&typeof k!=d){return b.pluginmodes.HYBRID}else{if(typeof m!=d){return b.pluginmodes.FLASH}else{if(typeof k!=d){return b.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(p,o,q){return new k(p,o,q)};this.getURL=function(){return e}}})(jwplayer.plugins);(function(b){var a=b.utils,c=b.events;b.plugins.pluginloader=function(j,h){var i={},n=a.loaderstatus.NEW,g=false,d=false,l=false,e=new c.eventdispatcher();a.extend(this,e);function f(){if(l){e.sendEvent(c.ERROR)}else{if(!d){d=true;n=a.loaderstatus.COMPLETE;e.sendEvent(c.COMPLETE)}}}function m(){if(!d){var p=0;for(plugin in i){var o=i[plugin].getStatus();if(o==a.loaderstatus.LOADING||o==a.loaderstatus.NEW){p++}}if(p==0){f()}}}this.setupPlugins=function(q,o,v){var p={length:0,plugins:{}};var s={length:0,plugins:{}};for(var r in i){var t=i[r].getPluginName();if(i[r].getFlashPath()){p.plugins[i[r].getFlashPath()]=o.plugins[r];p.plugins[i[r].getFlashPath()].pluginmode=i[r].getPluginmode();p.length++}if(i[r].getJS()){var u=document.createElement("div");u.id=q.id+"_"+t;u.style.position="absolute";u.style.zIndex=s.length+10;s.plugins[t]=i[r].getNewInstance(q,o.plugins[r],u);s.length++;q.onReady(v(s.plugins[t],u,true));q.onResize(v(s.plugins[t],u))}}q.plugins=s.plugins;return p};this.load=function(){if(a.typeOf(h)!="object"){m();return}n=a.loaderstatus.LOADING;g=true;for(var o in h){if(a.exists(o)){i[o]=j.addPlugin(o);i[o].addEventListener(c.COMPLETE,m);i[o].addEventListener(c.ERROR,k)}}for(o in i){i[o].load()}g=false;m()};var k=this.pluginFailed=function(){if(!l){l=true;f()}};this.getStatus=function(){return n}}})(jwplayer);(function(a){a.playlist=function(c){var d=[];if(a.utils.typeOf(c)=="array"){for(var b=0;b<c.length;b++){d.push(new a.playlist.item(c[b]))}}else{d.push(new a.playlist.item(c))}return d}})(jwplayer);(function(b){var a=b.item=function(c){_playlistitem=jwplayer.utils.extend({},a.defaults,c);if(_playlistitem.sources.length==0){_playlistitem.sources[0]=new b.source(_playlistitem)}return _playlistitem};a.defaults={description:"",image:"",mediaid:"",title:"",duration:-1,sources:[]}})(jwplayer.playlist);(function(d){var b=undefined,a=jwplayer.utils,c={file:b,width:b,label:b,bitrate:b,type:b};d.source=function(f){var e=a.extend({},c);for(var g in c){if(a.exists(f[g])){e[g]=f[g];delete f[g]}}return e}})(jwplayer.playlist);(function(b){var a=b.utils,c=b.events;var d=b.embed=function(o){var l=new d.config(o.config),h,j="Error loading player: ",g=b.plugins.loadPlugins(o.id,l.plugins);l.id=o.id;h=document.getElementById(o.id);function i(r,q){for(var p in q){if(typeof r[p]=="function"){(r[p]).call(r,q[p])}}}function e(){if(a.typeOf(l.playlist)=="array"&&l.playlist.length<2){if(l.playlist.length==0||!l.playlist[0].sources||l.playlist[0].sources.length==0){m();return}}if(g.getStatus()==a.loaderstatus.COMPLETE){for(var r=0;r<l.modes.length;r++){if(l.modes[r].type&&d[l.modes[r].type]){var s=l.modes[r].config;var p=a.extend({},s?d.config.addConfig(l,s):l);var q=new d[l.modes[r].type](h,l.modes[r],p,g,o);if(q.supportsConfig()){q.addEventListener(c.ERROR,f);q.embed();i(o,p.events);return o}}}if(l.fallback){a.log("No suitable players found and fallback enabled");new d.download(h,l,m)}else{a.log("No suitable players found and fallback disabled")}}}function f(p){n(h,j+p.message)}function k(p){n(h,j+"Could not load plugins")}function m(){n(h,j+"No media sources found")}function n(p,r){var q=p.style;q.backgroundColor="#000";q.color="#FFF";q.width=a.styleDimension(l.width);q.height=a.styleDimension(l.height);q.display="table";q.padding="50px";var s=document.createElement("p");s.style.verticalAlign="middle";s.style.textAlign="center";s.style.display="table-cell";s.innerHTML=r;p.innerHTML="";p.appendChild(s)}b.embed.errorScreen=n;g.addEventListener(c.COMPLETE,e);g.addEventListener(c.ERROR,k);g.load();return o}})(jwplayer);(function(d){var a=d.utils,h=d.embed,b=d.playlist.item,f=undefined;var c=h.config=function(j){function m(q,p,o){for(var n=0;n<q.length;n++){var r=q[n].type;if(!q[n].src){q[n].src=o[r]?o[r]:p+"jwplayer."+r+(r=="flash"?".swf":".js")}}}var l={fallback:true,height:300,primary:"html5",width:400,base:f},i={html5:{type:"html5"},flash:{type:"flash"}},k=a.extend(l,j);if(!k.base){k.base=a.getScriptPath("jwplayer.js")}if(!k.modes){k.modes=(k.primary=="flash")?[i.flash,i.html5]:[i.html5,i.flash]}m(k.modes,k.base,{html5:k.html5player,flash:k.flashplayer});e(k);return k};c.addConfig=function(i,j){e(j);return a.extend(i,j)};function e(l){if(!l.playlist){var n={};for(var k in b.defaults){g(l,n,k)}if(!l.sources){if(l.levels){n.sources=l.levels;delete l.levels}else{var j={};g(l,j,"file");g(l,j,"type");n.sources=j.file?[j]:[]}}l.playlist=[n]}else{for(var m=0;m<l.playlist.length;m++){l.playlist[m]=new b(l.playlist[m])}}}function g(k,i,j){if(a.exists(k[j])){i[j]=k[j];delete k[j]}}})(jwplayer);(function(d){var h=d.embed,b=d.utils,e="pointer",a="none",f="block",g="100%",c="absolute";h.download=function(k,v,j){var n=b.extend({},v),r,l=n.width?n.width:480,o=n.height?n.height:320,w,p,i=v.logo?v.logo:{prefix:"http://l.longtailvideo.com/download/",file:"logo.png",margin:10};function u(){if(n.playlist&&n.playlist.length){var z,B,y;for(var x=0;x<n.playlist[0].sources.length;x++){var A=n.playlist[0].sources[x];if(A.file){if(("mp4,mp4,flv,webm,aac,mp3,vorbis").split().indexOf(A.type)>-1){z=A.file;B=A.image;continue}else{if(b.isYouTube(A.file)){y=A.file}}}}}else{return}if(z){w=z;p=B;if(i.prefix){i.prefix+=d.version.split(/\W/).splice(0,2).join("/")+"/"}q();m()}else{if(y){alert("Youtube goes here: "+y)}else{j()}}}function q(){if(k){r=s("a","display",k);s("div","iconbackground",r);s("div","icon",r);s("div","logo",r);if(w){r.setAttribute("href",b.getAbsolutePath(w))}}}function t(x,z){var A=document.querySelectorAll(x);for(var y=0;y<A.length;y++){for(var B in z){A[y].style[B]=z[B]}}}function m(){var x="#"+k.id+" .jwdownload";t(x+"display",{width:b.styleDimension(l),height:b.styleDimension(o),background:"black center no-repeat "+(p?"url("+p+")":""),backgroundSize:"contain",position:c,border:a,display:f});t(x+"display div",{position:c,width:g,height:g});t(x+"logo",{bottom:i.margin+"px",left:i.margin+"px",background:"bottom left no-repeat url("+i.prefix+i.file+")"});t(x+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"});t(x+"iconbackground",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"})}function s(x,A,z){var y=document.createElement(x);y.className="jwdownload"+A;if(z){z.appendChild(y)}return y}u()}})(jwplayer);(function(b){var a=b.utils,c=b.events;b.embed.flash=function(k,l,p,j,n){var f=new b.events.eventdispatcher(),g=a.flashVersion();a.extend(this,f);function q(s,r,t){var u=document.createElement("param");u.setAttribute("name",r);u.setAttribute("value",t);s.appendChild(u)}function o(s,t,r){return function(u){if(r){document.getElementById(n.id+"_wrapper").appendChild(t)}var v=document.getElementById(n.id).getPluginConfig("display");if(typeof s.resize=="function"){s.resize(v.width,v.height)}t.style.left=v.x;t.style.top=v.h}}function i(t){if(!t){return{}}var v={};for(var s in t){var r=t[s];for(var u in r){v[s+"."+u]=r[u]}}return v}function m(u,t){if(u[t]){var w=u[t];for(var s in w){var r=w[s];if(typeof r=="string"){if(!u[s]){u[s]=r}}else{for(var v in r){if(!u[s+"."+v]){u[s+"."+v]=r[v]}}}}delete u[t]}}function e(u){if(!u){return{}}var x={},w=[];for(var r in u){var t=a.getPluginName(r);var s=u[r];w.push(r);for(var v in s){x[t+"."+v]=s[v]}}x.plugins=w.join(",");return x}function h(t){var r="";for(var s in t){if(typeof(t[s])=="object"){r+=s+"="+encodeURIComponent("[[JSON]]"+a.jsonToString(t[s]))+"&"}else{r+=s+"="+encodeURIComponent(t[s])+"&"}}return r.substring(0,r.length-1)}this.embed=function(){p.id=n.id;if(g<10){f.sendEvent(c.ERROR,{message:"Flash version must be 10.0 or greater"});return false}var D;var v=a.extend({},p);if(k.id+"_wrapper"==k.parentNode.id){D=document.getElementById(k.id+"_wrapper")}else{D=document.createElement("div");D.id=k.id+"_wrapper";D.style.position="relative";D.style.width=a.styleDimension(v.width);D.style.height=a.styleDimension(v.height);k.parentNode.replaceChild(D,k);D.appendChild(k)}var r=j.setupPlugins(n,v,o);if(r.length>0){a.extend(v,e(r.plugins))}else{delete v.plugins}var w=["height","width","modes","events","primary","base","fallback"];for(var z=0;z<w.length;z++){delete v[w[z]]}var t="opaque";if(v.wmode){t=v.wmode}m(v,"components");m(v,"providers");if(typeof v["dock.position"]!="undefined"){if(v["dock.position"].toString().toLowerCase()=="false"){v.dock=v["dock.position"];delete v["dock.position"]}}var B=a.getCookies();for(var s in B){if(typeof(v[s])=="undefined"){v[s]=B[s]}}var C="#000000",y,u=h(v);if(a.isIE()){var A='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="'+C+'" width="100%" height="100%" id="'+k.id+'" name="'+k.id+'" tabindex=0"">';A+='<param name="movie" value="'+l.src+'">';A+='<param name="allowfullscreen" value="true">';A+='<param name="allowscriptaccess" value="always">';A+='<param name="seamlesstabbing" value="true">';A+='<param name="wmode" value="'+t+'">';A+='<param name="flashvars" value="'+u+'">';A+="</object>";k.outerHTML=A;y=document.getElementById(k.id)}else{var x=document.createElement("object");x.setAttribute("type","application/x-shockwave-flash");x.setAttribute("data",l.src);x.setAttribute("width","100%");x.setAttribute("height","100%");x.setAttribute("bgcolor","#000000");x.setAttribute("id",k.id);x.setAttribute("name",k.id);x.setAttribute("tabindex",0);q(x,"allowfullscreen","true");q(x,"allowscriptaccess","always");q(x,"seamlesstabbing","true");q(x,"wmode",t);q(x,"flashvars",u);x.onerror=function(){alert("does this work?")};k.parentNode.replaceChild(x,k);y=x}n.container=y;n.setPlayer(y,"flash")};this.supportsConfig=function(){if(g){if(p){try{var t=p.playlist[0],r=t.sources;if(typeof r=="undefined"){return true}else{for(var s=0;s<r.length;s++){if(r[s].file&&d(r[s].file,r[s].type)){return true}}}}catch(u){return false}}else{return true}}return false};function d(s,t){var r=["mp4","flv","aac","mp3","hls","rtmp","youtube"];if(t&&(r.toString().indexOf(t)<0)){return true}var u=a.extension(s);if(!t){t=u}if(!t){return true}if(a.exists(a.extensionmap[t])){return a.exists(a.extensionmap[t].flash)}return false}}})(jwplayer);(function(c){var a=c.utils,b=a.extensionmap,d=c.events;c.embed.html5=function(g,h,o,f,k){var j=this,e=new d.eventdispatcher();a.extend(j,e);function l(q,r,p){return function(s){var t=document.getElementById(g.id+"_displayarea");if(p){t.appendChild(r)}if(typeof q.resize=="function"){q.resize(t.clientWidth,t.clientHeight)}r.left=t.style.left;r.top=t.style.top}}j.embed=function(){if(c.html5){f.setupPlugins(k,o,l);g.innerHTML="";var p=c.utils.extend({},o);if(p.skin&&p.skin.toLowerCase().indexOf(".zip")>0){p.skin=p.skin.replace(/\.zip/i,".xml")}var q=new c.html5.player(p);k.container=document.getElementById(k.id);k.setPlayer(q,"html5")}else{var r=new a.scriptloader(h.src);r.addEventListener(d.ERROR,i);r.addEventListener(d.COMPLETE,j.embed);r.load()}};function i(p){j.sendEvent(p.type,{message:"HTML5 player not found"})}j.supportsConfig=function(){if(!!c.vid.canPlayType){try{if(a.typeOf(o.playlist)=="string"){return true}else{var p=o.playlist[0].sources;for(var r=0;r<p.length;r++){var q=p[r].file,s=p[r].type;if(n(q,s)){return true}}}}catch(t){return false}}return false};function n(p,q){if(navigator.userAgent.match(/BlackBerry/i)!==null){return false}var r=b[q?q:a.extension(p)];if(!r){return false}return m(r.html5)}function m(p){var q=c.vid;if(!p){return true}if(q.canPlayType(p)){return true}else{if(p=="audio/mp3"&&navigator.userAgent.match(/safari/i)){return q.canPlayType("audio/mpeg")}else{return false}}}}})(jwplayer);(function(d){var c=[],a=d.utils,e=d.events,b=e.state;var f=d.api=function(u){var y=this,g={},m={},C={},p=[],h=undefined,F=false,q=[],A=undefined,t={},o={};y.container=u;y.id=u.id;y.getBuffer=function(){return x("jwGetBuffer")};y.getContainer=function(){return y.container};function i(I,H){return function(N,J,K,L){if(I.renderingMode=="flash"||I.renderingMode=="html5"){var M;if(J){o[N]=J;M="jwplayer('"+I.id+"').callback('"+N+"')"}else{if(!J&&o[N]){delete o[N]}}h.jwDockSetButton(N,M,K,L)}return H}}y.getPlugin=function(H){var I={};if(H=="dock"){return a.extend(I,{setButton:i(y,I),show:function(){x("jwDockShow");return I},hide:function(){x("jwDockHide");return I},onShow:function(J){D("dock",e.JWPLAYER_COMPONENT_SHOW,J);return I},onHide:function(J){D("dock",e.JWPLAYER_COMPONENT_HIDE,J);return I}})}else{if(H=="controlbar"){return a.extend(I,{show:function(){__callInternal("jwControlbarShow");return I},hide:function(){__callInternal("jwControlbarHide");return I},onShow:function(J){D("controlbar",e.JWPLAYER_COMPONENT_SHOW,J);return I},onHide:function(J){D("controlbar",e.JWPLAYER_COMPONENT_HIDE,J);return I}})}else{if(H=="display"){return a.extend(I,{show:function(){__callInternal("jwDisplayShow");return I},hide:function(){__callInternal("jwDisplayHide");return I},onShow:function(J){D("display",e.JWPLAYER_COMPONENT_SHOW,J);return I},onHide:function(J){D("display",e.JWPLAYER_COMPONENT_HIDE,J);return I}})}else{return y.plugins[H]}}}};y.callback=function(H){if(o[H]){return o[H]()}};y.getDuration=function(){return x("jwGetDuration")};y.getFullscreen=function(){return x("jwGetFullscreen")};y.getStretching=function(){return x("jwGetStretching")};y.getHeight=function(){return x("jwGetHeight")};y.getLockState=function(){return x("jwGetLockState")};y.getMeta=function(){return y.getItemMeta()};y.getMute=function(){return x("jwGetMute")};y.getPlaylist=function(){var I=x("jwGetPlaylist");if(y.renderingMode=="flash"){a.deepReplaceKeyName(I,["__dot__","__spc__","__dsh__"],["."," ","-"])}for(var H=0;H<I.length;H++){if(!a.exists(I[H].index)){I[H].index=H}}return I};y.getPlaylistItem=function(H){if(!a.exists(H)){H=y.getCurrentItem()}return y.getPlaylist()[H]};y.getPosition=function(){return x("jwGetPosition")};y.getRenderingMode=function(){return y.renderingMode};y.getState=function(){return x("jwGetState")};y.getVolume=function(){return x("jwGetVolume")};y.getWidth=function(){return x("jwGetWidth")};y.setFullscreen=function(H){if(!a.exists(H)){x("jwSetFullscreen",!x("jwGetFullscreen"))}else{x("jwSetFullscreen",H)}return y};y.setStretching=function(H){x("jwSetStretching",H);return y};y.setMute=function(H){if(!a.exists(H)){x("jwSetMute",!x("jwGetMute"))}else{x("jwSetMute",H)}return y};y.lock=function(){return y};y.unlock=function(){return y};y.load=function(H){x("jwLoad",H);return y};y.playlistItem=function(H){x("jwPlaylistItem",H);return y};y.playlistPrev=function(){x("jwPlaylistPrev");return y};y.playlistNext=function(){x("jwPlaylistNext");return y};y.resize=function(I,H){if(y.renderingMode=="html5"){h.jwResize(I,H)}else{var J=document.getElementById(y.id+"_wrapper");if(J){J.style.width=a.styleDimension(I);J.style.height=a.styleDimension(H)}}return y};y.play=function(H){if(typeof H=="undefined"){H=y.getState();if(H==b.PLAYING||H==b.BUFFERING){x("jwPause")}else{x("jwPlay")}}else{x("jwPlay",H)}return y};y.pause=function(H){if(typeof H=="undefined"){H=y.getState();if(H==b.PLAYING||H==b.BUFFERING){x("jwPause")}else{x("jwPlay")}}else{x("jwPause",H)}return y};y.stop=function(){x("jwStop");return y};y.seek=function(H){x("jwSeek",H);return y};y.setVolume=function(H){x("jwSetVolume",H);return y};y.loadInstream=function(I,H){A=new f.instream(this,h,I,H);return A};y.getQualityLevels=function(){return x("jwGetQualityLevels")};y.getCurrentQuality=function(){return x("jwGetCurrentQuality")};y.setCurrentQuality=function(H){x("jwSetCurrentQuality",H)};var s={onBufferChange:e.JWPLAYER_MEDIA_BUFFER,onBufferFull:e.JWPLAYER_MEDIA_BUFFER_FULL,onError:e.JWPLAYER_ERROR,onFullscreen:e.JWPLAYER_FULLSCREEN,onMeta:e.JWPLAYER_MEDIA_META,onMute:e.JWPLAYER_MEDIA_MUTE,onPlaylist:e.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:e.JWPLAYER_PLAYLIST_ITEM,onReady:e.API_READY,onResize:e.JWPLAYER_RESIZE,onComplete:e.JWPLAYER_MEDIA_COMPLETE,onSeek:e.JWPLAYER_MEDIA_SEEK,onTime:e.JWPLAYER_MEDIA_TIME,onVolume:e.JWPLAYER_MEDIA_VOLUME,onBeforePlay:e.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:e.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:e.JWPLAYER_DISPLAY_CLICK,onQualityLevels:e.JWPLAYER_MEDIA_LEVELS,onQualityChange:e.JWPLAYER_MEDIA_LEVEL_CHANGED};for(var z in s){y[z]=E(s[z],B)}var w={onBuffer:b.BUFFERING,onPause:b.PAUSED,onPlay:b.PLAYING,onIdle:b.IDLE};for(var k in w){y[k]=E(w[k],r)}function E(H,I){return function(J){return I(H,J)}}y.remove=function(){if(!F){throw"Cannot call remove() before player is ready";return}n(this)};function n(H){q=[];f.destroyPlayer(H.id)}y.setup=function(H){if(d.embed){n(y);if(a.clearCss){a.clearCss("#"+y.id)}var I=d(y.id);I.config=H;return new d.embed(I)}return y};y.registerPlugin=function(J,I,H){d.plugins.registerPlugin(J,I,H)};y.setPlayer=function(H,I){h=H;y.renderingMode=I};y.detachMedia=function(){if(y.renderingMode=="html5"){return x("jwDetachMedia")}};y.attachMedia=function(){if(y.renderingMode=="html5"){return x("jwAttachMedia")}};function r(H,I){if(!m[H]){m[H]=[];B(e.JWPLAYER_PLAYER_STATE,G(H))}m[H].push(I);return y}function G(H){return function(J){var I=J.newstate,L=J.oldstate;if(I==H){var K=m[I];if(K){for(var M=0;M<K.length;M++){if(typeof K[M]=="function"){K[M].call(this,{oldstate:L,newstate:I})}}}}}}function D(H,I,J){if(!C[H]){C[H]={}}if(!C[H][I]){C[H][I]=[];B(I,l(H,I))}C[H][I].push(J);return y}function l(H,I){return function(K){if(H==K.component){var J=C[H][I];if(J){for(var L=0;L<J.length;L++){if(typeof J[L]=="function"){J[L].call(this,K)}}}}}}function j(H,I){try{H.jwAddEventListener(I,'function(dat) { jwplayer("'+y.id+'").dispatchEvent("'+I+'", dat); }')}catch(J){a.log("Could not add internal listener")}}function B(H,I){if(!g[H]){g[H]=[];if(h&&F){j(h,H)}}g[H].push(I);return y}y.dispatchEvent=function(J){if(g[J]){var I=a.translateEventResponse(J,arguments[1]);for(var H=0;H<g[J].length;H++){if(typeof g[J][H]=="function"){g[J][H].call(this,I)}}}};y.dispatchInstreamEvent=function(H){if(A){A.dispatchEvent(H,arguments)}};function x(){if(F){var J=arguments[0],H=[];for(var I=1;I<arguments.length;I++){H.push(arguments[I])}if(typeof h!="undefined"&&typeof h[J]=="function"){if(H.length==2){return(h[J])(H[0],H[1])}else{if(H.length==1){return(h[J])(H[0])}else{return(h[J])()}}}return null}else{q.push(arguments)}}y.playerReady=function(I){F=true;if(!h){y.setPlayer(document.getElementById(I.id))}y.container=document.getElementById(y.id);for(var H in g){j(h,H)}B(e.JWPLAYER_PLAYLIST_ITEM,function(J){t={}});B(e.JWPLAYER_MEDIA_META,function(J){a.extend(t,J.metadata)});y.dispatchEvent(e.API_READY);while(q.length>0){x.apply(this,q.shift())}};y.getItemMeta=function(){return t};y.getCurrentItem=function(){return x("jwGetPlaylistIndex")};function v(J,L,K){var H=[];if(!L){L=0}if(!K){K=J.length-1}for(var I=L;I<=K;I++){H.push(J[I])}return H}return y};f.selectPlayer=function(h){var g;if(!a.exists(h)){h=0}if(h.nodeType){g=h}else{if(typeof h=="string"){g=document.getElementById(h)}}if(g){var i=f.playerById(g.id);if(i){return i}else{return f.addPlayer(new f(g))}}else{if(typeof h=="number"){return c[h]}}return null};f.playerById=function(h){for(var g=0;g<c.length;g++){if(c[g].id==h){return c[g]}}return null};f.addPlayer=function(g){for(var h=0;h<c.length;h++){if(c[h]==g){return g}}c.push(g);return g};f.destroyPlayer=function(i){var h=-1;for(var k=0;k<c.length;k++){if(c[k].id==i){h=k;continue}}if(h>=0){var l=c[h].id,g=document.getElementById(l+"_wrapper");if(!g){g=document.getElementById(l)}if(g){var j=document.createElement("div");j.id=l;g.parentNode.replaceChild(j,g)}c.splice(h,1)}return null}})(jwplayer);var _userPlayerReady=(typeof playerReady=="function")?playerReady:undefined;playerReady=function(b){var a=jwplayer.api.playerById(b.id);if(a){a.playerReady(b)}else{jwplayer.api.selectPlayer(b.id).playerReady(b)}if(_userPlayerReady){_userPlayerReady.call(this,b)}};(function(b){var c=b.events,a=c.state;b.api.instream=function(e,k,o,r){var j=e,d=k,i=o,l=r,g={},q={};function h(){j.callInternal("jwLoadInstream",o,r)}function n(s,t){d.jwInstreamAddEventListener(t,'function(dat) { jwplayer("'+j.id+'").dispatchInstreamEvent("'+t+'", dat); }')}function f(s,t){if(!g[s]){g[s]=[];n(d,s)}g[s].push(t);return this}function p(s,t){if(!q[s]){q[s]=[];f(c.JWPLAYER_PLAYER_STATE,m(s))}q[s].push(t);return this}function m(s){return function(u){var t=u.newstate,w=u.oldstate;if(t==s){var v=q[t];if(v){for(var x=0;x<v.length;x++){if(typeof v[x]=="function"){v[x].call(this,{oldstate:w,newstate:t,type:u.type})}}}}}}this.dispatchEvent=function(v,u){if(g[v]){var t=_utils.translateEventResponse(v,u[1]);for(var s=0;s<g[v].length;s++){if(typeof g[v][s]=="function"){g[v][s].call(this,t)}}}};this.onError=function(s){return f(c.JWPLAYER_ERROR,s)};this.onFullscreen=function(s){return f(c.JWPLAYER_FULLSCREEN,s)};this.onMeta=function(s){return f(c.JWPLAYER_MEDIA_META,s)};this.onMute=function(s){return f(c.JWPLAYER_MEDIA_MUTE,s)};this.onComplete=function(s){return f(c.JWPLAYER_MEDIA_COMPLETE,s)};this.onSeek=function(s){return f(c.JWPLAYER_MEDIA_SEEK,s)};this.onTime=function(s){return f(c.JWPLAYER_MEDIA_TIME,s)};this.onVolume=function(s){return f(c.JWPLAYER_MEDIA_VOLUME,s)};this.onBuffer=function(s){return p(a.BUFFERING,s)};this.onPause=function(s){return p(a.PAUSED,s)};this.onPlay=function(s){return p(a.PLAYING,s)};this.onIdle=function(s){return p(a.IDLE,s)};this.onInstreamClick=function(s){return f(c.JWPLAYER_INSTREAM_CLICK,s)};this.onInstreamDestroyed=function(s){return f(c.JWPLAYER_INSTREAM_DESTROYED,s)};this.play=function(s){d.jwInstreamPlay(s)};this.pause=function(s){d.jwInstreamPause(s)};this.seek=function(s){d.jwInstreamSeek(s)};this.destroy=function(){d.jwInstreamDestroy()};this.getState=function(){return d.jwInstreamGetState()};this.getDuration=function(){return d.jwInstreamGetDuration()};this.getPosition=function(){return d.jwInstreamGetPosition()};h()}})(jwplayer)};