let intervalId = null;
let totalWorkedTime = 0;
let totalSessions = 0;
let sessionCount = 0;
let breakTime = parseInt(document.getElementById("break-time").value) * 60;
let longBreakTime = parseInt(document.getElementById("rest-time").value) * 60;
let sessionLimit = parseInt(document.getElementById("session-number").value);
let inSession = true;

let timerMinutes = parseInt(document.getElementById("minutes-input").value);
let timerSeconds = 0;

const formatTime = (seconds) => {
  return seconds.toString().padStart(2, "0");
};

document.getElementById("start-btn").addEventListener("click", () => {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    timerSeconds--;
    if (timerSeconds < 0) {
      timerMinutes--;
      timerSeconds = 59;
      document.getElementById("minutes-input").value = timerMinutes;
    }

    document.getElementById("seconds").textContent = formatTime(timerSeconds);

    if (timerMinutes <= 0 && timerSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;

      totalWorkedTime += parseInt(
        document.getElementById("minutes-input").value
      );

      totalSessions++;
      document.getElementById("completed-sessions").textContent +=
        totalSessions % 3 === 0 ? "☆" : "•";

      if (inSession) {
        sessionCount++;

        if (sessionCount >= sessionLimit) {
          timerMinutes = longBreakTime / 60;
          sessionCount = 0;
        } else {
          timerMinutes = breakTime / 60;
        }

        inSession = false;
      } else {
        timerMinutes = parseInt(document.getElementById("minutes-input").value);
        inSession = true;
      }
      document.getElementById("minutes-input").value = timerMinutes;
    }
  }, 1000);
});

document.getElementById("stop-btn").addEventListener("click", () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

document.getElementById("minutes-input").addEventListener("change", () => {
  timerMinutes = parseInt(document.getElementById("minutes-input").value);
});

document.getElementById("break-time").addEventListener("change", () => {
  breakTime = parseInt(document.getElementById("break-time").value) * 60;
});

document.getElementById("rest-time").addEventListener("change", () => {
  longBreakTime = parseInt(document.getElementById("rest-time").value) * 60;
});

document.getElementById("session-number").addEventListener("change", () => {
  sessionLimit = parseInt(document.getElementById("session-number").value);
});
