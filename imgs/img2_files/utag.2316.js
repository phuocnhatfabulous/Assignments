//tealium universal tag - utag.2316 ut4.0.202009031800, Copyright 2020 Tealium.com Inc. All Rights Reserved.
var dotq=dotq||[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={};u.extend=[function(a,b){try{if(1){utag.onload_flag=utag.onload_flag||{};if(!utag.onload_flag[id]){if(document.readyState!="complete"){if(typeof ctm!=="undefined"&&typeof ctm.util!=="undefined"&&ctm.util.delayMediaLoadTagArray instanceof Array){ctm.util.delayMediaLoadTagArray.push(id);}
return false;}
utag.onload_flag[id]=1;}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"base_url":"https://s.yimg.com/wi/ytc.js","projectId":"1000177780039","pixelId":"438561","coloId":"SP","qstrings":{},"tagid":"","et":"custom","ec":"","ea":"","el":"","ev":"","gv":""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.order_subtotal=u.data.order_subtotal||b._csubtotal||"";u.loader_cb=function(){u.initialized=true;if(u.data.et){u.data.qstrings.et=u.data.et;}
if(u.data.ec){u.data.qstrings.ec=u.data.ec;}
if(u.data.ea){u.data.qstrings.ea=u.data.ea;}
if(u.data.el){u.data.qstrings.el=u.data.el;}
if(u.data.ev){u.data.qstrings.ev=u.data.ev;}
u.data.gv=u.data.gv||u.data.order_subtotal||"";if(u.data.gv){var gv=parseFloat(u.data.gv,10);if(isNaN(gv)===false)
u.data.qstrings.gv=gv;}
dotq.push({"projectId":u.data.projectId,"properties":{"pixelId":u.data.pixelId,"qstrings":u.data.qstrings}});YAHOO.ywa.I13N.fireBeacon(dotq);};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb();}};if(u.initialized){u.loader_cb();}else{u.queue.push({"data":u.data});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_2316"});}}
}};utag.o[loader].loader.LOAD(id);}("2316","cisco.cdc"));}catch(error){utag.DB(error);}
