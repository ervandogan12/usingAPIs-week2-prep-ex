"use strict";

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let currentPos = startPos;
    const walkInterval = setInterval(() => {
      currentPos += STEP_SIZE_PX;
      img.style.left = `${currentPos}px`;
      if (currentPos >= stopPos) {
        clearInterval(walkInterval);
        resolve();
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    const originalSrc = img.src;
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = originalSrc;
      resolve();
    }, DANCE_TIME_MS);
  });
}

async function catWalk() {
  while (true) {
    const img = document.querySelector("img");
    const startPos = -img.width;
    img.style.left = `${startPos}px`;
    const centerPos = (window.innerWidth - img.width) / 2;
    const stopPos = window.innerWidth;
    await walk(img, startPos, centerPos);
    await dance(img);
    img.style.left = `${centerPos}px`;
    await walk(img, centerPos, stopPos);
    img.style.left = `${startPos}px`;
  }
}

window.addEventListener("load", catWalk);
