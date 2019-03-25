// Stop watch with start, stop, duration, and reset

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function () {
        if(running) {
            throw new Error('Stopwatch has already started.');
        } else {
            running = true;
            startTime = new Date();
        }
    };
    this.stop = function () {
        if (!running) {
            throw new Error('Stopwatch has not started.');
        } else {
            running = false;
            endTime = new Date();
            const seconds = (endTime.getTime() - startTime.getTime())/1000; //divide by 1000 to get seconds
            duration += seconds; // add this to the duration
        }
    };
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    });
}