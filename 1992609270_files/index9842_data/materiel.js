
function inputCheck(b,a){if(!VALUES[b.id].value){return}if(a=="b"&&""==b.value){b.value=VALUES[b.id].value}if(a=="f"&&b.value==VALUES[b.id].value){b.value=""}b.className=VALUES[b.id].value==b.value?b.id+"_def":b.id+"_nor"}function selectCheck(b,a){if(!VALUES[b.id].value){return}if(b.tagName.toLowerCase()=="select"){if(a&&a=="focus"){b.className=b.id+"_nor"}else{b.className=b.value==VALUES[b.id].value?b.id+"_def":b.id+"_nor"}}else{b.className=b.getElementsByTagName("input")[0].value==VALUES[b.id].value?"soSelect "+b.id+"_def":"soSelect "+b.id+"_nor"}}function initInputSelectEvent(){var a=U.GI("wrapper");var b=a.getElementsByTagName("input");for(var c=0;c<b.length;c++){if(b[c].type=="text"){if(VALUES[b[c].id].value&&VALUES[b[c].id].value==b[c].value){b[c].className=b[c].id+"_def"}b[c].onblur=function(){inputCheck(this,"b")};b[c].onfocus=function(){inputCheck(this,"f")}}}var e=a.getElementsByTagName("select");for(c=0;c<e.length;c++){selectCheck(e[c]);e[c].onblur=function(){selectCheck(this)};e[c].onmousedown=function(){selectCheck(this,"focus")}}var d=U.GC("soSelect",a,"div");for(c=0;c<d.length;c++){selectCheck(d[c]);d[c].onclick=function(){selectCheck(this)}}}var Log={};Log.high=function(a){U.addClass(a,"ec_inputerr")};Log.low=function(){var b=U.GC("ec_inputerr",U.GI("wrapper"));if(b.length>0){for(var a=0;a<b.length;a++){U.removeClass(b[a],"ec_inputerr")}}};function passwordChange(b){if(b.type=="text"){b.style.display="none";var c=b.id.substring(4);U.GI(c).style.display="block";U.GI(c).value="";U.GI(c).focus()}else{var c="txt_"+b.id;var a=b.value;if(a.length<1){b.style.display="none";U.GI(c).style.display="block"}}}function submitSuccess(){U.GI("formPage").style.display="none";U.GI("successPage").style.display=""}function truncation(d){var a;for(var b=0,e=0;b<d.length;b++){e++;if(d.charCodeAt(b)>127){e++}}a=e;return a}var U={TRIM:function(c){var b=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)","g");var a=function(d){return String(d).replace(b,"")};return a(c)},GI:function(a){if(a.constructor==String){a=document.getElementById(a)}if(!a){return null}return a},GC:function(j,e,b){var k=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)","g");var l=[];var d=function(i){return String(i).replace(k,"")};var h,f,a,c;if(!(j=d(j))){return null}if("undefined"==typeof e||e==null){e=document}else{e=U.GI(e);if(!e){return l}}b&&(b=d(b).toUpperCase());if(e.getElementsByClassName){a=e.getElementsByClassName(j);h=a.length;for(f=0;f<h;f++){c=a[f];if(b&&c.tagName!=b){continue}l[l.length]=c}}else{var g=function(i){return String(i).replace(new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])","g"),"\\\x241")};j=new RegExp("(^|\\s)"+g(j)+"(\\s|\x24)");a=b?e.getElementsByTagName(b):(e.all||e.getElementsByTagName("*"));h=a.length;for(f=0;f<h;f++){c=a[f];j.test(c.className)&&(l[l.length]=c)}}return l},CE:function(a,c,b){var f=document.createElement(a);if(c!=null){for(var d in c){if(d=="innerHTML"){f[d]=c[d]}else{f.setAttribute(d,c[d])}}}if(b){b.appendChild(f)}return f},first:function(a){var b=a.firstChild;while(b&&b.nodeType!=1){b=b.nextSibling}return b},addEvent:function(c,a,b){if(c==null){return}if(document.attachEvent){c.attachEvent("on"+a,b)}else{c.addEventListener(a,b,false)}},removeEvent:function(c,a,b){if(c==null){return}if(document.detachEvent){c.detachEvent("on"+a,b)}else{c.removeEventListener(a,b,false)}},getPosition:function(c,b){if("undefined"==typeof b){b=document.body}var e=c.offsetLeft,d=c.offsetTop;while((c=c.offsetParent)){var a=c.tagName.toUpperCase();if(a=="HTML"||a=="BODY"){break}e+=(c.offsetLeft-c.scrollLeft)||0;d+=(c.offsetTop-c.scrollTop)||0;if(c==b){e-=b.offsetLeft;d-=b.offsetTop;break}}return{left:e,top:d}},css:function(b,a){for(var c in a){b.style[c]=a[c]}},addClass:function(a,b){a=U.GI(a);a.className+=" "+b;return a},removeClass:function(d,e){d=U.GI(d);var b=d.className.split(/\s+/).sort(),f=e.split(/\s+/).sort(),c=b.length,a=f.length;for(;c&&a;){if(b[c-1]==f[a-1]){b.splice(--c,1)}else{if(b[c-1]<f[a-1]){a--}else{c--}}}d.className=b.join(" ");return d},pad:function(c,b){var d="",a=(c<0);string=String(Math.abs(c));if(string.length<b){d=(new Array(b-string.length+1)).join("0")}return(a?"-":"")+d+string},formatDate:function(a,f){if("string"!=typeof f){return a.toString()}function d(l,k){f=f.replace(l,k)}var b=U.pad,g=a.getFullYear(),e=a.getMonth()+1,j=a.getDate(),h=a.getHours(),c=a.getMinutes(),i=a.getSeconds();d(/yyyy/g,b(g,4));d(/yy/g,b(g.toString().slice(2),2));d(/MM/g,b(e,2));d(/M/g,e);d(/dd/g,b(j,2));d(/d/g,j);d(/HH/g,b(h,2));d(/H/g,h);d(/hh/g,b(h%12,2));d(/h/g,h%12);d(/mm/g,b(c,2));d(/m/g,c);d(/ss/g,b(i,2));d(/s/g,i);return f},parseDate:function(a){var b=a.split("-");if(b.length==3&&!isNaN(b[0])&&!isNaN(b[1])&&!isNaN(b[2])){b=new Date(parseInt(b[0],10),parseInt(b[1],10)-1,parseInt(b[2],10));return b}return null},contains:function(a,e,d){if("undefined"==typeof a||"undefined"==typeof e||!a.length){return false}var b=a.length;for(var c=0;c<b;c++){if((d&&a[c]==e)||(!d&&e.indexOf(a[c])==0)){return true}}return false},ie:function(){if(/msie (\d+\.\d)/i.test(navigator.userAgent)){return document.documentMode||parseFloat(RegExp["\x241"])}},baiduAd:function(a){var b=document.getElementById("kw");new Image().src=clkmk+"plid="+plid+"&xp="+a+"&r="+new Date().valueOf()+(b!=null?"&q="+encodeURIComponent(b.value):"")}};var validator=(function(){var c=[];var a;var b;this.add=function(h,f,g,d){var e={};e.elm=h;e.rule=f;e.msg=g;e.position=d;c.push(e)};this.add=function(e){if(e==null){return}e=e||{};c.push(e);if("undefined"!=typeof e.elm){U.addEvent(e.elm,"mousedown",function(){d(this)});function d(f){if(validator.errorContainer&&f==validator.errorContainer.holder){Log.low();U.css(validator.errorContainer,{visibility:"hidden"});validator.setErrorBGVisible(false)}}}};this.setErrorBGVisible=function(d){if(d){this.errorBG.style.width=parseInt(this.errorContainer.offsetWidth)+"px";this.errorBG.style.height=parseInt(this.errorContainer.offsetHeight)+"px";this.errorBG.style.top=this.errorContainer.style.top;this.errorBG.style.left=this.errorContainer.style.left;this.errorBG.style.zIndex=this.errorContainer.style.zIndex-1;this.errorBG.style.visibility="visible"}else{this.errorBG.style.visibility="hidden"}};this.valid=function(){Log.low();U.css(this.errorContainer,{visibility:"hidden"});this.setErrorBGVisible(false);for(var f=0;f<c.length;f++){var j=c[f];if(hasnovalidate(j.elm)&&!j.rule()){this.errorContainer.innerHTML=j.msg;var e,d;var k=U.getPosition(j.elm,U.GI("wrapper"));var h=j.elm.offsetWidth;var l=j.elm.offsetHeight;if(j.position&&j.position=="right"){e=k.left+h-this.errorContainer.offsetWidth;d=k.top;d+=l}else{e=k.left;d=k.top;d+=l}var g=(h-20-2)<=0?(j.elm.parentNode.offsetWidth-20-2):(h-20-2);U.css(this.errorContainer,{left:e+"px",top:d+"px",visibility:"visible",width:g+"px"});this.setErrorBGVisible(true);this.errorContainer.holder=j.elm;Log.high(j.elm);return false}}return true};this.setDefault=function(e){for(var d in e){this[d]=e[d]}};this.hideErrorTipMessage=function(){Log.low();U.css(this.errorContainer,{visibility:"hidden"});this.setErrorBGVisible(false)};return{add:this.add,valid:this.valid,setDefault:this.setDefault,setErrorBGVisible:this.setErrorBGVisible,hideErrorTipMessage:this.hideErrorTipMessage}})();var mcui=(function(){this.Selector=(function(){var b=false;var c=0;var d=function(){var g=U.GC("options",sForm,"ul");for(var f=0,e=g.length;f<e;f++){g[f].style.display="none"}};var a=function(f){f=f||window.event;var g=f.target||f.srcElement;while((g=g.parentNode)){if(g.className&&g.className.indexOf("soSelect")>-1){return}}d()};this.GetValue=function(e){return e.getElementsByTagName("input")[0].value};this.SetSelectedIndex=function(h,g){var f=U.GC("options",h,"ul")[0].getElementsByTagName("a");if(g>=0&&f&&g<f.length){var e=f[g];U.GC("option_current",h,"div")[0].innerHTML=e.innerHTML;if(e.getAttribute("data-value")!=null){h.getElementsByTagName("input")[0].value=e.getAttribute("data-value")}else{h.getElementsByTagName("input")[0].value=e.innerHTML}}};this.Init=function(f){f.style.zIndex=10-c;c++;if(!b){U.addEvent(document.body,"click",a);b=true}var e=U.GC("option_current",f,"div")[0];U.addEvent(e,"click",function(i){i=i||window.event;var j=this.parentNode||i.srcElement.parentNode.parentNode;var g=U.GC("options",j,"ul")[0];var h=g.style.display;d();if(h=="block"){g.style.display="none"}else{g.style.display="block"}return false});U.addEvent(U.GC("option_arrow",f,"div")[0],"click",function(i){i=i||window.event;var j=this.parentNode||i.srcElement.parentNode.parentNode.parentNode.parentNode;var g=U.GC("options",j,"ul")[0];var h=g.style.display;d();if(h=="block"){g.style.display="none"}else{g.style.display="block"}return false})};this.SetSelectedItem=function(f,e){if(f==null||e==null){return}U.GC("option_current",f,"div")[0].innerHTML=e.text;f.getElementsByTagName("input")[0].value=e.value};this.AddItem=function(i,h){var g=U.GC("options",i,"ul")[0];var e=U.CE("li",null,g);var f=U.CE("a",{href:"javascript:;","data-value":h.value,title:h.text,innerHTML:h.text},e);U.addEvent(f,"click",function(l){l=l||window.event;var m=this.parentNode||l.srcElement.parentNode;var k=m.parentNode.parentNode;U.GC("option_current",k,"div")[0].innerHTML=this.innerHTML||l.srcElement.innerHTML;U.GC("options",k,"ul")[0].style.display="none";var j=this.getAttribute?this:l.srcElement;if(j.getAttribute("data-value")!=null){k.getElementsByTagName("input")[0].value=j.getAttribute("data-value")}else{k.getElementsByTagName("input")[0].value=j.innerHTML}if("undefined"!=typeof k.onvaluechanged){k.onvaluechanged()}})};this.AddItems=function(j,f){if(f&&f.length){for(var g=0,e=f.length;g<e;g++){var h=f[g];mcui.Selector.AddItem(j,{text:h.text,value:h.value})}}};this.ClearItem=function(f){var e=f.getElementsByTagName("ul")[0];e.innerHTML="";U.GC("option_current",f,"div")[0].innerHTML=""};return{GetValue:this.GetValue,Init:this.Init,AddItem:this.AddItem,AddItems:this.AddItems,ClearItem:this.ClearItem,SetSelectedIndex:this.SetSelectedIndex,SetSelectedItem:this.SetSelectedItem}})();return{Selector:this.Selector}})();function o(a){document.writeln(a)}function initPrSelect(c,b){c.innerHTML="";U.CE("option",{value:"null",innerHTML:"所在省*",title:"所在省*"},c);for(var a=0;a<b.length;a++){U.CE("option",{value:b[a]["c"],innerHTML:b[a]["n"],title:b[a]["n"]},c)}}function initCitySelect(c,b){c.innerHTML="";U.CE("option",{value:"null",innerHTML:"所在市*",title:"所在市*"},c);if(b){for(var a=0;a<b.length;a++){U.CE("option",{value:b[a]["c"],innerHTML:b[a]["n"],title:b[a]["lp"]},c)}}}function initSelect(c,b){c.innerHTML="";for(var a=0;a<b.length;a++){U.CE("option",{value:b[a].value,innerHTML:b[a].text,title:b[a].text},c)}};