const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const secondBox = document.querySelector(".second-box");
const minutesBox = document.querySelector(".min-box");
const hourBox = document.querySelector(".hour-box");

function workClock() {
  const currentDate = new Date();

  let seconds = currentDate.getSeconds();
  secondBox.textContent = seconds;
  let secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let minutes = currentDate.getMinutes();
  minutesBox.textContent = `${minutes}:`;
  let minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  let hours = currentDate.getHours();
  hourBox.textContent = `${hours}:`;
  let hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(workClock, 1000);
