var initItiebaMessage;new (function(){TbICom.call(this);var a="";var C=[];var c;var d;var H;var R;var i={atme:0,reply:0,favts:0,recycle:0};var v="default";var J=false;var A={all_msg:{id:0,display:true,aside_tip_id:"",url:""},fans:{id:1,url:"#itb_home#&type=fans",aside_tip_id:"",display:true},evaluate:{id:2,url:"#itb_home#&type=my_evaluate",aside_tip_id:"new_evaluate_num_tip",display:true},wealth:{id:3,url:"",display:true},reply:{id:4,url:"#itb_home#&type=replyme",aside_tip_id:"new_reply_num_tip",display:true},feature:{id:5,url:"#itb_home#&type=feature",aside_tip_id:"new_feature_num_tip",display:true},guess:{id:6,url:"#itb_home#&type=main",aside_tip_id:"new_guess_num_tip",display:true},postPasser:{id:8,display:false},atme:{id:9,url:"#itb_home#&type=atme",aside_tip_id:"new_atme_num_tip",display:true},recycle:{id:10,url:"#itb_home#&type=recycle",aside_tip_id:"new_recycle_num_tip",display:true},favts:{id:20,url:"#itb_home#&type=storethread",aside_tip_id:"new_storethread_num_tip",display:true}};var s={itb_home:""};var N=function(W,U){d=W;H=U||$("body");var V=TbCom.process("MsgSystem","getIsReady");if(V){h()}else{TbCom.addEvent("MsgSystem","ready",function(){h()})}};var h=function(){if(J){return}if(d!="itieba"){a="_blank"}var U=TbCom.process("User","getUserInfo");if(!U||!U.is_login||!U.portrait){TbCom.process("User","getUserInfoByRequest",K)}else{K(U)}J=true};var K=function(U){c=U.portrait;s.itb_home="/i/sys/jump?u="+c;for(var V in A){C[A[V]["id"]]=V}for(var W in A){var X=A[W];if(typeof X.url!="undefined"){switch(W){case"guess":A[W]["url"]=X.url.replace(/#itb_home#/g,"/i/app/"+W+"?uc="+c);break;default:A[W]["url"]=X.url.replace(/#itb_home#/g,"/i/sys/jump?u="+c)}}}f();TbCom.addEvent("MsgSystem","sys_message",L);TbCom.addEvent("MsgSystem","listenComplete",b);G()};var f=function(){var aa=C;var U=[];U.push("<ul>");for(var X=0,V=aa.length;X<V;X++){U.push('<li id="message_'+aa[X]+'" style="display:none;"></li>')}U.push("</ul>");U.push('<div class="tb_msg_tip_rightpanel">');U.push('<a href="'+s.itb_home+'&type=profile#notify" target="_self" class="setting">����</a>');U.push('<a title="�ر�" href="#" onclick="TbCom.process(\'UserMessage\',\'clearAllData\');return false" class="close_msg_tip"></a>');U.push('<b style="clear:both;"></b>');U.push("</div>");var Z=$("#com_userbar").find(".u_itieba>div"),ad=Z.offset().left,ab=ad?ad:0,W=$("body").width();_right=W-ab-160,_right=_right>350?180:_right;var Y={content:U.join(""),arrow_dir:"up",bubble_css:{right:_right,width:170},arrow_pos:{left:30},attr:" id='tb_message_tip_n' ",wrap:H};var ac=new UiBubbleTipBase(Y);ac.setFixedForMessage();R=ac.j_bubble};var q=function(U){TbCom.process("MsgSystem","doSomethingAfterReady",function(){U()})};var G=function(){var V="http://message.tieba.baidu.com/i/msg/get_data";var U=V+"?user="+c;$.JsLoadManager.use(U)};var n=function(U){q(function(){if(U!="favts"){T(U);e(U)}else{m()}})};var T=function(X){var W=new Date().getTime();var Y=A[X]["id"];if(Y!==20){var V="http://message.tieba.baidu.com/i/msg/clear_data?type="+Y+"&user="+c+"&stamp="+W;var U=new Image();window["itieba_msg_clearer_"+W]=U;U.src=V}};var x=function(){q(function(){for(var U in A){if(U!="all_msg"){T(U)}}l()})};var S=function(){var V=new Date().getTime();var U="/tsmg?query=get_data&uid="+c+"&stamp="+V;$.get(U,function(W){if(W&&W.no==0){g(W.data.ret);I()}},"json")};var m=function(){var V=new Date().getTime();var U="/tsmg?query=clear_data&uid="+c+"&stamp="+V;$.get(U,function(W){if(W&&W.no==0){g(0);I()}},"json")};var O=function(U){var V=U.join(",");S();B(V);TbCom.process("MsgSystem","sendMsg","other","sys","all_msg",V,"default",null,false)};initItiebaMessage=O;var e=function(U){q(function(){if(!U||U==""){return}TbCom.process("MsgSystem","sendMsg","all","sys",U,"0","default",null,false)})};var l=function(){TbCom.process("MsgSystem","sendMsg","all","sys","clear_msg","all","default",null,false);TbCom.process("MsgSystem","removeMsgByMod","sys","command_listen");m()};var u=function(){var U="/f?ct=486539264&cm=59202&tn=jsonUserInfo&t="+Math.random();$.get(U,{},function(V){var W=$.json.decode(V);if(W.beans_num){TbCom.process("MsgSystem","sendMsg","all","sys","wealth",W.beans_num,"default",null,false);setTimeout(function(){T("wealth");TbCom.process("MsgSystem","removeMsg","sys","wealth")},100)}})};var b=function(Y,X){var W=X.mod;var U=C[X.msg.type];var V=X.msg.cnt;if(W=="sys"&&U=="wealth"){u();return}TbCom.process("MsgSystem","sendMsg","all",W,U,V,"default",null,false)};var L=function(X,W){if(!W){$.console.debug("@UserMessage _renderMsg : ����Ҫ������")}else{var V=W.type,U=W.content;if(V&&typeof U!="undefined"){p(V,U)}else{$.console.debug("@UserMessage _renderMsg : ���ص�������û��type��content")}}};var p=function(U,V){switch(U){case"all_msg":B(V);break;case"fans":t(V);break;case"evaluate":D(V);break;case"wealth":r(V);break;case"reply":k(V);I();break;case"feature":Q(V);break;case"guess":M(V);break;case"atme":E(V);I();break;case"favts":g(V);break;case"recycle":y(V);I();break;case"clear_msg":P(V);break;default:$.console.debug("@UserMessage _renderMsgHandler; LCF���ص���Ϣû�д�������");break}};var t=function(V){var U=parseInt(V);if(U>0){F("fans",U,"�·�˿")}else{z("fans")}};var D=function(X){var W=parseInt(X);var U=$("#new_evaluate_num_tip");var V="";if(W>0){F("evaluate",W,"������");V="("+X+"��)"}else{z("evaluate")}if(U){U.html(V)}};var r=function(X){var V=parseInt(X);var W=v;if(V>0){if(typeof W=="string"&&(W=="add_post")){TbCom.process("WealthSystem","postTipSetDisplay",true)}else{var U='<div class="tb_beans_msg_tip">��ϲ�㣬���ɶ���������<br />��ǰ������<span class="tb_beans_num_tip"><b>'+X+"</b></span>��</div>";$.SimplePopupMsg.show(U)}}};var Q=function(X){var W=parseInt(X);var U=$("#new_feature_num_tip");var V="";if(W>0){F("feature",W,"�¾�Ʒ");V="("+X+"��)"}else{z("feature")}if(U){U.html(V)}};var k=function(V){var U=parseInt(V);i.reply=U;if(U>0){F("reply",U,"�»ظ�")}else{z("reply")}};var I=function(){var W=i.reply+i.atme+i.recycle;if(W>0){var U=$("#new_reply_num_tip");var V="";V="("+W+"��)";if(U){U.html(V)}}else{var U=$("#new_reply_num_tip").html("")}};var g=function(X){var W=parseInt(X);i.favts=W;if(W>0){var U=$("#new_storethread_num_tip");var V="";V="("+W+"���и���)";if(U){U.html(V)}F("favts",W,"�ղ����и���");$.stats.sendRequest("fr=tb0_forum&st_mod=msgsys&st_type=favtshow")}else{z("favts")}};var y=function(V){var U=parseInt(V);i.recycle=U;if(U>0){F("recycle",U,"����վ����")}else{z("recycle")}};var M=function(V){var U=parseInt(V);if(U>0){F("guess",U,"���½��")}else{z("guess")}};var E=function(V){var U=parseInt(V);i.atme=U;if(U>0){F("atme",U,"@�ᵽ��")}else{z("atme")}};var P=function(ab){var aa=R;var Z=aa.find("li");for(var Y=0,V=Z.length;Y<V;Y++){$(Z[Y]).css("display","none")}aa.css("display","none");var U=null;var X="";for(var W in A){X=A[W]["aside_tip_id"];if(typeof X=="string"&&X!=""){U=$("#"+X);if(U){U.html("");U.css("display","none")}}}};var B=function(aa){var Z=aa.split(",");var X=C;var Y=X.length-1;var V;for(var W=0,U=Z.length;W<U;W++){num=Z[W];if(W<Y){V=X[W+1];p(V,num)}}};var j=function(ab){var aa=R;var Z=R.find("li");for(var Y=0,V=Z.length;Y<V;Y++){$(Z[Y]).css("display","none")}R.css("display","none");var U=null;var X="";for(var W in A){X=A[W]["aside_tip_id"];if(typeof X=="string"&&X!=""){U=$("#"+X);if(U){U.html("");U.css("display","none")}}}};var o=function(U){v=U};var F=function(Z,W,ab){var ad=$("#message_"+Z)||null;var X=A[Z];if(X.display==false||!ad){return}var aa=X.id;var U=X.url;var ac="st_mod="+Z+"_tip&fr=tb0_"+d;var Y=$("<span>"+W+"��</span>");var V=$("<a>"+ab+"</a>");V.attr({href:U,target:a});V.bind("click",function(){n(Z);$.stats.sendRequest(ac)});ad.html("");ad.append(Y);ad.append(V);ad.css("display","block");R.css("display","block");$("#u_xiangce").find(".j_wrap").hide()};var z=function(X){var V=$("#message_"+X);var Z=R;var Y=Z.find("li");V.css("display","none");var aa=true;for(var W=0,U=Y.length;W<U;W++){if($(Y[W]).css("display")!="none"){aa=false;break}}Z.css("display",aa?"none":"block")};var w=function(V,U){if(!V||!(V in A)){return}A[V]["display"]=!!(U)};this.initSys("UserMessage",["User","MsgSystem","WealthSystem"],{init:N,clearSysMsg:e,clearData:n,clearAllData:x,setWealthActionType:o,setMsgDisplay:w})})();