const mainBox = document.querySelector(".box-flip");
// const topBox = document.querySelector('.top')
let getForwardTime = new Date("05-16-2023");
let getPresentTime = new Date();
const secondBox = document.querySelector(".second-box");
// trials
// const cardTop = document.createElement("div");
// cardTop.className = "flip-card-top";
// const cardBottom = document.createElement("div");
// cardBottom.className = "flip-card-bottom";

// // append to mainBox
// mainBox.append(cardTop, cardBottom);
// console.log(mainBox);

const card = document.querySelector(".flip-card-top");
// days
const dTop = document.getElementById("d-top");
const dBottom = document.getElementById("d-bottom");

// hours
const hTop = document.getElementById("h-top");
const hBottom = document.getElementById("h-bottom");

// minutes
const mTop = document.getElementById("m-top");
const mBottom = document.getElementById("m-bottom");

// seconds
const sTop = document.getElementById("s-top");
const sBottom = document.getElementById("s-bottom");

let currentSeconds;
let currentMinutes;
let currentHours;
let currentDay;

setInterval(function () {
  let getForwardTime = new Date("05-17-2023");
  let getPresentTime = new Date();

  let time =
    Math.abs(getForwardTime.getTime() - getPresentTime.getTime()) / 1000;

  let day = Math.floor(time / (60 * 60 * 24));

  // hours
  let hours = Math.floor(time / (60 * 60) % 24);

  // minutes

  let minutes;

  if (String(Math.floor(time / 60) % 60).length < 2) {
    minutes = `0${Math.floor(time / 60) % 60}`;
  } else {
    minutes = Math.floor(time / 60) % 60;
  }

  // seconds

  let second;
  if (String(Math.floor(time % 60)).length < 2) {
    second = `0${Math.floor(time % 60)}`;
  } else {
    second = Math.floor(time % 60);
  }

  if (String(day).length < 2) {
    dTop.textContent = `0${day}`;
    dBottom.textContent = `0${day}`;
  } else {
    dTop.textContent = day;
    dBottom.textContent = day;
  }

  // hours
  if (String(hours).length < 2) {
    hTop.textContent = `0${hours}`;
    hBottom.textContent = `0${hours}`;
  } else {
    hTop.textContent = hours;
    hBottom.textContent = hours;
  }

  // minutes
  if (String(minutes).length < 2) {
    mTop.textContent = `0${minutes}`;
    mBottom.textContent = `0${minutes}`;
  } else {
    mTop.textContent = minutes;
    mBottom.textContent = minutes;
  }
  // seconds
  if (String(second).length < 2) {
    sTop.textContent = `0${second}`;
    sBottom.textContent = `0${second}`;
  } else {
    sTop.textContent = second;
    sBottom.textContent = second;
  }

  // hours

  if (currentHours !== hours) {
    flipAllCard("", hours, "", "");
  }
  currentHours = hours;

  // minutes
  if (currentMinutes !== minutes) {
    flipAllCard("", "", minutes, "");
  }

  currentMinutes = minutes;

  // seconds
  currentSeconds = second;
  if (currentSeconds === second) {
    flipAllCard("", "", "", second);
  }
}, 1000);

// cardTop.textContent = sTop.textContent
// cardBottom.textContent = sTop.textContent;

// cardTop.addEventListener("animationstart", function () {
//   cardTop.remove();
// });

// cardBottom.addEventListener("animationend", function () {
//   cardBottom.remove();
// });

// console.log(sTop.textContent)

function flipAllCard(days, hours, minutes, seconds) {
  flip(document.querySelector("[data-days]"), days);
  flip(document.querySelector("[data-hours]"), hours);
  flip(document.querySelector("[data-minutes]"), minutes);
  flip(document.querySelector("[data-seconds]"), seconds);
}

function flip(flipcard, newNumber) {
  const topHalf = document.querySelector(".top");

  const startnumber = parseInt(topHalf.textContent);
  if (newNumber === startnumber) return;

  // const bottomHalf = flipcard.querySelector('.bottom')

  // card creation
  const cardTop = document.createElement("div");
  cardTop.className = "flip-card-top";
  const cardBottom = document.createElement("div");
  cardBottom.className = "flip-card-bottom";

  // append to mainBox

  // cardTop.textContent = sTop.textContent
  cardBottom.textContent = newNumber;

  // cardTop.addEventListener("animationstart", function () {
  //   cardTop.remove();
  // });

  // cardBottom.addEventListener("animationstart", function () {
  // bottomHalf.textContent = newNumber
  //   cardTop.remove();
  // });
  cardBottom.addEventListener("animationend", function () {
    cardBottom.textContent = newNumber
    cardBottom.remove();
    // flip(mainBox)
  });
  flipcard.append(cardBottom);
}

// flip(mainBox);
