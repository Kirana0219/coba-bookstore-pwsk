/*=============== SEARCH BAR ===============*/
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
    logoText.classList.remove("hidden"); // tampilkan lagi
  }
});


// ================= FILTER BUKU =================
document.addEventListener("DOMContentLoaded", () => {

  /* ================= FILTER KATEGORI ================= */
  const categoryFilter = document.getElementById("categoryFilter");
  const bookCards = document.querySelectorAll(".book-card");

  categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value;

    bookCards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");

      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });

  /* ================= MODAL BUKU ================= */
  const modal = document.getElementById("bookModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalAuthor = document.getElementById("modalAuthor");
  const modalDesc = document.getElementById("modalDesc");
  const modalPrice = document.getElementById("modalPrice");
  const closeBtn = document.querySelector(".close-btn");

  bookCards.forEach(card => {
    card.addEventListener("click", () => {

      modalTitle.textContent = card.querySelector(".book-title").textContent;
      modalAuthor.textContent = "Penulis: " + card.querySelector(".book-author").textContent;
      modalDesc.textContent = card.querySelector(".book-desc").textContent;
      modalPrice.textContent = "Harga: " + card.querySelector(".book-price").textContent;

      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});

