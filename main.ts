input.onButtonPressed(Button.A, function () {
    basic.showString("LILLYANNA IS VERY LAZY STUDENT ")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("SHE CAN SING 3 + 3 = ")
})
music.playMelody("C5 A B G A F G E ", 120)
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
