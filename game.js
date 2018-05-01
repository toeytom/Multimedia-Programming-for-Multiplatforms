var pipe = []
var hearth =  []
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
    for(var i = 0;i<4;i++){
        hearth[i] = new Sprite(scene,"1.jpg",50,50)
        hearth[i].setMoveAngle(270)
        hearth[i].setPosition(pipe[i*2].x,pipe[i*2].y+170)
    }
}