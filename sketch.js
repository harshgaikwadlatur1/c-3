var splash
var gameState = "wait"
var playbutton, soundonbutton, soundoffbutton, level1bgimg, level1bg, level2bgimg, level2bg
var health = 0
var maxHealth = 400
var score1 = 0


function preload() {
    splash = loadImage("assets/Killer.gif")
    level1bgimg = loadImage("assets/level1bg.jpg")
}


function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/startbutton.png")
    playbutton.position(width / 2-70 , height / 2 + height / 4)
    playbutton.size(200,200)
// 
    // soundonbutton = createImg("soundOn.png")
    // soundonbutton.position(playbutton.x-200,height/2+height/5)
    // soundonbutton.size(150,150)

    // soundoffbutton = createImg("soundOff.png")
    // soundoffbutton.position(playbutton.x+250,height/2+height/5)
    // soundoffbutton.size(150,150)


    // level1bg = createSprite(width / 2, height / 2, width, height)
    // level1bg.addImage(level1bgimg)
    // level1bg.scale = 1.95
    // level1bg.visible = false


    player=createSprite(100,height-100,50,50)
    player.visible=false


}


function draw() {
    if (gameState == "wait") {
        background(splash)
    }

    playbutton.mousePressed(() => {
        gameState = "level1"
        playbutton.hide()
    })

    if (gameState == "level1") {
        background(level1bgimg)
        level1bg.visible = true
        level1bg.velocityX += -2
        if (level1bg.x <= 0) {
            level1bg.x =level1bg.width / 2
        }

        player.visible=true


    }

    drawSprites()

    if(gameState=="level1"){
        textSize(50)
        fill("black")
        stroke(255,0,0)
        strokeWeight(2)
        text("LEVEL 1",width/2-100,80)
        healthlevel1()

    }
}


function spawnEnemies(){

}


function healthlevel1() {

    stroke("gold");
    strokeWeight(7);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill("red");
    rect(10, 10, map(health, 0, maxHealth, 0, 200), 20);
}