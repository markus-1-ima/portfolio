
document.addEventListener("DOMContentLoaded", function () {
  /* ===== AKTIV MENYLENKE ===== */
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (href && href.toLowerCase() === currentPage) {
      link.classList.add("active");
    }
  });

  /* ===== FLIP-CARD PÅ MOBIL / KLIKK ===== */
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach(card => {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  });

  /* ===== AUTOMATISK ÅRSTAL I FOOTER ===== */
  const yearElement = document.querySelector("#year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// finn alle flip-cards
const cards = document.querySelectorAll(".flip-card");

// legg til klikk på kvar
cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
