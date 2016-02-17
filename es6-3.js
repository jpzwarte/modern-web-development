function Timer() {
    this.seconds = 0;

    var that = this;
    setInterval(function () { that.seconds++ }, 1000);
}

class Timer () {
    constructor() {
        this.seconds = 0;
        setInterval(() => this.seconds++, 1000);
    }
}

let timer = new Timer();
setTimeout(() => console.log(timer.seconds), 3100);
