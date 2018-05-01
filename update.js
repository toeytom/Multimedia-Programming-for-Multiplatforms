function update(){
    scene.clear()
    bg.update()
    
    
    if(scene.getMouseClicked()){
        if(!statusgame){
            statusgame= true
        console.log("sd")
        bg.setImage("3.png")
        }
        else{
            console.log("sad")
            
        }
    }
    if(statusgame)
    {
        kahang.update()
    }
   
}