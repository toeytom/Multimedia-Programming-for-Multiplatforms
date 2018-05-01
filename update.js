function update(){
    scene.clear()
    bg.update()
    
    
    if(scene.getMouseClicked()){
        if(!statusgame){
            statusgame= true
        console.log("sd")
        bg.setImage("3.png")
        game()
        }
        else{
            console.log("sad")
            
        }
    }
    if(statusgame)
    {
        kahang.update()
        for(var i = 0;i<8;i++)
        {
           
            pipe[i].update()
        }
        for(var i = 0;i<4;i++){
            hearth[i].update()
        }
    }
    
   
}