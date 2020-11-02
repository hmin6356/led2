let 저항 = 0
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
basic.forever(function () {
    저항 = pins.analogReadPin(AnalogPin.P2)
    if (저항 < 100) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (저항 < 200) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (저항 < 300) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (저항 < 400) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (저항 < 500) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (저항 < 600) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (저항 < 700) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (저항 < 800) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (저항 < 900) {
        strip.rotate(1)
        strip.showRainbow(1, 360)
    }
})
