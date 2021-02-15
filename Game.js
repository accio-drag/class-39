class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1= createSprite(100,200,50,50);
    car2= createSprite(300,200,50,50);
  
    car3= createSprite(500,200,50,50);
  
    car4= createSprite(700,200,50,50);
  
cars = [car1,car2,car3,car4];
car1.addImage(car1i)
car2.addImage(car2i)
car3.addImage(car3i)
car4.addImage(car4i)


  }
  play(){
    form.hide();
    textSize(25);
    text("GAME START",150,100)
    Player.getPlayerInfo();
  if ( allPlayers !== undefined){
    //var pos = 120;
    background("#c68767");
    image(tracki,0,-displayHeight*4,displayWidth,displayHeight*5)
    var x = 170; 
    var index = 0
    var y = 0
    for (var plr in allPlayers){
      index+=1; 
      x+=200;
      y= displayHeight-allPlayers[plr].distance;
      cars[index-1].position.x = x;
      cars[index-1].position.y = y;
      if (index === player.index){
        fill("red")
ellipse(x,y,50,50)
        //cars[index-1].shapeColor="red"
        camera.position.x= displayWidth/2;
        camera.position.y=cars[index-1].y;

      }
    
    }
  }
  if (keyDown(UP_ARROW)&& player.index!==null){
player.distance+=50;
player.update()
}
if(player.distance>4000){
  gameState = 2

}
drawSprites();
  }
end(){console.log("game ended go home")}


}