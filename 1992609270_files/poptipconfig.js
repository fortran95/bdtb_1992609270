var TbPopTip = TbPopTip || {};
TbPopTip.params = [
	{
		link: 'http://tieba.baidu.com', // ��������
		name : 'itiebatuijian', //������ ��Ӣ��
		icon : '', //����icon·��
		text : 'i ���ɡ���ѡ��̬��Ϊ���Ƽ�����������ȥ������', //������������(HTML)
		width : 150, //���ݿ�� Ĭ��220
		height : 40, //���ݸ߶� Ĭ��50
		loginState : 1, //0 ���жϵ�½״̬ 1 ��Ҫ��½ 2 ��Ҫ�ǳ�
		startTime : '2012-09-17 18:00:00', //��ʼʱ�� Ĭ��0
		endTime : '2012-09-24 18:00:00', //����ʱ�� Ĭ��0
		needPage : ['PB'], //��Ҫ������ҳ��չʾ 'ALL','PB','FRS','I','INDEX'
		exceptPage : [''], //���ض���ҳ�治չʾ
		exceptURL : [], //���ض���URL��չʾ (���ȼ�����needPage����ҳ���ϰ汾���벻֧��)
		statsname: 'qiandao' // ͳ������ 
	}
];


var ProductButtonConfig = [
	{
		width : 161,			//���
		height : 82,			//�߶�
		src : 'http://tieba.baidu.com/tb/%E8%B4%B4%E5%9B%BE%E7%A5%9E%E5%99%A8.png',//��Դ·��
		link : 'http://tieba.baidu.com/tb/picture/shenqi.html',			//����
		page : ['frs'],			//�������ֵ�ҳ��
		forum : [],			//�������ֵİ���
		start_time : '2012-10-23 12:00:00',	//��ʼʱ��
		end_time : '2012-11-07 12:00:00',		//����ʱ��
                fir_class : [],                     //һ��Ŀ¼
                sec_class : [],                    //����Ŀ¼
����������������login_state : null, //��½״̬ null : ���ж� true : ��Ҫ��¼ false :����Ҫ����½
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//ͳ���ַ���
		offset : {			//λ��ƫ�� �����head
			top : 20,
			left : 815
		}
	},
       {
		width : 161,			//���
		height : 82,			//�߶�
	   src : 'http://tieba.baidu.com/tb/button161x82%E5%9B%9E%E9%A1%BE.png',//��Դ·��
		link : 'http://tieba.baidu.com/tb/zt/2012bzdh/show.html',			//����
		page : ['pb'],			//�������ֵ�ҳ��
		forum : [],//�������ֵİ���
		start_time : '2012-10-30 12:00:00',	//��ʼʱ��
		end_time : '2012-11-04 22:00:00',		//����ʱ��
        fir_class : [],    //һ��Ŀ¼
        sec_class : [],    //����Ŀ¼
		login_state : null, //��½״̬ null : ���ж� true : ��Ҫ��¼ false :����Ҫ����½
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//ͳ���ַ���
		offset : {			//λ��ƫ�� �����head
			top : 20,
			left : 815
		}
         },
             {
		width : 161,			//���
		height : 70,			//�߶�
	   src : 'http://tieba.baidu.com/tb/shenqi.png',//��Դ·��
		link : 'http://tieba.baidu.com/tb/picture/shenqi.html',			//����
		page : ['itieba'],			//�������ֵ�ҳ��
		forum : [],//�������ֵİ���
		start_time : '2012-11-02 12:00:00',	//��ʼʱ��
		end_time : '2012-11-07 12:00:00',		//����ʱ��
        fir_class : [],    //һ��Ŀ¼
        sec_class : [],    //����Ŀ¼
		login_state : null, //��½״̬ null : ���ж� true : ��Ҫ��¼ false :����Ҫ����½
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//ͳ���ַ���
		offset : {			//λ��ƫ�� �����head
			top : 20,
			left : 815
		}

             },
             {
		width : 161,			//���
		height : 82,			//�߶�
	   src : 'http://tieba.baidu.com/tb/%E7%94%9F%E6%B4%BB%E7%94%9F%E6%B4%BB.png',//��Դ·��
		link : 'http://tieba.baidu.com/p/1937821062',			//����
		page : ['pb'],			//�������ֵ�ҳ��
		forum : [],//�������ֵİ���
		start_time : '2012-10-23 12:00:00',	//��ʼʱ��
		end_time : '2012-10-27 22:00:00',		//����ʱ��
        fir_class : ['����'],    //һ��Ŀ¼
        sec_class : [''],    //����Ŀ¼
		login_state : null, //��½״̬ null : ���ж� true : ��Ҫ��¼ false :����Ҫ����½
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//ͳ���ַ���
		offset : {			//λ��ƫ�� �����head
			top : 20,
			left : 815
		}

             },
             {
		width : 161,			//���
		height : 76,			//�߶�
	   src : 'http://tieba.baidu.com/tb/shenqi.png',//��Դ·��
		link : 'http://tieba.baidu.com/tb/zt/2012bzdh/index.html',			//����
		page : ['itieba'],			//�������ֵ�ҳ��
		forum : [],//�������ֵİ���
		start_time : '2012-10-26 12:00:00',	//��ʼʱ��
		end_time : '2012-10-28 22:00:00',		//����ʱ��
        fir_class : [],    //һ��Ŀ¼
        sec_class : [],    //����Ŀ¼
		login_state : null, //��½״̬ null : ���ж� true : ��Ҫ��¼ false :����Ҫ����½
		pv : 'fr=forum&mod=frs&st_value=productbutton',			//ͳ���ַ���
		offset : {			//λ��ƫ�� �����head
			top : 20,
			left : 815
		}

             }
];