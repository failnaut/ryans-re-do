sprites.onCreated(SpriteKind.Food, function (sprite) {
    sprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    info.changeScoreBy(1)
    burgCount = burgCount - 1
    music.baDing.play()
})
let mySprite2: Sprite = null
let burgCount = 0
game.splash("press a please")
scene.setBackgroundColor(3)
let mySprite = sprites.create(assets.image`myface`, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
info.setScore(0)
music.playMelody("D F D A E - A - ", 285)
music.playMelody("D - D - D - D - ", 285)
music.playMelody("D G - G - G - G ", 285)
game.onUpdateInterval(1000, function () {
    if (burgCount < 5) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 4 4 4 4 4 . . . . . . . 
            . . 4 4 4 4 4 4 4 4 4 4 . . . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 5 5 5 5 5 e e e e e 5 5 5 5 . 
            . e e e e e e e e e e e 5 5 5 . 
            . . e e e e e e e e e e e e . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        music.thump.play()
        burgCount = burgCount + 1
    }
})
