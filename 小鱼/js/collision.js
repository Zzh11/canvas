/**
 * Created by LENOVO on 2018/8/4.
 */
//判断大鱼和果实的碰撞
function momFruitCollision(){
    for(var i=0;i<fruit.num;i++){
        //循环判断每一个果实
        if(fruit.alive[i]){
            //计算距离，利用勾股定理来计算
            var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l<900){
                //果实被吃掉
                fruit.dead(i);

                //大鱼的身体变化
                mom.momBodyCount++;
                data.fruitNum++;
                //到了最大值，就不要变化了
                if(mom.momBodyCount>7){
                    mom.momBodyCount=7;
                }
                //颜色
                if(fruit.fruitType[i]=="blue"){
                    data.double=2;
                }
                //画圆圈
                wave.born(fruit.x[i],fruit.y[i]);
            }
        }
    }
}

//大鱼喂小鱼
function momBabyCollision(){
    var l=calLength2(mom.x,mom.y,baby.x,baby.y);
    if(l<900){
        //大鱼的能量消失
        //小鱼的能量补满
        if(data.fruitNum>0){
            baby.babyBodyCount=0;
            mom.momBodyCount=0;
            data.addScore();
            data.reset();

        }
    }
}