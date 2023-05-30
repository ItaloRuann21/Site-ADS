/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("btn-voltar-topo").style.display = "block";
  } else {
    document.getElementById("btn-voltar-topo").style.display = "none";
  }
};

// Voltar ao topo do menu
document
  .getElementById("btn-voltar-topo")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
