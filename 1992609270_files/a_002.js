var initCpro=function(){if(PageData.second_class!="��ҵ����"&&PageData.forum_name!="�ٶ�"&&PageData.show_cpro){$.JsLoadManager.use("http://cpro.baidu.com/cpro/ui/post.js",function(){window.arrBaiduCproConfig=[];arrBaiduCproConfig.n="baidupost_cpr";arrBaiduCproConfig.tm=24;arrBaiduCproConfig.cm=60;arrBaiduCproConfig.um=24;arrBaiduCproConfig.rad=1;arrBaiduCproConfig.cad=1;arrBaiduCproConfig.wn=1;arrBaiduCproConfig.bg="#ffffff";arrBaiduCproConfig.tt="#000000";arrBaiduCproConfig.ct="#000000";arrBaiduCproConfig.url="#000000";arrBaiduCproConfig.ta="right";arrBaiduCproConfig.tl="top";arrBaiduCproConfig.tn="baiduCPROiknow";arrBaiduCproConfig.hn=3;arrBaiduCproConfig.at="text";var c={keys:["title","desc","showUrl","ckUrl","redWord","picUrl"],template:function(f){var e="onmouseout=\"return f_s(' ');\" ";var g="onmouseover=\"return f_s('������: "+f.showUrl+"');\"";var d="";d+="<div>";d+='<a style="display:block;width:100%;"'+e+g+' href="'+f.ckUrl+'" target="_blank">';d+='<u style="display:block;">'+Page.subByteFix(f.title,25,"..")+"</u>";if((typeof(f.picUrl)=="string")&&(f.picUrl!=="")){d+='<img src="'+f.picUrl+'" width="65" height="65"/>'}d+=Page.subByteFix(f.desc,60,"..");d+='<br/><span style="white-space:nowrap">'+Page.subByteFix(f.showUrl,31,"..")+"</span>";d+="</a>";d+="</div><br/>";return d},showCpro:function(d){return this.template(d)}};if(typeof baiduCproTableBuild=="undefined"){window.baiduCproTableBuild=function(o){var d=[],m=[],p=[],q="",g=0,i={},n="",f=0;d=o.split("\n");f=d.length;for(var l=0,h=f;l<h;l++){m=d[l].split("\t");g=m.length;p=c.keys;q+=function(r,j){for(var k=0;k<j;k++){i[p[k]]=r[k]}return c.showCpro(i)}(m,p.length)}var e=document.getElementById("cproshow");e.innerHTML+=q}}scr=document.createElement("script");scr.src=f_u("");document.body.appendChild(scr)})}var a=document.getElementById("cproshow");if(a){var b="fr=tb0_forum&st_mod=cpro&st_fc="+PageData.first_class+"&st_sc="+PageData.second_class+"&st_kw="+PageData.forum_name;a.onmousedown=function(){Stats.sendRequest(b)}}};_.Module.define({path:"pb/widget/Top10",sub:{initial:function(a,b){this.j_tieba_top10=$("#j_tieba_top10");this.tiezi_top10=this.j_tieba_top10.find(".tieba_top10");if(!PageData.is_ipad){this.jq_window=$(window);this.firstShowTop10();this.bindEvents();this.fixedLeft=this.j_tieba_top10.offset().left;this.initHack()}else{this.ipadOnly()}},ipadOnly:function(){this.tiezi_top10.attr("class","").show()},firstShowTop10:function(){this.tiezi_top10.show();this.tiezi_top10.addClass("tieba_top10_absolute")},bindEvents:function(){var a=this;a.addScrollListener();a.addResizeListener()},initHack:function(){if($.browser.msie&&$.browser.version<7){this.tiezi_top10.addClass("tieba_top10_hack")}},getLimitTop:function(){var a=$("div.left_section");this.minTop=this.j_tieba_top10.offset().top;this.maxTop=a.offset().top+a.height()-this.tiezi_top10.height()},addScrollListener:function(){var a=this;this.jq_window.bind("scroll",function(){a.showTop10()})},addResizeListener:function(){var a=this;this.jq_window.bind("resize",function(){a.resizeOn()})},resizeOn:function(){var a=this.tiezi_top10.parent();if(a.attr("id")!="j_tieba_top10"){if($.browser.msie&&$.browser.version<7){this.fixedLeft=this.j_tieba_top10.offset().left}else{this.fixedLeft=this.j_tieba_top10.offset().left-this.jq_window.scrollLeft()}this.tiezi_top10.css({left:this.fixedLeft})}},showTop10:function(){var b=this.jq_window.scrollTop()+10;var a=this.tiezi_top10.parent();this.getLimitTop();if(b<this.minTop){if(a.attr("id")!="j_tieba_top10"){this.j_tieba_top10.append(this.tiezi_top10);this.tiezi_top10.addClass("tieba_top10_absolute");this.tiezi_top10.attr({style:""})}this.tiezi_top10.show()}else{if(b>=this.minTop&&b<this.maxTop){if(a.attr("id")=="j_tieba_top10"){$("body").append(this.tiezi_top10);this.tiezi_top10.removeClass("tieba_top10_absolute")}if($.browser.msie&&$.browser.version<7){this.fixedLeft=this.j_tieba_top10.offset().left}else{this.fixedLeft=this.j_tieba_top10.offset().left-this.jq_window.scrollLeft()}this.tiezi_top10.css({left:this.fixedLeft});this.tiezi_top10.show()}else{this.tiezi_top10.hide()}}}}});var RpRecommend=function(){this.body=$("body");this.wraper=$("#rp_recommend_wraper");this.content=$("#re_recommend_content");this.leftSec=$("div.left_section");this.leftSecH=this.leftSec.height();this.rightSec=$("div.right_section");this.rightSecH=this.rightSec.height();this.domContent=this.content.get(0);this.fixedLeft=this.wraper.offset().left;this.leftTop=0;this.maxTop=0};RpRecommend.request=false;RpRecommend.prototype={start:function(){this.mendIe6();this.getLimitedTop();this.getRp();this.bindEvents();this.showRpRecommend();this.updateRpRecPos()},mendIe6:function(a){if($.browser.msie&&$.browser.version<7){this.content.addClass("rp_recommend_for_ie6")}},bindEvents:function(){this.scrollListener();this.resizeListener()},showRpRecommend:function(){this.content.show();this.content.addClass("rp_recommend_absolute")},getLimitedTop:function(){this.leftTop=this.leftSec.offset().top+this.leftSecH;this.maxTop=this.leftTop-this.content.height()},scrollListener:function(){var a=this;$(window).bind("scroll",function(){a.fixedLeft=a.wraper.offset().left;a.updateRpRecPos()})},resizeListener:function(){var a=this;$(window).bind("resize",function(){a.fixedLeft=a.wraper.offset().left;a.updateRpRecPos(true)})},updateRpRecPos:function(c){var b=$(window),a=b.scrollTop(),g=this.wraper.offset().top,e=this.content.height();this.leftSecH=this.leftSec.height();this.rightSecH=this.rightSec.height();this.maxTop=this.leftTop-e;if(this.leftSecH<(this.rightSecH+e+10)){this.content.hide();return true}var d=(a<g||a>=g&&a<this.maxTop);if(d&&this.leftSecH>1500){this.content.show()}else{this.content.hide();return}if(!($.browser.msie&&$.browser.version<7)){if(a>g&&this.domContent.fix||a<g&&!this.domContent.fix){if(this.domContent.fix){var f=this.fixedLeft-b.scrollLeft();this.content.css("left",f)}else{this.content.css("left",0)}}else{this.domContent.style.position=this.domContent.fix?"":"fixed";this.domContent.fix=!this.domContent.fix;if(this.domContent.fix){var f=this.fixedLeft-b.scrollLeft();this.content.css("left",f)}else{this.content.css("left",0)}}}else{if(a<g){this.wraper.append(this.content);this.content.addClass("rp_recommend_absolute");this.content.attr("style","");this.content.show()}else{if(a>=(g+30)&&a<(this.maxTop-30)){this.body.append(this.content);this.content.css("left",this.fixedLeft);this.content.removeClass("rp_recommend_absolute");this.content.show()}else{this.content.hide()}}}},getRp:function(){if(RpRecommend.request){return}RpRecommend.request=true;var b=new Date().getTime();var a=typeof PDC!="undefined"?PDC._render_start:0;var c=PageData.thread.id+Page.subByteFix(PageData.forum_name_hj,8)+Page.subByteFix(PageData.thread.title,8);$.JsLoadManager.use(["http://sfile.baidu.com/js/bdrecommend.js?v="+PageData.TB_JSCSSTAG],function(){if(PageData.thread.thread_type!="1"&&PageData.is_uber){BdRecommend.create({rpid:"110",container:"re_recommend_content",tn:PageData.is_lzl=="1"?"rp_xuanfu":"rp_xuanfu",plugins:"VisibleMonitor",staticpage:"http://tieba.baidu.com/tb/static-pb/html/rp.html",wd:c,sid:PageData.ecom_sid,data:{tiebaname:PageData.forum_name_hj,tiebatitle:PageData.thread.title},query:{t1:(b-a),d1:b,total_page:PageData.all_page_num,current_page:PageData.curr_page_num,is_last_page:PageData.is_last_page,tieba_name:PageData.forum_name_hj,tieba_cate1:PageData.first_class,tieba_cate2:PageData.second_class,uid:Tbs.rp,tid:PageData.thread.id}})}})}};_.Module.define({path:"pb/widget/ThreadFooter",sub:{initial:function(){this._urlTong()},_urlTong:function(){$(function(){var a=function(d){if(d&&(d.indexOf("http")==0||d.indexOf("www")==0)&&!(d.indexOf("http://tieba.baidu.com")>-1)){$.tb.Stats.sendRequest("http://static.tieba.baidu.com/tb/img/hive.gif",{tb_url:encodeURIComponent(d),tb_uid:PageData.user.id,tb_tid:PageData.thread.id})}};var b=$("div .j_lzl_container");var c=$("div .d_post_content").find("a");c.each(function(){this.onclick=function(d){a($(this).html())}});b.each(function(){$(this).delegate("a","click",function(h){var g=$(h.target),d=g.parent(),f=d.attr("class");if(f=="lzl_content_main"){a(g.html())}})})})}}});window.Common_GoTop=function(){var c=false,b={id:"goTop","class":"goTop goTop_self",href:"#"},d="<style>html{_background:url(about:blank) fixed;}</style>";if($.browser.msie&&$.browser.version<7){b["class"]+=" goTop_ie6";$("body").append(d)}$("<a>").attr(b).bind("click",function(){Common_ToTop();return false}).appendTo("body");var e=$("#goTop");var a=$("#container").offset().left-e.width()-5;if(a<0){e.addClass("goTop_1024")}var f;setTimeout(function(){$(window).bind("scroll",function(){if(f){clearTimeout(f)}f=setTimeout(function(){if($(window).scrollTop()>0){if(!c){e.fadeIn(500);c=true}}else{if(c){e.fadeOut();c=false}}},500)})},500)};window.Common_ToTop=function(){var c=null;var b=$(window).scrollTop();if($.browser.msie){window.scrollTo(0,0)}else{function a(){b=Math.floor(b/2);window.scrollTo(0,b);if(b>2){c=setTimeout(a,40)}else{window.scrollTo(0,0);clearTimeout(c)}}a()}};_.Module.define({path:"pb/component/NoAutoVideo",sub:{initial:function(){this.postWrapper=$("#j_p_postlist");this.videoElem=null;this.run()},run:function(){this._delMusic();if(PageData.is_ipad){this._delIpadFlash()}else{this._delFlash()}},_delMusic:function(){var b=this.postWrapper.find(".BDE_Music"),a=this;$.each(b,function(d,e){var f=$.tb.escapeHTML($(e).attr("src"));f=f.replace(/autoplay=false/ig,"autoPlay=true");var c=$('<img style="cursor:pointer;display:block;" src="http://tb2.bdstatic.com/tb/static-pb/img/no_music_auto.png">');$(e).replaceWith(c);c.bind("click",function(){var g=a._genericMusicImage(f);$(this).fadeOut(100,function(){$(this).replaceWith(g)})})})},_genericMusicImage:function(b){var a='<embed width="402" height="95" class="BDE_Music" src="'+b+'" scale="noborder" allowscriptaccess="never" menu="false" loop="false" play="true" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" allowfullscreen="true" style="display:block;">';return $(a)},_delIpadFlash:function(){var a=this,b=this.postWrapper.find(".BDE_Flash");$.each(b,function(d,f){if($(f).attr("id")=="voteFlash"){return true}var g=$(f).attr("vsrc"),e=null;if(g&&g!==""){g=$.tb.escapeHTML(g);e=$('<img src="http://tb2.bdstatic.com/tb/static-pb/img/no_autovideo_2.png">');var c=$('<a target="_blank" href="'+g+'"></a>');c.append(e);if($(f).parent().attr("class")!=="summary"){var h=$('<br/>��Դ��<a target="_blank" href="'+g+'">'+g+"</a>");$(f).after(h)}$(f).replaceWith(c);c.bind("click",function(i){i.preventDefault();window.open($(this).attr("href"))})}else{e=$('<img src="http://tb2.bdstatic.com/tb/static-pb/img/noflash.png" alt="���豸�ݲ�֧�ִ���Ƶ����">');$(f).replaceWith(e)}})},_delFlash:function(){var b=this,c=this.postWrapper.find(".BDE_Flash");if(c.length<1){return}var a=true;$.each(c,function(f,i){if($(i).attr("id")=="voteFlash"){return true}var e=b._getAttrs(i);var h=e.vsrc;if(h&&h!==""&&$(i).parent().attr("class")!=="summary"){var j=$('<br>��Դ��<a target="_blank" href="'+h+'">'+h+"</a>");$(i).after(j)}var g=false;if(PageData.thread.is_ad===1&&a){var k=$(i).parents("div.l_post");var d=$.parseJSON(k.attr("data-field"));if(d.content.floor==1||d.content.floor==2){g=true}else{a=false}}if(g){b.videoElem=b._getAdReplaceElem()}else{b.videoElem=b._getReplaceElem()}$(i).replaceWith(b.videoElem);b._bindPlayEvent(e)})},_getReplaceElem:function(){var a="http://tb2.bdstatic.com/tb/static-pb/img/no_autovideo_1.png",c="http://tb2.bdstatic.com/tb/static-pb/img/no_autovideo_2.png",b=$(document.createElement("img"));b.attr("src",a);b.css("cursor","pointer");b.hover(function(){$(this).attr("src",c)},function(){$(this).attr("src",a)});return b},_getAdReplaceElem:function(){var c=$(document.createElement("div"));c.attr({id:"ad_video_area","class":"ad_video_area"});var b=$('<div class="ad_video_bg"></div>');b.css({background:"url('"+(PageData.thread.video_url||"")+"')"});var a=$('<div class="ad_play_btn"></div>');c.append(b).append(a).append($('<div class="ad_play_bar"></div>'));c.hover(function(){a.css({"background-position":"0 -64px"})},function(){a.css({"background-position":"0 0"})});c.bind("click",function(){if(document.images){var d=new Image();d.src=PageData.ecomStatDomain+"video.php?page=pb&forumid="+(PageData.forum_id||"")+"&tid="+(PageData.thread.id||"")+"&t="+new Date().getTime();d=null}});return c},_getAttrs:function(b){var a={};a.src=$.tb.escapeHTML($(b).attr("src"));a.width=$(b).attr("width");a.height=$(b).attr("height");a.scale=$(b).attr("scale");a.allowscriptaccess=$(b).attr("allowscriptaccess");a.menu=$(b).attr("menu");a.loop=$(b).attr("loop");a.play=$(b).attr("play");a.wmode=$(b).attr("wmode");a.type=$(b).attr("type");a.pluginspage=$(b).attr("pluginspage");a.allowfullscreen=$(b).attr("allowfullscreen");a.flashvars="playMovie=true&auto=1&adss=0&isAutoPlay=true";a.vsrc=$.tb.escapeHTML($(b).attr("vsrc")||"");return a},_bindPlayEvent:function(b){var a=this,c=a.videoElem;if($.browser.msie){c.bind("click",function(){var e;var d=b.src.match(/[\w]+\.[\w]+(?=\/)/i)[0];if(d!=null&&d.indexOf("cntv")>=0){e=$(a._createVideoTagForOtherBrowser(b))}else{e=$(a._createVideoTagForIEBrowser(b))}$(this).replaceWith($(e));$(e).css("display","block")})}else{c.bind("click",function(){var d=a._createVideoTagForOtherBrowser(b);var e=$(d);$(this).replaceWith($(e));$(e).css("display","block")})}},_createVideoTagForOtherBrowser:function(a){var b=new Array();b.push('<embed type="'+a.type+'" ');b.push(' class="BDE_Flash"');b.push(' src="'+a.src+'"');b.push(' width="'+a.width+'"');b.push(' height="'+a.height+'"');b.push(' scale="'+a.scale+'"');b.push(' allowscriptaccess="never"');b.push(' menu="'+a.menu+'"');b.push(' loop="'+a.loop+'"');b.push(' play="true"');b.push(' womode="'+a.wmode+'"');b.push(' pluginspage="'+a.pluginspage+'"');b.push(' allowfullscreen="true"');b.push(' flashvars="'+a.flashvars+'"');b.push(' style="visibility:visible;">');b.push("</embed>");return b.join("")},_createVideoTagForIEBrowser:function(c){var b=this;var e='<object style="visibility:visible" class="BDE_Flash" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,22,0" width="'+c.width+'" height="'+c.height+'">';var a=new Array();a.push('<param name="FlashVars" value="'+c.flashvars+'">');a.push('<param name="Movie" value="'+c.src+'">');a.push('<param name="Src" value="'+c.src+'">');a.push('<param name="WMode" value="Transparent">');a.push('<param name="Play" value="0">');a.push('<param name="Loop" value="-1">');a.push('<param name="Quality" value="High">');a.push('<param name="Menu" value="0">');a.push('<param name="AllowScriptAccess" value="never">');a.push('<param name="Scale" value="NoScale">');a.push('<param name="DeviceFont" value="0">');a.push('<param name="EmbedMovie" value="0">');a.push('<param name="BGColor" value="">');a.push('<param name="MovieData" value="">');a.push('<param name="AllowNetworking" value="all">');a.push('<param name="AllowFullScreen" value="true">');a.push(b._createVideoTagForOtherBrowser(c));var d=a.join("");return e+d+"</object>"}}});_.Module.define({path:"pb/component/UserVerify",sub:{pointCutConfig:null,initial:function(){if(PageData.is_uber){this.pointCutConfig=[{target:"pb/component/Ding",method:"excute",loginframe_mark:"pb_ding"}];if(PageData.thread.thread_type!=1){this.pointCutConfig=this.pointCutConfig.concat([{target:"pb/widget/ForumTitle/Favthread",method:"excute_open_remind",loginframe_mark:"pbfavt"},{target:"pb/widget/ForumTitle/Favthread",method:"excute_open_kept",loginframe_mark:"pbfavt"},{target:"pb/widget/ForumTitle/Favthread",method:"excute_cancel_remind",loginframe_mark:"pbfavt"},{target:"pb/widget/ForumTitle/Favthread",method:"excute_cancel_kept",loginframe_mark:"pbfavt"},{target:"pb/widget/ForumTitle/Favthread",method:"handler_clickmain",loginframe_mark:"pbfavt"}])}}else{this.pointCutConfig=[{target:"pb/component/Posts/Concern",method:"excute",loginframe_mark:"concern"},{target:"pb/component/Posts/Concern",method:"cancel",loginframe_mark:"concern"}]}this.init()},init:function(){$.each(this.pointCutConfig,function(b,a){_.Module.aop("around",{target:a.target,method:a.method},function(c){if(PageData.user.is_login){return c.proceed()}else{TbCom.process("User","buildLoginFrame",null,null,null,a.loginframe_mark||"")}})})}}});(function(){var c=["�����ǿ�","����","�䶯Ǭ��","�������ɴ�","��ӡ����","����������","��ҹ","ɱ��","ʥ��","��������"];var a="THREAD_PAGE_TIMES";var d=function(){var f=PageData.thread.id;$("ul.l_posts_num").delegate("a","click",function(n){var o=$.cookie(a);var m={},l=null,j="",h=true;if(o){if(o.indexOf("@3")>0){return}l=o.split("|");for(var k=0,g=l.length;k<g;k++){j=l[k].split("@");m[j[0]]=j[1]}}if(!m[f]){m[f]=1}else{m[f]++;if(m[f]==3){b($(this).attr("href"));h=false}}e(m);return h})};var e=function(i){var f=[],h;for(var g in i){h=[g,"@",i[g]].join("");f.push(h)}$.cookie(a,f.join("|"))};var b=function(f){var i=new $.modal();i.show();var g=$("#lzonly_cntn");var h=$('<div><div class="lzonly_tip"></div><div class="iknow_btn"></div><div class="lzonly_tip_close"></div></div>');h.css({position:"absolute","z-index":$.getzIndex,left:g.offset().left-190,top:g.offset().top-10});$("body").append(h);$(window).scrollTop(0);$("div.iknow_btn,div.lzonly_tip_close").bind("click",function(){h.remove();i.remove();location.href=f});$(window).bind("resize",function(){h.css({left:g.offset().left-190})})};if(!PageData.is_login&&PageData.is_lzl==1&&PageData.is_uber&&$.inArray(PageData.forum_name,c)!=-1){d()}})();(function(d,e){e.getQueryParam=function(g,f){var h=new RegExp("(^|&)"+g+"=([^&]*)(&|$)");var i=e.location.search.substr(1).match(h);if(i!==null){return f?unescape(i[2]):i[2]}return null};var c;var b=function(){c=e.setInterval(function(){var f=(typeof(e.bdPass_api_loginLite_loaded)!="undefined");if(f){e.clearInterval(c);c=null;var g=PageData.user.is_login;if(!g){bdPass.api.loginLite.getSuggestFormIndexArray(1);TbCom.process("User","buildLoginFrame",null,null,null,"recallmaillogin")}}},200)};var a=getQueryParam("src");if(a=="recallmail"){d(b)}})(jQuery,window);var PopWidowHandle=function(b){var a={url:{P_GET:"/app/pop/bws/popup",P_POST:"/app/pop/commit/click"},delay:15,from_forum:"",page:""};this._option=$.extend(true,a,b);this._init()};PopWidowHandle.prototype={constructor:PopWidowHandle,_init:function(){var a=this;$(document).ready(function(){setTimeout(function(){a._getPopWindow()},a._option.delay*1000)})},_getPopWindow:function(){var b=this._option,a=this;$.tb.get(b.url.P_GET,{from_forum:b.from_forum,position:b.page},function(c){if(c.no==0){if(c.data.task_id){a._showPopWindow(c.data)}}})},_showPopWindow:function(d){this.data=d;var a=this._option;var c={styleId:d.style_id,templateObj:{title:d.title,content:d.content,button:d.button,note:d.note,link:d.link}};this.popWindow=new PopWindow(c);var b=this.popWindow;b.bind("closeSuccess",function(){$.tb.post(a.url.P_POST,{task_id:d.task_id,type:1,count:d.count},function(){})},true);b.bind("clickBtn",function(){$.tb.post(a.url.P_POST,{task_id:d.task_id,type:2,count:d.count},function(){})},true);b.showPop()}};_.Module.define({path:"frs/widget/Tool",sub:{initial:function(a){this.is_pb=a;this._setFixed();this._bindEvents()},_setFixed:function(){if($.browser.msie&&$.browser.version<7){$("#star_feed").addClass("star_feed_ie6")}},_bindEvents:function(){var a=$("#star_feed");var e=a.find("a.feed_icon_goto");var b=a.find(".star_feed_name");var d=a.find(".feed_icon_post");e.delayhover({enterDelay:300,leaveDelay:700,mouseenter:function(){b.clearDelayHoverTimer();b.show(200)},mouseleave:function(){b.hide(1000)}});b.delayhover({enterDelay:200,leaveDelay:800,mouseenter:function(){e.clearDelayHoverTimer();b.show(200)},mouseleave:function(){b.hide(1000)}});if(!this.is_pb){d.bind("click",function(){$.stats.sendRequest("fr=tb0_forum&st_type=post&page=frs");setTimeout(function(){$("#"+option_editor.title).focus()},50)});$("#tool_refresh").bind("click",function(f){$.stats.sendRequest("fr=tb0_forum&st_type=refresh&page=frs");Path.is_star=true;Path.refresh();return false});$("#star_feed").delegate(".star_feed_name_list a","mousedown",function(){$.stats.sendRequest("fr=tb0_forum&st_type=likeforums&page=frs")})}else{d.bind("click",function(){$.stats.sendRequest("fr=tb0_forum&st_type=post&page=pb");rich_postor.reply("0")});$("#tool_refresh").bind("click",function(f){$.stats.sendRequest("fr=tb0_forum&st_type=refresh&page=pb");window.location.reload()});$("#star_feed").delegate(".star_feed_name_list a","mousedown",function(){$.stats.sendRequest("fr=tb0_forum&st_type=likeforums&page=pb")})}var c=a.find(".feed_help");if(!$.cookie("STAR_TOOL_TIP")){$.cookie("STAR_TOOL_TIP","true",{expires:365});c.show();setTimeout(function(){c.hide()},8000)}$("#star_feed .feed_close_icon,#star_feed .feed_close_text").bind("click",function(){c.hide();$.cookie("STAR_TOOL_TIP","STAR_TOOL_TIP",{expires:365})})}}});$(function(){if(!this.imgLikeAction){var b="fr=tb_pb_fav";var a={sourceURL:"http://tieba.baidu.com/p/"+PageData.thread.id,tags:"�ٶ�����,"+PageData.forum.name+"��",descript:$.tb.subByte(PageData.thread.title,40,""),no_pic_pb:PageData.isPicBa?false:true,area:[{container:"#j_p_postlist",tag:".BDE_Image",offset:{x:-4,y:5},minSize:{width:80,height:80}},{container:"#j_p_postlist",tag:".j_user_sign",offset:{x:-4,y:5},minSize:{width:80,height:80}}]};this.imgLikeAction=new ImgLikeAction(a,PageData.user.is_login,PageData.user.no_un)}});