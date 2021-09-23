const startTimer = (duration, f) => {
    var display = document.querySelector(".time");
    var button = document.querySelector(".start");
    button.style.display = "none";
    var timer = duration,
        minutes,
        seconds;
    var refreshId = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(refreshId);
            f();
        }
    }, 1000);
};

const relax = () => {
    document.body.style.backgroundColor = "#a39ec4";
    var button = document.querySelector(".start");
    button.style.display = "inline";
    var taskname = document.querySelector(".taskname");
    taskname.style.display = 'none';
    var relaxname = document.querySelector(".break");
    relaxname.style.display = 'block';
    var time = document.querySelector(".time");
    time.textContent = '05:00';
    startTimer(60 * 5, start);
};

const start = () => {
    document.body.style.backgroundColor = "#4c4c4c";
    var taskname = document.querySelector(".taskname");
    taskname.style.display = 'block';
    var relaxname = document.querySelector(".break");
    relaxname.style.display = 'none';
    startTimer(60 * 25, relax);
}

var startButton = document.querySelector(".start");
startButton.addEventListener("click", start);
