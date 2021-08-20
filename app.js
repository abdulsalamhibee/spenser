// Showing of menu and removing
const menu_toggle = document.querySelector(".menu_toggle");
const menu = document.querySelector("#menu");
const cancle = document.querySelector(".cancle");

menu_toggle.addEventListener("click", showmenu);

function showmenu() {
  menu.classList.add("show_menu");
}

cancle.addEventListener("click", remove);

function remove() {
  menu.classList.remove("show_menu");
}
