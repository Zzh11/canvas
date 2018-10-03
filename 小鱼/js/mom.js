/**
 * Created by LENOVO on 2018/8/4.
 */
var momObj=function(){
    //x,y旋转角度
    this.x;
    this.y;
    this.angle;
    //鱼的眼睛，身体，尾巴
    this.bigEye=new Image();
    this.bigBody=new Image();
    this.bigTail=new Image();

    //鱼尾巴的定时器
    this.momTailTimer=0;
    this.momTailCount=0;

    //鱼眼睛
    this.momEyeTimer=0;
    this.momEyeCount=0;

    //鱼闭眼和睁眼的时间
    this.momEyeInterval=1000;

    this.momBodyCount=0;
}
//初始化的时候
momObj.prototype.init=function(){
    //鱼的位置应该在正中间
    this.x=canWidth*0.5;
    this.y=canHeight*0.5;
    this.angle=0;

    this.bigEye.src="images/bigEye0.png";
    this.bigBody.src="images/bigSwim0.png";
    this.bigTail.src="images/bigTail0.png";

}
//接着就是画
momObj.prototype.draw=function(){
    //鱼的x,y跟着鼠标移动
    //     目标位置    当前位置   0.95倍的速率，去接近目标
    this.x=lerpDistance(mx,this.x,0.95)
    this.y=lerpDistance(my,this.y,0.95)

    //旋转角度，Math.atan2计算
    var deltaX=mx-this.x;
    var deltaY=my-this.y;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    //计算旋转
    this.angle=lerpAngle(beta,this.angle,0.6);

    //动态改变鱼尾巴
    this.momTailTimer+=daltaTime;
    if(this.momTailTimer>50){
        this.momTailCount=(this.momTailCount+1)%8;
        this.momTailTimer%=50;
    }
    var momTailCount=this.momTailCount;

    //动态改变鱼眼睛
    this.momEyeTimer+=daltaTime;
    if(this.momEyeTimer > this.momEyeInterval){
        this.momEyeCount=(this.momEyeCount +1)%2;
        this.momEyeTimer%=this.momEyeInterval;

        if(  this.momEyeCount==0){
            this.momEyeInterval=Math.random()*1500+1500;
        }else{
            this.momEyeInterval=300;
        }
    }
    var	momEyeCount=this.momEyeCount;
    var	momBodyCount=this.momBodyCount;

    ctx1.save();
    ctx1.translate(this.x,this.y);  //移动
    ctx1.rotate(this.angle);
    ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width*0.5+30,-momTail[momTailCount].height*0.5);
    if(data.double==1){
        ctx1.drawImage(momBodyOrange[momBodyCount],-momBodyOrange[momBodyCount].width*0.5,-momBodyOrange[momBodyCount].height*0.5);
    }else {
        ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width*0.5,-momBodyBlue[momBodyCount].height*0.5);
    }




    ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width*0.5,-momEye[momEyeCount].height*0.5);
    ctx1.restore();
}
//canvas画图








































