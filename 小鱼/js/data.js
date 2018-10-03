/**
 * Created by LENOVO on 2018/8/5.
 */
var dataObj=function(){
    //果实数量
    this.fruitNum=0;
    //分数   默认是一倍   吃了蓝色的，分数为两倍
    this.double=1;
    this.score=0;
    this.gameover;

}

dataObj.prototype.reset=function(){
    this.fruitNum=0;
    this.double=1;
    this.gameover=false;

}

dataObj.prototype.addScore=function(){
    this.score+=this.fruitNum*100*this.double;
}

dataObj.prototype.draw=function(){
    if(data.gameover==true){
        can3.style.zIndex=3;

        ctx3.drawImage(bgPic2,0,0,canWidth,canHeight);
        ctx3.fillStyle="white";
        ctx3.font="30px Verdana";
        ctx3.fillText("SCORE:"+this.score,canWidth*0.4,canHeight*0.8);

    }else {
        ctx1.fillStyle="white";
        ctx1.fillText("SCORE:"+this.score,canWidth*0.5,canHeight-20);
    }

}
dataObj.prototype.GameOver=function(){
    if(baby.babyBodyCount==19) {
        data.gameover=true;
    }
}