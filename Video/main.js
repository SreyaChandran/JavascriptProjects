const btn = document.querySelector(".switch-btn");
const video = document.querySelector("#myVideo");
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
window.addEventListener("DOMContentLoaded", function () {
    btn.classList.add("slide");
  });