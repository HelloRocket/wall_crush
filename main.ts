input.onButtonPressed(Button.A, function () {
    Hero.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Hero.change(LedSpriteProperty.X, 1)
})
let EmptySpaceX = 0
let Count = 0
let Hero: game.LedSprite = null
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    # . # . .
    . # . . .
    `)
let Wall: game.LedSprite[] = []
Hero = game.createSprite(2, 4)
Hero.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (Wall.length > 0 && Wall[0].get(LedSpriteProperty.Y) == 4) {
        Wall.removeAt(0).delete()
    }
    for (let Brick of Wall) {
        Brick.change(LedSpriteProperty.Y, 1)
    }
    if (Count % 3 == 0) {
        EmptySpaceX = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != EmptySpaceX) {
                Wall.push(game.createSprite(index, 0))
            }
        }
    }
    for (let Brick of Wall) {
        if (Brick.get(LedSpriteProperty.X) == Hero.get(LedSpriteProperty.X) && Brick.get(LedSpriteProperty.Y) == Hero.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    Count += 1
    basic.pause(1000)
})
