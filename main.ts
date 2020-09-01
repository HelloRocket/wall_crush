input.onButtonPressed(Button.A, function () {
    Hero.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Hero.change(LedSpriteProperty.X, 1)
})
let Hero: game.LedSprite = null
let Wall: number[] = []
Hero = game.createSprite(2, 4)
Hero.set(LedSpriteProperty.Blink, 300)
