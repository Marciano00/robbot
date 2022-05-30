input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 300; index++) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        music.playTone(880, music.beat(BeatFraction.Whole))
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 300; index++) {
        music.playTone(659, music.beat(BeatFraction.Whole))
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        music.playTone(880, music.beat(BeatFraction.Whole))
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.showString("BB TROCHIN")
basic.pause(1000)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
})
