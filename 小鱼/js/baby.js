/**
 * Created by LENOVO on 2018/8/4.
 */
var babyObj=function(){
    this.x;
    this.y;
    this.angle;

    //鱼尾的定时器
    this.babyTailTimer=0;
    this.babyTailCount=0;
    //鱼眼睛
    this.babyEyeTimer=0;
    this.babyEyeCount=0;
    //多长时间眨眼睛
    this.babyEyeInterval=1000;
    //鱼身体
    this.babyBodyTimer=0;
    this.babyBodyCount=0;
}
babyObj.prototype.init=function(){
    this.x=canWidth*0.5-50;
    this.y=canHeight*0.5+50;
    this.angle=0;

    //图片不能固定死
    //this.babyEye.src="images/babyEye0.png";
    //this.babyBody.src="images/babyFade0.png";
    //this.babyTail.src="images/babyTail0.png";
}
babyObj.prototype.draw=function(){
    this.x=lerpDistance(mom.x,this.x,0.95);
    this.y=lerpDistance(mom.y,this.y,0.95);
    var deltaX=mom.x-this.x;
    var deltaY=mom.y-this.y;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;
    this.angle=lerpAngle(beta,this.angle,0.6);

//鱼尾   setInterval  （function（）{}）
    this.babyTailTimer+=daltaTime;
    if(this.babyTailTimer>50){
        this.babyTailCount=(this.babyTailCount+1)%8;
        this.babyTailTimer%=50;

    }
    var babyTailCount=this.babyTailCount;

//鱼眼睛
    this.babyEyeTimer+=daltaTime;
    if(this.babyEyeTimer > this.babyEyeInterval){
        this.babyEyeCount=(this.babyEyeCount +1)%2;
        this.babyEyeTimer%=this.babyEyeInterval;

        if(  this.babyEyeCount==0){
            this.babyEyeInterval=Math.random()*1500+2000;
        }else{
            this.babyEyeInterval=200;
        }
    }
    var	babyEyeCount=this.babyEyeCount;

//鱼的身体
    this.babyBodyTimer+=daltaTime;
    if(this.babyBodyTimer > 300){
        this.babyBodyCount=this.babyBodyCount +1;
        this.babyBodyTimer%=300;

        if(  this.babyBodyCount>19){
            //游戏结束
            this.babyBodyCount=19;

        }
    }
    var	babyBodyCount=this.babyBodyCount;
    //游戏结束



    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);

    ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5+20,-babyTail[babyTailCount].height*0.5);
    ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);
    ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);
    ctx1.restore();



}






























