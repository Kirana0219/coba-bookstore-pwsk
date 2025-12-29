const searchWrapper = document.getElementById("search-wrapper");
const searchButton = document.getElementById("search-button");
const searchInput = searchWrapper.querySelector(".search-input");
const logoText = document.querySelector(".logo-text");

searchButton.addEventListener("click", () => {
  searchWrapper.classList.toggle("active");

  if (searchWrapper.classList.contains("active")) {
    searchInput.focus();
    logoText.classList.add("hidden"); // sembunyikan teks
  } else {
    logoText.classList.remove("hidden"); // tampilkan lagi
  }
});

// Filter buku berdasarkan kategori
document.addEventListener("DOMContentLoaded", function () {
  const categoryFilter = document.getElementById("categoryFilter");
  const bookCards = document.querySelectorAll(".book-card");

  categoryFilter.addEventListener("change", function () {
    const selectedCategory = this.value;

    bookCards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");

      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
