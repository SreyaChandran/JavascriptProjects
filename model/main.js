const modal = document.querySelector("#modal");
const btn = document.querySelector("#btn");
const closebtn = document.querySelector(".bx-window-close");

btn.onclick = function() {
  modal.style.display = "block";
}
closebtn.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
