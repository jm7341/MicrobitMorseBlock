radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.clearScreen()
        basic.pause(60)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(200)
        basic.clearScreen()
    }
    if (receivedNumber == 3) {
        basic.clearScreen()
        basic.pause(60)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(600)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    a = 1
    radio.sendNumber(a)
    radio.sendNumber(0)
    a = 0
})
input.onButtonPressed(Button.B, function () {
    a = 3
    radio.sendNumber(a)
    radio.sendNumber(0)
    a = 0
})
let a = 0
a = 0
radio.setGroup(77)
