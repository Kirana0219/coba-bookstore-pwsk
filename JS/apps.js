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

// ==================== MODAL DETAIL BUKU =================
const modal = document.getElementById("bookModal");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".book-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalAuthor.textContent = "Penulis: " + card.dataset.author;
    modalDesc.textContent = card.dataset.desc;
    modalPrice.textContent = "Harga: " + card.dataset.price;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
