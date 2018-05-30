var scene;
	var background; //bg
	var kahang; // kahang
	var kahangStart; // kahangStart
	var tower=[]; //bamboo
	var heart=[];
	var score = -1;
	var dist;
	var distY;
	var position;
	var position2;
	var statusPlay = false
	var logo 
	var but
	var labelscore
	var playkahang =false
	var tutorial 
	var buttutorial
	var die=false
	var diescore
	var playagainBut
	var butLeft
	var butRight
	var intro
	var died 
	var fly 
    var laugh
    var buttonStart
    var clickbut = false
	// var speed=0.5;




	//starScene

	function kahangStartScene(){
		var tKahang = new Sprite(scene,"images/1x/kahangSprites.png",3200,800);
		tKahang.loadAnimation(1600,400,400,399.9);
		tKahang.setSpeed(0);
		tKahang.generateAnimationCycles();
		tKahang.renameCycles(new Array("up","down"));
		tKahang.setAnimationSpeed(1500);
		tKahang.playAnimation();
		tKahang.setCurrentCycle("up");
	

		return tKahang;
	}

	function startScene(){
		scene = new Scene();
		scene.setSize(1024, 650);
		background = new Sprite(scene, "images/1x/bgStart.png", 1024, 650);
		background.setSpeed(0);
		background.setPosition(512, 325);
   
		intro = new Sound('sounds/intro.mp3')
		intro.play()
		died= new Sound('sounds/kahangDied.mp3')
		fly= new Sound('sounds/kahangFly.mp3')
		laugh = new Sound('sounds/kahangLaugh.mp3')
		kahangStart = new kahangStartScene();
		kahangStart.setPosition(500, 200);
		logo =new Sprite(scene,"images/1x/nameStart.png",400,150)
		logo.setSpeed(0);
        logo.setPosition(512,420)
        buttonStart= document.createElement("img");
        buttonStart.src="images/1x/startBtn_1.png"
        buttonStart.setAttribute('height', '50px');
        buttonStart.setAttribute('width','150px')
        buttonStart.style.position="absolute"
        buttonStart.style.left="462px"
        buttonStart.style.top="512px"
       
        document.body.appendChild(buttonStart);
        buttonStart.addEventListener("click",checkclickbut)
		scene.start();
	
	}


	//end
	


	function Kahang(){
		var tKahang = new Sprite(scene,"kahang2.png",800,200);
			
		tKahang.loadAnimation(800,200,100,100);
		tKahang.setSpeed(0);
		tKahang.generateAnimationCycles();
		tKahang.renameCycles(new Array("up","down"));
		tKahang.setAnimationSpeed(1000);
		tKahang.playAnimation();
		tKahang.setCurrentCycle("down");
		
		tKahang.checkKeys = function(){
			if(playkahang){
			this.changeImage("kahang2.png");
			if((keysDown[K_SPACE]&&!die)||(clickbut&&!die)){
				fly.play()
				kahang.playAnimation();
				this.addVector(0,1.5);
				kahang.setCurrentCycle("up");
			}
		}
		}
		tKahang.checkGravity = function(){
			if(playkahang){
			if(this.y >540){
				this.setPosition(this.x,540);

			}
			else if(this.y < 70 ){
				this.setPosition(this.x,70);
				console.log("y " + this.y);
				this.addVector(180,0.5);
			}
			else{
				
				this.addVector(180,0.5);				
			}
		}

		}
		return tKahang;
	}
	function Tower(){
		var tTower = new Sprite(scene,"top.png",30,350);
		tTower.setSpeed(0);

		return tTower;
	}
	function Heart(){
		var tHeart = new Sprite(scene,"heart.png",50,50);
		tHeart.setSpeed(0);

		return tHeart;
	}

	function checkCollisions(heartNum){

			if(heart[heartNum].collidesWithnew(kahang,100,100)){
				heart[heartNum].hide();
				laugh.play()
				score +=1 ;
				labelscore.setLabel("ได้ "+score+" คะแนน")
			}
		}
	
	
		
	
	function checkCollisionsTower(towerNum){
		if(towerNum%2==0){

			var boundbut = kahang.y-50<tower[towerNum].y+175
			var boundleft = kahang.x-50<tower[towerNum].x+10
			var boundright = kahang.x+50>tower[towerNum].x-10
		
		if(boundbut&&boundleft&&boundright){
			if(!die){
			died.play()
			}
			die =true
			
			diescore.show()
        // playagainBut.show()
        playagainBut.style.visibility= "visible"
			for(var i=0; i<10;i++){
			tower[i].setSpeed(0);
		}
		for(var i=0; i<5;i++){
			heart[i].setSpeed(0);
		} 
			
		
			
		}
	
		}
		else{
			var boundbut = kahang.y+50>tower[towerNum].y-175
			var boundleft = kahang.x-50<tower[towerNum].x+10
			var boundright = kahang.x+50>tower[towerNum].x-10
			
		if(boundbut&&boundleft&&boundright){
			diescore.show()
			if(!die){
			died.play()
			}
        // playagainBut.show()
        playagainBut.style.visibility= "visible"
		die=true
			 for(var i=0; i<10;i++){
			tower[i].setSpeed(0);
		}
		for(var i=0; i<5;i++){
			heart[i].setSpeed(0);
		}
			
			//alert("=sdas")
		}
		
		}
		
	}


	function showHeart(heartNum){
		if(heart[heartNum].x <= 0){
			heart[heartNum].show();

		}
	}

	function moveBamboo(speed){	
		
		if(position <= tower[0].y+20){
			for(var i =0; i<10; i++){
				if(i==0||i==1||i==4||i==5){
				tower[i].addVector(0,speed);}
				else{
					tower[i].addVector(180,speed);
				}
			}			
		}if(position >= tower[0].y+20) {
			for(var i =0; i<10; i++){
				if(i==0||i==1||i==4||i==5){
				tower[i].addVector(180,speed);}
				else{
					tower[i].addVector(0,speed);
				}
			}
		}
		

	}
	function clickPlyagain(){
		// if(playagainBut.isClicked()){
			 statusPlay = false
			 playkahang =false
			 die=false
             score=-1
             playagainBut.style.visibility= "hidden"
             butLeft.style.visibility= "hidden"
             butRight.style.visibility= "hidden"
             buttonStart.style.visibility="visible"
			 labelscore.HideBut()
		// }
	}
	function checkclickbut()
	{
		// if(but.isClicked())
		// {
            buttonStart.style.visibility= "hidden"
			scenePlay()
			
		// }
	}
	function checkclickplay(){
		// if(buttutorial.isClicked()){
			tutorial.hide()
            buttutorial.style.visibility="hidden"

			playkahang =true
			playScene()
		// }
    }
    

	function scenePlay(){
		statusPlay=true
		
		scene.setSize(1024,650);
		background.changeImage("background3.jpg")
		background.setSpeed(0);
		background.setPosition(512,320);
		labelscore = new GameButton("คะแนน")
		labelscore.setPosition(420,20)
		tutorial =new Sprite(scene,"images/1x/manualModal.png",550,450);
		tutorial.setSpeed(0)
		tutorial.setPosition(512,320)
	
        buttutorial= document.createElement("img");
        buttutorial.src="images/1x/close.png"
        buttutorial.setAttribute('height', '50px');
        buttutorial.setAttribute('width','50px')
        buttutorial.style.position="absolute"
        buttutorial.style.left="720px"
        buttutorial.style.top="135px"
        document.body.appendChild(buttutorial);
        buttutorial.addEventListener("click",checkclickplay)
		diescore = new Sprite(scene,"images/1x/gameOverModal.png",550,450);
		diescore.setSpeed(0)
		diescore.setPosition(512,320)
	
		diescore.hide()
        
        
     

        playagainBut= document.createElement("img");
        playagainBut.src="images/1x/playAgainBtn.png"
        playagainBut.setAttribute('height', '50px');
        playagainBut.setAttribute('width','150px')
        playagainBut.style.position="absolute"
        playagainBut.style.left="437px"
        playagainBut.style.top="350px"
        document.body.appendChild(playagainBut);
        playagainBut.addEventListener("click",clickPlyagain)
        playagainBut.style.visibility= "hidden"
		
	
	
		for(var i=0; i<10;i++){
			tower[i] = new Tower(); 
			tower[i].setSpeed(0);
			tower[i].changeMoveAngleBy(180);

			if(i==0){
				tower[i].setPosition(200,Math.random()*50+40);
				position = tower[i].y;
			}
			else if(i%2==0){
				tower[i].setPosition(tower[i-2].x+200,Math.random()*50+40);
			}else{
				tower[i].changeImage("bottom.png");
				tower[i].setPosition(tower[i-1].x,tower[i-1].y+520);

			}
		
		}
		position2 = tower[2].y;
		for(var i=0; i<5;i++){
			heart[i] = new Heart();
			heart[i].setSpeed(0);
			heart[i].changeMoveAngleBy(180);

			heart[i].setPosition(tower[i*2].x,tower[i*2].y+250);
			
		}		
		kahang = new Kahang();
		kahang.setPosition(tower[0].x,tower[0].y+250)
		// butLeft = new Sprite(scene,"images/1x/btnFly.png",200,100)
		// butLeft.setSpeed(0)
        // butLeft.setPosition(150,550)
        
        butLeft= document.createElement("img");
        butLeft.src="images/1x/btnFly.png"
        butLeft.setAttribute('height', '100px');
        butLeft.setAttribute('width','200px')
        butLeft.style.position="absolute"
        butLeft.style.left="50px"
        butLeft.style.top="500px"
        document.body.appendChild(butLeft);
        butLeft.addEventListener("mousedown",flykahang)
        butLeft.addEventListener("mouseup",downkahang)

		// butRight = new Sprite(scene,"images/1x/btnFly.png",200,100)
		// butRight.setSpeed(0)
		// butRight.setPosition(874,550)
        // kahang.setPosition(125,heart[0].y+50);
        butRight= document.createElement("img");
        butRight.src="images/1x/btnFly.png"
        butRight.setAttribute('height', '100px');
        butRight.setAttribute('width','200px')
        butRight.style.position="absolute"
        butRight.style.left="774px"
        butRight.style.top="500px"
        document.body.appendChild(butRight);
        butRight.addEventListener("mousedown",flykahang)
        butRight.addEventListener("mouseup",downkahang)

    }
    function flykahang(){
       
    clickbut = true

}
function downkahang(){
    clickbut=false
    
}
	function playScene(){
		
		for(var i=0; i<10;i++){
			tower[i].setSpeed(2);
		}
		for(var i=0; i<5;i++){
			heart[i].setSpeed(2);
		}

	}
	

	function init(){
		// scenePlay();
		startScene();
	}
	

	function update(){ 
		scene.clear();
		
		background.update();
		
		
		if(statusPlay){
		kahang.checkKeys();
		kahang.checkGravity();
	
		for(var i=0; i<10;i++){
			checkCollisionsTower(i);
			tower[i].update();
		}
		for(var i=0; i<5;i++){
			checkCollisions(i);
			showHeart(i);
			heart[i].update();

		}
		
		if(score >= 10&&score<20){
			moveBamboo(0.5);			
		}
		if(score >= 20){
			moveBamboo(1);
		}
		
		kahang.update();
		// butLeft.update()
		// butRight.update()
		tutorial.update()
		diescore.update()
		// playagainBut.update()
		// checkclickplay()
		
		}
		else{
			// but.update();
			kahangStart.update();
			logo.update();
			// checkclickbut();
		}
		// if(die){
		// 	clickPlyagain()
		// }
	}