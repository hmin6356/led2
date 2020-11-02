let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
})
