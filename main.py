def on_received_number(receivedNumber):
    if receivedNumber == 1:
        basic.clear_screen()
        basic.pause(5)
        basic.clear_screen()
        basic.show_leds("""
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            """)
        basic.pause(10)
        basic.clear_screen()
    if receivedNumber == 3:
        basic.clear_screen()
        basic.pause(5)
        basic.clear_screen()
        basic.show_leds("""
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            """)
        basic.pause(100)
        basic.clear_screen()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global a
    a = 1
    radio.send_number(a)
    basic.pause(5)
    a = 0
    radio.send_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global a
    a = 3
    radio.send_number(a)
    basic.pause(5)
    a = 0
    radio.send_number(0)
input.on_button_pressed(Button.B, on_button_pressed_b)

a = 0
a = 0
radio.set_group(77)