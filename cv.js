/* flashlight */
let mouseX = 0;
let mouseY = 0;
let flashlight = document.getElementById("flashlight");
let head = document.getElementsByTagName("header")[0];
let img = document.getElementsByTagName("img")[0];
let button = document.querySelector(".button-container");
let resumeName = document.getElementsByTagName("h1")[0];
let resumeJob = document.getElementsByTagName("h2")[0];
let container = document.querySelector(".container");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let skills = document.querySelectorAll(".articleOne p");
// let skillsR = document.querySelectorAll(".right");

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
    location.reload();
  } else {
    flashlight.style.display = "block";
    head.style.display = "flex";
    img.classList.remove("display");
    button.style.marginBottom = "10px";
    resumeName.style.marginLeft = "2%";
    resumeJob.style.marginRight = "0";
    container.style.backgroundColor = "#3a3a3a";
    container.style.color = "#f3f3f3";
    two.style.backgroundColor = "#3a3a3a";
    two.style.color = "#f3f3f3";
    three.style.backgroundColor = "#3a3a3a";
    three.style.color = "#f3f3f3";
    // skills.style.color = "#f3f3f3";
    // skillsR.style.color = "#f3f3f3";
    skills.forEach((skill) => {
      skill.style.color = "#f3f3f3";
    });
  }
}

flashlight.style.display = "none";

document.addEventListener("mousemove", getMousePosition);
document.addEventListener("touchmove", getMousePosition);

/*date footer */

const now = new Date();
const span = document.createElement("span");
const footer = document.querySelector(".footer");

span.textContent = dateFns.format(now, "MMMM, YYYY. ");
footer.insertBefore(span, footer.firstChild);

/* accordion*/

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
