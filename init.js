var scene
var kahang
var buttonstart
var bg
var statusgame = false
function init (){
    scene = new Scene();
   bg = new Sprite(scene,"2.jpg",800,600)
   bg.setSpeed(0)
   bg.setPosition(400,300)
   kahang = new Sprite(scene,"1.jpg",50,50)
    scene.start()
    
}