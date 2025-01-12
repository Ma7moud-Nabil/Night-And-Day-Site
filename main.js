let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let name = document.querySelector(".name");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 1.5 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  name.style.fontSize = value + "px";
  name.style.position = "fixed";
  if (scrollY >= 112) {
    name.style.fontSize = 112 + "px";
    if (scrollY >= 571) {
      name.style.display = "none";
    } else {
      name.style.display = "block";
    }
    if (scrollY >= 201) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281, #10001f)";
    } else {
      document.querySelector(".main").style.background = "linear-gradient(#200016, #10001f)";
    }
  }
};
