const sec = document.querySelector(".s"),
  min = document.querySelector(".m"),
  hour = document.querySelector(".h"),
  hoursNumber = document.querySelector(".hours"),
  minutesNumber = document.querySelector(".minutes");

function clock() {
  /* 
        new Date() - Получает дату и время с ПК
        getMinutes()   - получает минуты
        getSeconds() - получает секунды
        getHours() - получает часы 
    
    */

  let time = new Date(),
    seconds = time.getSeconds() * 6,
    minutes = time.getMinutes() * 6,
    hours = time.getHours() * 30;

  hour.style = `transform: rotate(${hours}deg)`;
  min.style = `transform: rotate(${minutes}deg)`;
  sec.style = `transform: rotate(${seconds}deg)`;

  hoursNumber.innerHTML =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  minutesNumber.innerHTML =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

  // Рекурсия - это когда функция вызывается внутри себя

  setTimeout(() => clock(), 1000);
}

clock();

const links = document.querySelectorAll(".tabsItem"),
  tabsContent = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    e.preventDefault(); /* Отключает обычное действие элемента в браузере */
    removeActiveClass();
    addActiveClass(this, tabsContent[i]);
  });
}

function removeActiveClass() {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  tabsContent.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function addActiveClass(trigger, tab) {
  trigger.classList.add("active");
  tab.classList.add("active");
}

const btn = document.querySelector(".stopwatch__btn");
var timeout;
btn.addEventListener("click", () => {
  if (btn.innerHTML == "start") {
    btn.innerHTML = "stop";
    timer();
  } else if (btn.innerHTML == "stop") {
    clearTimeout(timeout);
    btn.innerHTML = "reset";
  } else if (btn.innerHTML == "reset") {
    btn.innerHTML = "start";
    stopWatch.innerHTML = "0";
    stopMinutes.innerHTML = "0";
    stopHour.innerHTML = '0';
  }
});

const stopWatch = document.querySelector(".stopwatch__seconds");

const stopMinutes = document.querySelector(".stopwatch__minutes");

const stopHour = document.querySelector(".stopwatch__hours");

function timer() {
  stopWatch.innerHTML++;

  if (stopWatch.innerHTML == "60") {
    stopWatch.innerHTML = "0";
    stopMinutes.innerHTML++;
  } else if (stopMinutes.innerHTML == "60") {
    stopMinutes.innerHTML = "0";
    stopHour.innerHTML++;
  }
  timeout = setTimeout(() => timer(), 1000);
}

