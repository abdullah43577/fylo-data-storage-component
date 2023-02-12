"use strict";

let usedStorageEl = document.querySelector(
  ".range--container > p > :first-child"
);
let totalStorageSpaceEl = document.querySelector(
  ".space--container > :last-child"
);
let ununsedStorageEl = document.querySelector(".data-storage > :first-child");
let rangeSlider = document.querySelector(".range");

let totalStorageSpace = 1000;
let usedStorage = 815;
let ununsedStorage = 185;

// couting animation
const animateCounter = (start, end, value, duration) => {
  let animationEvent = setInterval(() => {
    value.textContent = `${start++} GB`;
    if (start > end) {
      clearInterval(animationEvent);
    }
  }, duration);
};

animateCounter(0, totalStorageSpace, totalStorageSpaceEl, 5);
animateCounter(0, usedStorage, usedStorageEl, 5);
animateCounter(0, ununsedStorage, ununsedStorageEl, 35);

// div slider
const slider = (start, end, value) => {
  let animationSlider = setInterval(() => {
    value.style.width = `${start++}%`;
    if (start > end) {
      clearInterval(animationSlider);
    }
  }, 80);
};

slider(0, 70, rangeSlider);
