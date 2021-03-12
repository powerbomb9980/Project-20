var tom, tomImg, tomAnimation, tomTouching;
var jerry, jerryImg, jerryAnimation, jerryTouching;
var backgroundImg;


function preload() {
    tomImg = loadAnimation("images/cat1.png")
    tomAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
    tomTouching = loadAnimation("images/cat4.png");
    jerryImg = loadAnimation("images/mouse1.png");
    jerryAnimation = loadAnimation("images/mouse2.png", "images/mouse3.png")
    jerryTouching = loadAnimation("images/mouse4.png");
    backgroundImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(870, 600, 50, 50);
    tom.addAnimation("tom", tomImg);
    tom.scale = 0.2;

    jerry = createSprite(200, 600, 50, 50);
    jerry.addAnimation("jerry", jerryImg);
    jerry.scale = 0.15;

    /*background = createSprite(500, 400, 50, 50);
    background.addAnimation("background", backgroundImg);*/

}

function draw() {

    background(backgroundImg);
    
    if(tom.x - jerry.x < tom.width/2 - jerry.width/2){
        jerry.addAnimation("jerryLast", jerryTouching);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerryLast");
        tom.velocityX = 0;
        tom.addAnimation("tomLast", tomTouching);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomLast");
    }

    drawSprites();
}


function keyPressed(){

  


    

if(keyCode === (LEFT_ARROW)){
   tom.velocityX = -5;
   tom.addAnimation("tomMoving", tomAnimation);
   tom.changeAnimation("tomMoving");
   jerry.addAnimation("jerryTeasing", jerryAnimation);
   jerry.changeAnimation("jerryTeasing");


}
}