document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.querySelector(".mobile-menu");
  const navegacion = document.querySelector(".navegacion-principal");

  btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    navegacion.classList.toggle("active");
  });

  const enlaces = document.querySelectorAll(".navegacion-principal a");
  enlaces.forEach((link) => {
    link.addEventListener("click", () => {
      btnMenu.classList.remove("active");
      navegacion.classList.remove("active");
    });
  });
});
