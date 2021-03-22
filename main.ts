input.onButtonPressed(Button.A, function () {
    basic.showString("LILLIANNA IS A FANTASTIK SINGER ")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("SHE CAN SING 3 + 3 = ")
})
music.playMelody("- G E D E G - - ", 120)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
