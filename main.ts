controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.image.flipY()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.image.flipX()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.image.flipX()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.image.flipY()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
let mySprite: Sprite = null
let dotSprite: Sprite = null
let dotsVertical = 15
let dotsHorizontal = 5
info.setScore(0)
for (let index = 0; index <= 12; index++) {
    for (let index = 0; index <= 15; index++) {
        dotSprite = sprites.create(assets.image`dot`, SpriteKind.Food)
        dotSprite.setPosition(dotsHorizontal, dotsVertical)
        dotsHorizontal += 10
    }
    dotsHorizontal = 5
    dotsVertical += 10
}
mySprite = sprites.create(img`
    . . . 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 f 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 . . . . . 
    5 5 5 5 5 5 . . . . . . . 
    5 5 5 5 5 5 5 5 . . . . . 
    5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
