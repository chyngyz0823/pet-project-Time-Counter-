// Определяем действующие элементы на странице
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Таймер будет идти до конца следующего года, то есть он будет динамическим  (не важно какой текущий год).
const yearNow = new Date().getFullYear();
const nextYear = new Date(`January 01 ${yearNow + 1} 00:00:00`);

// Делаем все расчеты внутри функции
function updateCounter() {
  // Создаем разницу между конечной датой и текущей.
  const currentTime = new Date();
  const diff = nextYear - currentTime;

  // Переводим в секунды | минуты | часы | дни

  // Переводим в дни + округляем их в меньшую сторону.
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

  // Получем часы от остатка деления на сутки + округляем их в меньшую сторону.
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

  // Получаем минуты от остатка деления на часы.
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

  // Получаем секунды от остатка деления на минуты.
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}

updateCounter();
// Создаем интервал который будет запускать функцию каждую секунду
setInterval(updateCounter, 1000);
