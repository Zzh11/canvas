/**
 * Created by LENOVO on 2018/8/2.
 */
var aneObj=function(){
    this.x=[];//海葵的起始点坐标
    this.len=[];//海葵的终止点坐标
}
//利用prototype原型链，来扩展一个对象的属性和方法

//规定数量
aneObj.prototype.num=50;

//确定值
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        //随机的值
        //每次前进16px,距离的可控范围为20
        this.x[i]=16*i+Math.random()*20;
        //首先，保证有多高，随机得范围   200-250
        this.len[i]=200+Math.random()*50;
        a=0;

    }
}
//开始画海葵
aneObj.prototype.draw=function(){

    a +=0.01;
    var r = Math.sin(a);
    ctx2.save();
    ctx2.lineJoin="round";
    ctx2.lineWidth=20;
    ctx2.globalAlpha=0.6;   //透明度
    ctx2.strokeStyle="#3b154e";
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight);
       // ctx2.lineTo(this.x[i],canHeight-this.len[i]);
        ctx2.quadraticCurveTo(this.x[i],canHeight-this.len[i]-10,this.x[i]+40*r,canHeight-this.len[i]);
        ctx2.closePath();
        ctx2.stroke();
    }
    ctx2.restore();
}