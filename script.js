
document.addEventListener("DOMContentLoaded", () => {

  /* ===== AKTIV MENYLENKE ===== */
  const links = document.querySelectorAll("nav a");
  const currentPage =
    window.location.pathname.split("/").pop().toLowerCase() || "index.html";

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (href && href.toLowerCase() === currentPage) {
      link.classList.add("active");
    }
  });


  /* ===== FLIP-CARD (KLIKK) ===== */
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });


  /* ===== AUTOMATISK ÅRSTAL ===== */
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
