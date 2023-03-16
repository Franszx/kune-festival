const menu_btn = document.querySelector(".burger");
const nav_menu = document.querySelector("nav");
const ticket_btn = document.querySelector(".buy_ticket_btn");
// const body = document.querySelector("body");
menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  nav_menu.classList.toggle("is-active");
  ticket_btn.classList.toggle("hidden");
  // body.height = 100 + "vh";
});
