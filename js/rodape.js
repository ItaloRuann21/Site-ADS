window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("btn-voltar-topo2").style.display = "block";
  } else {
    document.getElementById("btn-voltar-topo2").style.display = "none";
  }
};

// Voltar ao topo do menu
document
  .getElementById("btn-voltar-topo2")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
