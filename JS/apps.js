// ================= SEARCH =================
const searchWrapper = document.getElementById("search-wrapper");
const searchButton = document.getElementById("search-button");
const searchInput = searchWrapper.querySelector(".search-input");
const logoText = document.querySelector(".logo-text");

searchButton.addEventListener("click", () => {
  searchWrapper.classList.toggle("active");

  if (searchWrapper.classList.contains("active")) {
    searchInput.focus();
    logoText.classList.add("hidden"); //sembunyikann teks
  } else {
    logoText.classList.remove("hidden"); //tampilkan lagi
  }
});


// ================= FILTER BUKU =================
document.addEventListener("DOMContentLoaded", () => {
  const categoryFilter = document.getElementById("categoryFilter");
  const bookCards = document.querySelectorAll(".book-card");

  categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;

    bookCards.forEach(card => {
      const cardCategory = card.dataset.category;

      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
