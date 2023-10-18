const button = document.getElementById("pause-button");
const pause = `<svg height="32px" width="24px">
                <rect height="32" width="8" />
                <rect height="32" width="8" x="16" />
              </svg>`;
const play = `<svg height="32px" width="24px">
                <polygon points="0,0 24,16 0,32" />
              </svg>`;

const clock = () => {
  let hours = new Date().getHours().toString();
  let minutes = new Date().getMinutes().toString();
  let seconds = new Date().getSeconds().toString();

  hours = hours.length === 1 ? "0" + hours : hours;
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  seconds = seconds.length === 1 ? "0" + seconds : seconds;

  document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
};

const playClock = () => {
  intervalID = setInterval(clock, 1000);
  button.onclick = () => pauseClock();
  button.innerHTML = pause;
};

const pauseClock = () => {
  clearInterval(intervalID);
  button.onclick = () => playClock();
  button.innerHTML = play;
};

var intervalID = setInterval(clock, 1000);
