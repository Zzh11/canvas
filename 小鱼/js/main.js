/**
 * Created by LENOVO on 2018/8/2.
 */
document.body.onload=game;
var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var bgPic;
var ane;
var fruit;
var mom;
var baby;
var wave;
var data;


var lastTime;
var daltaTime;

var mx=0;
var my=0;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOrange=[];
var momBodyBlue=[];


function game(){
    init();
    lastTime=new Date();
    gameLoop();
}
function init(){
    can1=document.getElementById("canvas1");
    ctx1=can1.getContext("2d");

    can1.onmousemove=function(e){
        mx=e.offsetX;
        my=e.offsetY;
    }


    can2=document.getElementById("canvas2");
    ctx2=can2.getContext("2d");

    can3=document.getElementById("canvas3");
    ctx3=can3.getContext("2d");


    canWidth=can1.width;
    canHeight=can1.height;
    //背景图片
    bgPic=new Image();
    bgPic.src="images/background.jpg";
    ctx2.drawImage(bgPic,0,0,canWidth,canHeight);

    bgPic2=new Image();
    bgPic2.src="images/cover.png";


    ane=new aneObj();
    ane.init();

    fruit=new fruitObj();
    fruit.init();

    mom=new momObj();
    mom.init();

    baby=new babyObj();
    baby.init();

    for(var i=0;i<8;i++){
        babyTail[i]=new Image();
        babyTail[i].src="images/babyTail"+i+".png";
        momTail[i]=new Image();
        momTail[i].src="images/bigTail"+i+".png";

        momBodyOrange[i]=new Image();
        momBodyOrange[i].src="images/bigSwim"+i+".png";
        momBodyBlue[i]=new Image();
        momBodyBlue[i].src="images/bigSwimBlue"+i+".png";

    }
    for(var i=0;i<2;i++){
        babyEye[i]=new Image();
        babyEye[i].src="images/babyEye"+i+".png;"
        momEye[i]=new Image();
        momEye[i].src="images/bigEye"+i+".png;"

    }
    for(var i=0;i<20;i++){
        babyBody[i]=new Image();
        babyBody[i].src="images/babyFade"+i+".png";
    }
    data=new dataObj();
    wave=new waveObj();
    wave.init()
}
function gameLoop(){
    window.requestAnimFrame(gameLoop);
    var now=new Date();
    daltaTime=now-lastTime;
    lastTime=now;
    ctx2.drawImage(bgPic,0,0,canWidth,canHeight);
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0,0,canWidth,canHeight);
    mom.draw();

    momFruitCollision();

    baby.draw();
    momBabyCollision();

    wave.draw();
    data.draw();
    data.GameOver();

}
