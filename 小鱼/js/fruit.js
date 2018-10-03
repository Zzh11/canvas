/**
 * Created by LENOVO on 2018/8/2.
 */
var fruitObj=function(){
    //坐标
    this.x=[];
    this.y=[];
    //控制果实的生长大小
    this.l=[];
    //速度
    this.speed=[];
    this.fruitType=[];//类型
    this.alive=[];//是否存活
    this.orange=new Image();
    this.blue=new Image();
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
    for (var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.l[i]=0;
        this.speed[i]=0.005+Math.random()*0.015;
        this.fruitType[i]="";
    }
    this.orange.src="images/fruit.png";
    this.blue.src="images/blue.png";
}
//生出果实
fruitObj.prototype.born=function(i){
    var aneId=Math.floor(Math.random()*ane.num);

    this.x[i]=ane.x[aneId];
    this.y[i]=canHeight-ane.len[aneId];
    this.l[i]=0;
    this.alive[i]=true;
    //控制这个果实是蓝的还是黄的
    if(Math.random()>0.15){
        this.fruitType[i]="orange";
    }else{
        this.fruitType[i]="blue";
    }
}

//画果实
fruitObj.prototype.draw=function(){
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            if(this.fruitType[i]=="blue"){
                var pic=this.blue;
            }else {
                var pic=this.orange;
            }
            //果实怎么长大
            //不能一直长大
            if(this.l[i]<=14) {
                this.l[i] += this.speed[i] * daltaTime;
            }else {
                //果实成熟了，往上飘
                this.y[i] -= this.speed[i] * daltaTime*5;
            }
            //果实长大的本质是画图片
                           //什么颜色  什么位置   多大
            ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            //死亡
            if(this.y[i]<10){
                    this.alive[i]=false;
            }

        }
    }
}
//定义入口点
function fruitMonitor(){
    var num=0;
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            num++;

        }
    }
    //控制在15个
    if(num<15){
        //让你出生一个
        sendFruit();
        return;
    }
}
function sendFruit(){
    for(var i=0;i<fruit.num;i++){
        //生长，，，，，死了，才能重新复活
        if(!fruit.alive[i]){
            //果实出生
            fruit.born(i);
            return;
        }
    }
}
fruitObj.prototype.dead=function(i){
    this.alive[i]=false;
}