var TbPopTip = TbPopTip || {};
TbPopTip.params = [
	{
		link: 'http://tieba.baidu.com', // 气泡链接
		name : 'itiebatuijian', //气泡名 用英文
		icon : '', //气泡icon路径
		text : 'i 贴吧“精选动态”为你推荐好贴啦，快去看看！', //气泡文字内容(HTML)
		width : 150, //气泡宽度 默认220
		height : 40, //气泡高度 默认50
		loginState : 1, //0 不判断登陆状态 1 需要登陆 2 需要登出
		startTime : '2012-09-17 18:00:00', //开始时间 默认0
		endTime : '2012-09-24 18:00:00', //结束时间 默认0
		needPage : ['PB'], //需要在特殊页面展示 'ALL','PB','FRS','I','INDEX'
		exceptPage : [''], //在特定的页面不展示
		exceptURL : [], //在特定的URL不展示 (优先级高于needPage，首页是老版本代码不支持)
		statsname: 'qiandao' // 统计名称 
	}
];


var ProductButtonConfig = [
	{
		width : 161,			//宽度
		height : 82,			//高度
		src : 'http://tieba.baidu.com/tb/%E8%B4%B4%E5%9B%BE%E7%A5%9E%E5%99%A8.png',//资源路径
		link : 'http://tieba.baidu.com/tb/picture/shenqi.html',			//链接
		page : ['frs'],			//包含出现的页面
		forum : [],			//包含出现的吧名
		start_time : '2012-10-23 12:00:00',	//开始时间
		end_time : '2012-11-07 12:00:00',		//结束时间
                fir_class : [],                     //一级目录
                sec_class : [],                    //二级目录
　　　　　　　　login_state : null, //登陆状态 null : 不判断 true : 需要登录 false :　需要不登陆
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//统计字符串
		offset : {			//位置偏移 相对于head
			top : 20,
			left : 815
		}
	},
       {
		width : 161,			//宽度
		height : 82,			//高度
	   src : 'http://tieba.baidu.com/tb/button161x82%E5%9B%9E%E9%A1%BE.png',//资源路径
		link : 'http://tieba.baidu.com/tb/zt/2012bzdh/show.html',			//链接
		page : ['pb'],			//包含出现的页面
		forum : [],//包含出现的吧名
		start_time : '2012-10-30 12:00:00',	//开始时间
		end_time : '2012-11-04 22:00:00',		//结束时间
        fir_class : [],    //一级目录
        sec_class : [],    //二级目录
		login_state : null, //登陆状态 null : 不判断 true : 需要登录 false :　需要不登陆
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//统计字符串
		offset : {			//位置偏移 相对于head
			top : 20,
			left : 815
		}
         },
             {
		width : 161,			//宽度
		height : 70,			//高度
	   src : 'http://tieba.baidu.com/tb/shenqi.png',//资源路径
		link : 'http://tieba.baidu.com/tb/picture/shenqi.html',			//链接
		page : ['itieba'],			//包含出现的页面
		forum : [],//包含出现的吧名
		start_time : '2012-11-02 12:00:00',	//开始时间
		end_time : '2012-11-07 12:00:00',		//结束时间
        fir_class : [],    //一级目录
        sec_class : [],    //二级目录
		login_state : null, //登陆状态 null : 不判断 true : 需要登录 false :　需要不登陆
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//统计字符串
		offset : {			//位置偏移 相对于head
			top : 20,
			left : 815
		}

             },
             {
		width : 161,			//宽度
		height : 82,			//高度
	   src : 'http://tieba.baidu.com/tb/%E7%94%9F%E6%B4%BB%E7%94%9F%E6%B4%BB.png',//资源路径
		link : 'http://tieba.baidu.com/p/1937821062',			//链接
		page : ['pb'],			//包含出现的页面
		forum : [],//包含出现的吧名
		start_time : '2012-10-23 12:00:00',	//开始时间
		end_time : '2012-10-27 22:00:00',		//结束时间
        fir_class : ['生活'],    //一级目录
        sec_class : [''],    //二级目录
		login_state : null, //登陆状态 null : 不判断 true : 需要登录 false :　需要不登陆
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//统计字符串
		offset : {			//位置偏移 相对于head
			top : 20,
			left : 815
		}

             },
             {
		width : 161,			//宽度
		height : 76,			//高度
	   src : 'http://tieba.baidu.com/tb/shenqi.png',//资源路径
		link : 'http://tieba.baidu.com/tb/zt/2012bzdh/index.html',			//链接
		page : ['itieba'],			//包含出现的页面
		forum : [],//包含出现的吧名
		start_time : '2012-10-26 12:00:00',	//开始时间
		end_time : '2012-10-28 22:00:00',		//结束时间
        fir_class : [],    //一级目录
        sec_class : [],    //二级目录
		login_state : null, //登陆状态 null : 不判断 true : 需要登录 false :　需要不登陆
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//统计字符串
		offset : {			//位置偏移 相对于head
			top : 20,
			left : 815
		}

             }
];