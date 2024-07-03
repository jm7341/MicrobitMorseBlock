radio.onReceivedNumber(function (receivedNumber) {
    if (b == 1) {
        music.play(music.stringPlayable("C E G B C5 B - - ", 500), music.PlaybackMode.UntilDone)
    }
    if (receivedNumber == 1) {
        basic.clearScreen()
        basic.pause(5)
        basic.clearScreen()
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(5)
        basic.clearScreen()
        b += 1
        basic.pause(10)
        b += 1
    }
    if (receivedNumber == 3) {
        basic.clearScreen()
        basic.pause(5)
        basic.clearScreen()
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(200)
        basic.clearScreen()
        b += 1
        basic.pause(10)
        b += 1
    }
})
input.onButtonPressed(Button.A, function () {
    a = 1
    radio.sendNumber(a)
    basic.pause(5)
    a = 0
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    a = 3
    radio.sendNumber(a)
    basic.pause(5)
    a = 0
    radio.sendNumber(0)
})
let a = 0
let b = 0
b = 0
a = 0
radio.setGroup(77)
