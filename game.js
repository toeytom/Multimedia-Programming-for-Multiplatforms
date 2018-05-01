var pipe = []
function game(){
    kahang = new Sprite(scene,"1.jpg",50,50)
    kahang.setSpeed(0)
    kahang.setPosition(100,300)
    for(var i = 0 ; i<8;i++)
    {
        pipe[i] = new Sprite(scene,"1.jpg",100,250)
        pipe[i].setMoveAngle(270)
        if(i%2==0){
            pipe[i].setPosition(100+(100*(i+1)),125)
        }
        else{
            pipe[i].setPosition(100+(100*i),500)
        }
    }
}