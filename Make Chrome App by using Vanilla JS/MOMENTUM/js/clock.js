const clock = document.getElementById("clock");

function getClock(){
  const date = new Date();
  const hour = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const second = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hour}:${minutes}:${second}`;
  clock.classList.add("clock");
}
getClock();
setInterval(getClock, 1000);