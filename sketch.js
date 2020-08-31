var bg1, bg2 
var gamestate = 0; 
var player, player2, player3, player4;
var greeting;

  function preload() { 
bg1 = loadImage("images/bgimg.png");
    
  }
function setup() {
  createCanvas(800, 800);
 
  var name = createInput();
  name.position(320,400) 
  var play = createButton("play");
  play.position(320,430);
   greeting = createElement('h2')
   greeting.html("Hello "+ name.value());
   greeting.position(400,400);
  greeting.hide();
   play.mousePressed(()=>{
name.hide();
play.hide();
gamestate = 1;

greeting.show();
})

 player = createSprite(400,400,33,33);
  player.visible = false
  player.shapeColor = "green"
player2= createSprite(500,400,33,33);
  player2.visible = false
  player2.shapeColor = "red"
 player3 = createSprite(400,500,33,33);
  player3.visible = false
  player3.shapeColor = "blue"
 player4 = createSprite(500,500,33,33);
  player4.visible = false;
  player4.shapeColor = "black"

  



  }


function draw() {
  

  background("pink");
   drawSprites();
   if (gamestate === 1 ){
    players();
   fill("black");
   textSize(23);
   textFont("georgia")
   text("CHOOSE YOUR AVATAR!", 200,300)
  }
 if(mousePressedOver(player)){
  gamestate = 2;

 }
 if (gamestate === 2 ){
   startGame();
   
 }
}
function players () { 
 
  player.visible = true ;
  player2.visible = true ;
  player3.visible = true ;
  player4.visible = true ;
}

function startGame (){ 
  player2.visible = false
  player3.visible = false
  player4.visible = false
  
 
}