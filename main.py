def on_received_number(receivedNumber):
    pass
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global a
    a = 1
    radio.send_number(a)
    radio.send_number(0)
    a = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global a
    a = 3
    radio.send_number(a)
    radio.send_number(0)
    a = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

a = 0
a = 0
radio.set_group(77)

def on_forever():
    if a == 1:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.pause(200)
        basic.clear_screen()
    if a == 3:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.pause(600)
        basic.clear_screen()
basic.forever(on_forever)
