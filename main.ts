let положение_х = 0
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
    положение_х += -1
    led.toggle(положение_х, 0)
})
input.onGesture(Gesture.TiltRight, function () {
    положение_х += 1
    led.toggle(положение_х, 0)
})
input.onButtonPressed(Button.A, function () {
    led.plot(2, 2)
})
basic.forever(function () {
	
})
