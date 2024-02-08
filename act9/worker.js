var time = 72729;
var option = 0;
var timer;
function timedCount() {
    if (option % 2 == 0) {
        time = time + 1;
        postMessage(time);
    }
    timer = setTimeout(timedCount, 1000);
}

function stopTimer() {
    postMessage(time);
    clearTimeout(timer);
}

self.onmessage = function handleMessageFromMain(msg) {
    console.log("received from main: " + msg.data);
    option = msg.data;
    if (option % 2 == 0) {
        timedCount();
    } else {
        stopTimer();
    }
}