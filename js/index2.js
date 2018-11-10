window.onload = function(){
    new Vue({
        el:'#my',//element
        data:{ //数据
            name:'sonia',
            age:18,
            obj:{a:'aa',b:'bb'},
            arr:['a','b','c'],
            num:0,
            imges:['img/banner1.jpg',
                'img/banner2.jpg',
                'img/banner3.jpg',
                'img/banner4.jpg',
                'img/banner5.jpg'],
            lists:[{title:'在线咨询',icon:'icon-shenghuo'},
                {title:'在线咨询',icon:'icon-jiaoyu'},
                {title:'在线咨询',icon:'icon-11'},
                {title:'在线咨询',icon:'icon-jiazheng'},
                {title:'在线咨询',icon:'icon-shenghuo'},
                {title:'在线咨询',icon:'icon-shenghuo'}]
        },
        mounted:function(){   //生命周期  挂载完成
            this.play();
        },
        methods:{   //方法
            autoPlay:function(){
                this.num++;
                if(this.num == this.imges.length){
                    this.num = 0;
                }
            },
            play:function(){
                setInterval(this.autoPlay,2000);
            }
            
        }
    })
}