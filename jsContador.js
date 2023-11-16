// Happy New Year!!!
//
// Basically I just combined three great ideas :)
// Canvas Snow, Countdown and Text Background Animation with CSS
//
// This awesome Canvas Snow was created along with Paul Lewis:
// https://www.youtube.com/watch?v=VW8qoyYzWGg&t
//
class Snowflake {
  // ... (sin cambios en esta clase)
}

class Snow {
  // ... (sin cambios en esta clase)
}

new Snow();

////////////////////////////////////////////////////////////
// Simple CountDown Clock

const d = document.getElementById("d");
const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");

function getTrueNumber(num) {
  return num < 10 ? "0" + num : num;
}

function calculateRemainingTime() {
  const comingDate = new Date(`Dec 8, 2023 18:00:00`);

  const now = new Date();
  const remainingTime = comingDate.getTime() - now.getTime();
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);

  d.innerHTML = getTrueNumber(days);
  h.innerHTML = getTrueNumber(hours);
  m.innerHTML = getTrueNumber(mins);
  s.innerHTML = getTrueNumber(secs);

  return remainingTime;
}

function initCountdown() {
  setInterval(() => {
    calculateRemainingTime();
  }, 1000);
}

initCountdown();