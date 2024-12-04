const hamburgerMenu = document.querySelector(".menu__hamburger")
hamburgerMenu.addEventListener("click", () => {
  document.querySelector(".menu__items").classList.toggle("menu__items--show")
})
