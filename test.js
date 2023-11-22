import b from 'bonescript';

//const b = require('bonescript');

const leds = ["USR0", "USR1", "USR2", "USR3", "P9_15"];

for(var i in leds) {
    b.pinMode(leds[i], b.OUTPUT);
}

var state = b.HIGH;
for(var i in leds) {
    b.digitalWrite(leds[i], state);
}

setInterval(toggle, 100);

function toggle() {
    if(state == b.LOW) 
        state = b.HIGH;
    else
        state = b.LOW;
    for(var i in leds) {
        b.digitalWrite(leds[i], state);
    }
}
