var player
var splashImage
var playButton,aboutButton,bglevel1

var gameState="wait"



function preload(){
splashImage = loadImage("assets/Endless bars.gif")
bglevel1 = loadImage("assets/Background 1.png")

}



function setup(){
createCanvas(windowWidth,windowHeight)

player=createSprite(50,height-50)

// playButton=createImg("")
// playButton.position(x,y)
// playButton.size(width,height)
 


    playButton=createImg("assets/play.png")
       playButton.position(width/4,height-height/2);
    playButton.size(500,550);

    aboutButton=createImg("assets/about.png")
    aboutButton.position(playButton.x+250,playButton.y-109);
    aboutButton.size(500,550);
 

}



function draw(){

    if(gameState=="wait"){
background(splashImage)
}

playButton.mousePressed(()=>{
    gameState="play"
})


if(gameState=="play"){

    background(bglevel1)
}


drawSprites()
}
 var  weapon

 function preload(){
 weapon = loadImage("game-boilerplate-latest-main/assets/download-removebg-preview (2).png")

    bglevel1 = loadImage("game-boilerplate-latest-main/assets/background 2.avif")
}
var weapon1


function preload(){
    weapon1 = loadImage("game-boilerplate-latest-main/assets/images-removebg-preview (2).png")
   
       bglevel1 = loadImage("game-boilerplate-latest-main/assets/Snow background3.jpg")
   }

   var weapon2


function preload(){
    weapon2 = loadImage("game-boilerplate-latest-main/assets/download-removebg-preview (3).png")
   
       bglevel1 = loadImage("game-boilerplate-latest-main/assets/Snow background.avif")
   }

   var weapons3


   function preload(){
       weapons3 = loadImage("game-boilerplate-latest-main/assets/obstacles.webp")
      
          bglevel1 = loadImage("game-boilerplate-latest-main/assets/Snow background 1.webp")
      }

      var weapons4


          weapons4 = loadImage("game-boilerplate-latest-main/Untitled_2-removebg-preview.png")
         
             bglevel1 = loadImage("game-boilerplate-latest-main/assets/back.jpg")
        


             weapons5 = loadImage("game-boilerplate-latest-main/UNITED-removebg-preview.png")
            
                bglevel1 = loadImage("game-boilerplate-latest-main/assets/background 2.avif")
      


            
                weapons6 = loadImage("game-boilerplate-latest-main/Obstacles_3-removebg-preview.png")
               
                   bglevel1 = loadImage("game-boilerplate-latest-main/assets/games.avif")
              var weapons7


                   weapons7 = loadImage("game-boilerplate-latest-main/assets/image_7 P.webp")
                  
                      bglevel1 = loadImage("game-boilerplate-latest-main/assets/games.avif")
              