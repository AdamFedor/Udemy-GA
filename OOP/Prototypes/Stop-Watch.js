// Stop watch with start, stop, duration, and reset

function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    Object.defineProperty(this, 'duration', {
        get: function () { return duration; },
        set: function (value) {duration = value}
    });
    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime; }
    });
    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime; }
    });
    Object.defineProperty(this, 'running', {
        get: function () { return running; }
    });
}

Stopwatch.prototype.start = function () {
    if (running) {
        throw new Error('Stopwatch has already started.');
    } else {
        this.running = true;
        this.startTime = new Date();
    }
};
Stopwatch.prototype.stop = function () {
    if (!running) {
        throw new Error('Stopwatch has not started.');
    } else {
        this.running = false;
        this.endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000; //divide by 1000 to get seconds
        duration += seconds; // add this to the duration
    }
};
Stopwatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0; // this is now a problem. it can be changed from the outside.
};

// the excercise was to put everything in the prototype
// Doing this was the wrong approach intentionally done as a learning lesson to a "what if" on putting in a prototype.
