// JavaScript Document/*!
/* jQueryTouch v0.0.6
* https://github.com/a-fung/jQueryTouch
*
* Copyright 2012 Man Kwan Liu
* Released under the Apache License Version 2.0
* http://www.apache.org/licenses/
*
* Date: Wed Oct 2012 23:14:09 GMT-0700 (Pacific Daylight Time)
*/
(function($){$.fn.touchInit=function(f){if(!f||typeof(f)!="object"){f={}}f=$.extend({preventDefault:true,mouse:true,pen:true,maxtouch:-1,prefix:""},f);if(f.maxtouch==0)return this;if(window.navigator.msPointerEnabled){if(f.preventDefault){var g=this.data("_touchtrack-ms-touch-action");if(g==undefined||g==null){g=[]}g[f.prefix+"_track"]=true;this.data("_touchtrack-ms-touch-action",g);this.css("-ms-touch-action","none")}}this.each(function(){var e=this,_touch_handler=null,touches=null;$(this).data(f.prefix+"_touches",[]);_touch_handler=function(a){var b=[];if(a.pointerType){if((a.pointerType==a.MSPOINTER_TYPE_MOUSE&&!f.mouse)||(a.pointerType==a.MSPOINTER_TYPE_PEN&&!f.pen)){return}b[0]={id:a.pointerId,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY}}else if(a.changedTouches){for(var i=0;i<a.changedTouches.length;i++){b[i]={id:a.changedTouches[i].identifier,clientX:a.changedTouches[i].clientX,clientY:a.changedTouches[i].clientY,pageX:a.changedTouches[i].pageX,pageY:a.changedTouches[i].pageY,screenX:a.changedTouches[i].screenX,screenY:a.changedTouches[i].screenY}}}else{b[0]={id:-1,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY}}for(var i=0;i<b.length;i++){var c=b[i],currentTouchIndex=null,newTouch=true,eventType;touches=$(e).data(f.prefix+"_touches");for(var j=0;j<touches.length;j++){if(touches[j].id==c.id){newTouch=false;touches[j]=c;$(e).data(f.prefix+"_touches",touches);currentTouchIndex=j;break}}if(newTouch&&this!=e){continue}if(a.type=="touchstart"||a.type=="MSPointerDown"||a.type=="mousedown"){if(newTouch){if(f.maxtouch<0||f.maxtouch>touches.length){touches[touches.length]=c;$(this).data(f.prefix+"_touches",touches)}else{continue}if(a.pointerType){document.addEventListener("MSPointerMove",_touch_handler,false);document.addEventListener("MSPointerUp",_touch_handler,false);document.addEventListener("MSPointerCancel",_touch_handler,false)}else{document.addEventListener("touchmove",_touch_handler,false);document.addEventListener("touchend",_touch_handler,false);document.addEventListener("touchcancel",_touch_handler,false);if(f.mouse){$(document).on("mousemove",_touch_handler);$(document).on("mouseup",_touch_handler)}}}eventType="start"}else if(a.type=="touchmove"||a.type=="MSPointerMove"||a.type=="mousemove"){eventType="move"}else if(a.type=="touchend"||a.type=="touchcancel"||a.type=="MSPointerUp"||a.type=="MSPointerCancel"||a.type=="mouseup"){if(touches.length-1!=currentTouchIndex){touches[currentTouchIndex]=touches[touches.length-1]}touches.pop();$(e).data(f.prefix+"_touches",touches);if(touches.length==0){if(a.pointerType){document.removeEventListener("MSPointerMove",_touch_handler,false);document.removeEventListener("MSPointerUp",_touch_handler,false);document.removeEventListener("MSPointerCancel",_touch_handler,false)}else{document.removeEventListener("touchmove",_touch_handler,false);document.removeEventListener("touchend",_touch_handler,false);document.removeEventListener("touchcancel",_touch_handler,false);if(f.mouse){$(document).off("mousemove",_touch_handler);$(document).off("mouseup",_touch_handler)}}}eventType="end"}else{continue}var d=$.Event(f.prefix+"touch_"+eventType);d=$.extend(d,{originalType:a.type,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,screenX:c.screenX,screenY:c.screenY,touches:touches});try{$(e).trigger(d)}catch(error){console.log(error)}}if(f.preventDefault){a.preventDefault&&a.preventDefault();return false}};if(window.navigator.msPointerEnabled){this.addEventListener("MSPointerDown",_touch_handler,false)}else{this.addEventListener("touchstart",_touch_handler,false);f.mouse&&$(this).on("mousedown",_touch_handler)}$(this).data(f.prefix+"_touch_handler",_touch_handler)});return this};$.fn.touchDispose=function(b){if(!b||typeof(b)!="string"){b=""}if(window.navigator.msPointerEnabled){var c=this.data("_touchtrack-ms-touch-action");if(c==undefined||c==null){c=[]}delete c[options.prefix+"_track"];this.data("_touchtrack-ms-touch-action",c);var i=0;for(j in c)i++;if(i==0)this.css("-ms-touch-action","")}this.each(function(){var a=$(this).data(b+"_touch_handler");this.removeEventListener("MSPointerDown",a,false);this.removeEventListener("touchstart",a,false);$(this).off("mousedown",a);document.removeEventListener("MSPointerMove",a,false);document.removeEventListener("MSPointerUp",a,false);document.removeEventListener("MSPointerCancel",a,false);document.removeEventListener("touchmove",a,false);document.removeEventListener("touchend",a,false);document.removeEventListener("touchcancel",a,false);$(this).off("mousemove",a);$(this).off("mouseup",a);$(this).removeData(b+"_touch_handler");$(this).removeData(b+"_touches")});return this}})(jQuery);