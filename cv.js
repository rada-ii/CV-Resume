// let mouseX = 0;
// let mouseY = 0;
// let flashlight = document.getElementById("flashlight");
// let head = document.getElementsByTagName("header");
// let img = document.getElementsByTagName("img");

// let flashlightOn = false;

// const isTouchDevice = () => {
//   try {
//     document.createEvent("TouchEvent");
//     return true;
//   } catch (e) {
//     return false;
//   }
// };

// function getMousePosition(e) {
//   if (flashlightOn) {
//     mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
//     mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

//     flashlight.style.setProperty("--Xpos", mouseX + "px");
//     flashlight.style.setProperty("--Ypos", mouseY + "px");
//   }
// }

// function toggleFlashlight() {
//   flashlightOn = !flashlightOn;
//   if (!flashlightOn) {
//     flashlight.style.display = "none";
//   } else {
//     flashlight.style.display = "block";
//     head.classList.add("flex");
//     img.classList.remove("display");
//   }
// }

// flashlight.style.display = "none";

// document.addEventListener("mousemove", getMousePosition);
// document.addEventListener("touchmove", getMousePosition);

let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");
let head = document.getElementsByTagName("header")[0];
let img = document.getElementsByTagName("img")[0];
let button = document.querySelector(".button-container");
let flashlightOn = false;

const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

function getMousePosition(e) {
  if (flashlightOn) {
    mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

    flashlight.style.setProperty("--Xpos", mouseX + "px");
    flashlight.style.setProperty("--Ypos", mouseY + "px");
  }
}

function toggleFlashlight() {
  flashlightOn = !flashlightOn;
  if (!flashlightOn) {
    flashlight.style.display = "none";
    head.style.display = "";
    img.classList.add("display");
  } else {
    flashlight.style.display = "block";
    head.style.display = "flex";
    img.classList.remove("display");
    button.style.marginBottom = "10px";
  }
}

flashlight.style.display = "none";

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

const now = new Date();
const span = document.createElement("span");

span.textContent = dateFns.format(now, "MMMM, YYYY. ");

const existingSpan = document.querySelector("span");

existingSpan.parentNode.replaceChild(span, existingSpan);
