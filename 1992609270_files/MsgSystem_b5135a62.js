var LCFManager=new (function(){var a=this,d=false,b="/tb/static-common/component/commonLogic/common/crosspage_msg_system/CrossPageSWF.swf?v=1.3",f,e=false;this.API={msgStatus:function(h){$(a).trigger("sendStatus",arguments)},bindServer:function(){$(a).trigger("bindServer")},closeServer:function(){$(a).trigger("closeServer")},newClient:function(h){$(a).trigger("newClient",arguments)},onReady:function(){$(a).trigger("ready")},onHost:function(i,h){$(a).trigger("bindHost",arguments)},onMessage:function(j,h,i){$(a).trigger("message",arguments)},inGroup:function(h){$(a).trigger("joinGroup",arguments)},console:function(i,h){if(h&&h in $.console){$.console[h](i)}else{$.console.debug(i)}},jsCheck:function(){return true}};var g=function(h){f=new $.swf(b,{container:c(),width:1,height:1,params:{allowScriptAccess:"always",wmode:"window"},vars:{userName:h,browser:$.getBrowser().name,new_version:true,debugMode:$.debug}})};var c=function(){var i="local_flash_cnt";if(document.getElementById(i)){return $("#"+i)}else{var h=$('<div id="'+i+'"></div>');$("body").prepend(h);return h}};this.init=function(h){if(d){return}g(h);$.console.debug("LCF ��ʼ��ʼ��!");d=true};this.checkSWFReady=function(){try{return f.remote("checkSWF")}catch(h){return false}};this.sendMsg=function(j){var h=j.target,i=j.group;if(h==""||h=="all"){f.remote("sendMsg",j.id,j.content,i,j.client,j.saveAble)}else{if(h=="own"){f.remote("sendOwnMsg",j.id,j.content,j.saveAble)}else{if(h=="other"){f.remote("sendOtherMsg",j.id,j.content,i,j.saveAble)}else{if(h=="host"){f.remote("sendMsgToHost",j.id,j.content,i,j.saveAble)}}}}};this.getMsg=function(h){if(h&&h!=""){return f.remote("getMsg",h)}else{return f.remote("getAllMsg")}};this.removeMsg=function(h){if(h&&h!=""){f.remote("removeMsg",h)}else{f.remote("removeAllMsg")}};this.createRequest=function(i){var h=f.remote("createRequest",i);return h};this.sendRequest=function(i,h){f.remote("sendRequest",i,h)};this.createListen=function(i){var h=f.remote("createListen",i);return h};this.startListen=function(h){f.remote("sendListen",h)};this.stopListen=function(h){f.remote("cancelListen",h)};this.setServer=function(h){switch(h){case"open":f.remote("startServer");break;case"close":f.remote("stopServer");break;case"restart":f.remote("restartServer");break}};this.setClient=function(h,i){if(h=="bindHost"){f.remote("bindHost",i)}else{if(h=="insertGroup"){f.remote("bindHost",i)}}};this.so=function(h,i){if(!h||h==""){return null}if(!i||i==""){return f.remote("sharedObjectRead",h)}else{return f.remote("sharedObjectWrite",h,i)}};this.addEvent=function(h,i){return $(a).bind.apply($(a),arguments)};this.removeEvent=function(h,i){return $(a).unbind.apply($(a),arguments)}})();var SWFRequest=function(){var a,e,d={},l=new Date().getTime()+"_"+Math.floor(Math.random()*100),i=this;var h=function(n){var m='window.SWFRequest.API["'+l+'"]';e=LCFManager;d.url=n.url||"";d.method=n.method||"get";d.data=n.data||{};d.onComplete=m+'["onComplete"]';d.onProgress=m+'["onProgress"]';d.onOpen=m+'["onOpen"]';d.onIOError=m+'["onIOError"]';d.onSecurityError=m+'["onSecurityError"]';g();a=e.createRequest(d);if(n){if(n.onComplete&&typeof n.onComplete=="function"){$(i).bind("complete",n.onComplete)}if(n.onProgress&&typeof n.onProgress=="function"){$(i).bind("progress",n.onProgress)}if(n.onOpen&&typeof n.onOpen=="function"){$(i).bind("open",n.onOpen)}if(n.onIOError&&typeof n.onIOError=="function"){$(i).bind("IOError",n.onIOError)}if(n.onSecurityError&&typeof n.onSecurityError=="function"){$(i).bind("securityError",n.onSecurityError)}}};var g=function(){window.SWFRequest=window.SWFRequest||{};window.SWFRequest.API=window.SWFRequest.API||{};window.SWFRequest.API[l]={onComplete:c,onProgress:b,onOpen:k,onIOError:f,onSecurityError:j}};var c=function(m){$(i).trigger("complete",m)};var b=function(m){$(i).trigger("progress",m)};var k=function(){$(i).trigger("open")};var f=function(){$(i).trigger("IOError")};var j=function(){$(i).trigger("securityError")};this.send=function(m){e.sendRequest(a,m)};this.addEvent=function(){$(i).bind.apply($(i),arguments)};this.removeEvent=function(){$(i).unbind.apply($(i),arguments)};h.apply(this,arguments)};var SWFListen=function(){var a,e,d={},m=new Date().getTime()+"_"+Math.floor(Math.random()*100),i=this;var h=function(o){var n='window.SWFListen.API["'+m+'"]';e=LCFManager;d.url=o.url||"";d.method=o.method||"get";d.data=o.data||{};d.onComplete=n+'["onComplete"]';d.onProgress=n+'["onProgress"]';d.onOpen=n+'["onOpen"]';d.onIOError=n+'["onIOError"]';d.onSecurityError=n+'["onSecurityError"]';d.onListenStatus=n+'["onListenStatus"]';g();a=e.createListen(d);if(o){if(o.onComplete&&typeof o.onComplete=="function"){$(i).bind("complete",o.onComplete)}if(o.onProgress&&typeof o.onProgress=="function"){$(i).bind("progress",o.onProgress)}if(o.onOpen&&typeof o.onOpen=="function"){$(i).bind("open",o.onOpen)}if(o.onIOError&&typeof o.onIOError=="function"){$(i).bind("IOError",o.onIOError)}if(o.onSecurityError&&typeof o.onSecurityError=="function"){$(i).bind("securityError",o.onSecurityError)}if(o.onListenStatusChange&&typeof o.onListenStatusChange=="function"){$(i).bind("statusChange",o.onListenStatusChange)}}};var g=function(){window.SWFListen=window.SWFListen||{};window.SWFListen.API=window.SWFListen.API||{};window.SWFListen.API[m]={onComplete:c,onProgress:b,onOpen:k,onIOError:f,onSecurityError:j,onListenStatus:l}};var c=function(n){$(i).trigger("complete",n)};var b=function(n){$(i).trigger("progress",n)};var k=function(){$(i).trigger("open")};var f=function(){$(i).trigger("IOError")};var j=function(){$(i).trigger("securityError")};var l=function(n){if(n){$(i).trigger("statusChange",true)}else{$(i).trigger("statusChange",false)}};this.start=function(){e.startListen(a)};this.stop=function(){e.stopListen(a)};this.addEvent=function(){$(i).bind.apply($(i),arguments)};this.removeEvent=function(){$(i).unbind.apply($(i),arguments)};h.apply(this,arguments)};var MessageProxy={receiveMsg:function(h,e,f){var a=null;var c=h;var b=c.indexOf("_");var d="custom";var g="";if(b==-1){g=c}else{d=c.slice(0,b);g=c.slice(b+1)}a={};a.mod=d;a.type=g;a.content=e;a.time=f;return a},createMsgId:function(a,b){return(a&&b)?(a+"_"+b):((a?a:"")+(b?b:""))},createMsg:function(c,f,e,d,h,a,i){var b={};var g=MessageProxy.createMsgId(f,e);b.target=c;b.id=g;b.content=d?d:null;b.group=h?h:null;b.client=a?a:null;b.saveAble=!!(i);return b}};new (function(){TbICom.call(this);var i=this,w,H=false,j,o=300*1000,I="http://message.tieba.baidu.com/i/msg/online",l="http://message.tieba.baidu.com/i/msg/listen",G,b=false,g=false,f,e=(Math.floor(Math.random()*100)+"_"+new Date().getTime());var F=function(){w=LCFManager;var M=TbCom.process("User","getUserInfo");if(M.is_login){f=M.portrait;if(f){J(f)}else{TbCom.process("User","getUserInfoByRequest",function(N){M=N;f=M.portrait;J(f)})}}else{$.console.debug("�û�δ��½����Ϣϵͳ��������")}};var J=function(O){w.addEvent("ready",B);w.addEvent("bindServer",y);w.addEvent("closeServer",t);w.addEvent("bindHost",k);w.addEvent("newClient",C);w.addEvent("message",q);w.addEvent("joinGroup",A);var M=$.getBrowser().name;if($.inArray(M,["ie","chrome","firefox","safari"])<0){try{window.addEventListener("beforeunload",function(){w.setServer("close")},false)}catch(N){window.attachEvent("onbeforeunload",function(){w.setServer("close")})}}else{try{window.addEventListener("unload",function(){w.setServer("close")},false)}catch(N){window.attachEvent("onunload",function(){w.setServer("close")})}}w.init("TBMSG_"+O);$.console.debug("��Ϣϵͳ��ʼ���� [ TBMSG_"+O+" ]")};var u=function(){var M=new SWFListen({url:l+"?user="+f+"&c="+e});return M};var v=function(){var O=new Date().getTime();var N=I+"?user="+f+"&t="+O;var M=new Image();window.tb_online_stats=M;M.src=N};var x=function(){L();v();j=setInterval(v,o)};var L=function(){if(j){clearInterval(j);j=null}};var B=function(){$.console.debug("��Ϣϵͳ׼����ϣ�");H=true;i.dispatchEvent("ready")};var y=function(){g=true;x();if(!G){G=u()}G.addEvent("statusChange",a);G.addEvent("complete",d);G.start();$.console.debug("��Ϊserver��");i.dispatchEvent("bindServer")};var t=function(){g=false;L();if(G){G.removeEvent("statusChange",a);G.removeEvent("complete",d);G.stop()}$.console.debug("server�رգ�");i.dispatchEvent("closeServer")};var k=function(O,M,N){$.console.debug(M+"ע���Ϊ["+N+"]��host client��");i.dispatchEvent("bindHost",M,N)};var C=function(O,M){$.console.debug("���µĿͻ������� ["+M+"]");if(g){var N=G?"1":"0";n({id:"chat_command_listen",content:N,group:"default",client:_newClient,saveAble:false});$.console.debug("MsgSystem : tell new client listen status - "+_islistening)}i.dispatchEvent("newClient",M)};var q=function(P,Q,M,O){$.console.debug("�յ��µ���Ϣ [ "+Q+"; "+M+"; "+O+" ]");var N=MessageProxy.receiveMsg(Q,M,O);i.dispatchEvent(N.mod+"_message",N)};var A=function(N,M){$.console.debug("����һ����Ϣ�� [ "+M+" ]");i.dispatchEvent("joinGroup",M)};var a=function(M){b=!!(M);$.console.debug("@MsgSystem : Listen status change - "+b);i.dispactchEvent("listenStatusChange",M)};var d=function(O,N){$.console.warn(N);var M=N.replace(/^TbNet.dataHandler\(|\)\;?$/g,"");M=M.replace(/\:\'\[/g,":[");M=M.replace(/\]\'\}/g,"]}");i.dispatchEvent("listenComplete",$.json.decode(M))};var n=function(S,N,O,P,R,M,Q){K(function(){var T=MessageProxy.createMsg(S,N,O,P,R,M,Q);w.sendMsg(T)})};var E=function(M,N){K(function(){if(M&&N){var O=MessageProxy.createMsgId(M,N);return w.getMsg(O)}else{return w.getMsg()}})};var s=function(M,N){K(function(){var O=MessageProxy.createMsgId(M,N);w.removeMsg(O)})};var z=function(N,M){K(function(){var P=E();for(var O in P){if(O.indexOf(N)==0){msg_type=O.slice(N.length+1);if(msg_type!=M){s(N,msg_type)}}}})};var D=function(M){return new SWFRequest(M)};var h=function(M){return new SWFListen(M)};var c=function(M){K(function(){w.setServer(M)})};var m=function(M,N){K(function(){w.setClient(M,N)})};var p=function(M,N){K(function(){return w.so(M,N)})};var r=function(){return H};var K=function(){var O=arguments[0];if(!O||typeof O!="function"){return}var M=new Array();for(var N=1;N<arguments.length;N++){M.push(arguments[N])}if(r()){O.apply(i,M)}else{i.addEvent("ready",function(){O.apply(i,M)})}};this.initSys("MsgSystem",["User"],{init:F,sendMsg:n,getMsg:E,removeMsg:s,removeMsgByMod:z,createSWFRequest:D,createSWFListen:h,setServer:c,setClient:m,so:p,getIsReady:r,doSomethingAfterReady:K})})();