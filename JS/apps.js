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

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
document.addEventListener("DOMContentLoaded", () => {

/* ================= FILTER KATEGORI ================= */
const categoryFilter = document.getElementById("categoryFilter");
const bookCards = document.querySelectorAll("#new .book-card");
const title = document.getElementById("bookTitle");

categoryFilter.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName !== "A") return;

  const selectedCategory = e.target.dataset.value;

  // filter buku
  bookCards.forEach(card => {
    const cardCategory = card.dataset.category;

    if (selectedCategory === "all" || cardCategory === selectedCategory) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });

  // update judul
  updateTitle(selectedCategory);
});

function updateTitle(category) {
  const titles = {
    all: "Daftar Buku",
    romantis: "Buku Romantis",
    fantasi: "Buku Fantasi",
    horor: "Buku Horor",
    komedi: "Buku Komedi",
    "pengembangan-diri": "Buku Pengembangan Diri",
    komik: "Buku Komik"
  };

  title.textContent = titles[category] || "Daftar Buku";
}


  /* ================= MODAL BUKU  ================= */
const modal = document.getElementById("bookModal");
const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close-btn");

document.addEventListener("click", function (e) {
  const card = e.target.closest(".book-card");
  if (!card) return;

  modalTitle.textContent =
    card.querySelector(".book-title")?.textContent || "";
  modalAuthor.textContent =
    card.querySelector(".book-author")?.textContent || "";
  modalDesc.textContent =
    card.querySelector(".book-desc")?.textContent || "";
  modalPrice.textContent =
    card.querySelector(".book-price")?.textContent || "";

  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

document.querySelectorAll(".slide-btn").forEach(btn => {
  btn.addEventListener("click", e => e.stopPropagation());
});
});



/*=============== SLIDER BOOKS ===============*/
document.querySelectorAll(".book-container").forEach(container => {
  const slider = container.previousElementSibling;
  if (!slider || !slider.classList.contains("slider-control")) return;

  const left = slider.querySelector(".slide-left");
  const right = slider.querySelector(".slide-right");

  const scrollAmount = 300;

  right.addEventListener("click", () => {
    container.scrollLeft += scrollAmount;
  });

  left.addEventListener("click", () => {
    container.scrollLeft -= scrollAmount;
  });
});

/*=============== SLIDER BOOKS ===============*/
document.querySelectorAll(".slider-wrapper").forEach(wrapper => {
  const container = wrapper.querySelector(".book-container");
  const btnLeft = wrapper.querySelector(".slide-left");
  const btnRight = wrapper.querySelector(".slide-right");

  if (!container || !btnLeft || !btnRight) return;

  const scrollAmount = container.querySelector(".book-card").offsetWidth + 20;

  btnRight.addEventListener("click", e => {
    e.stopPropagation();

    // kalau sudah mentok kanan
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  });

  btnLeft.addEventListener("click", e => {
    e.stopPropagation();

    // kalau sudah mentok kiri
    if (container.scrollLeft <= 0) {
      container.scrollTo({
        left: container.scrollWidth,
        behavior: "smooth"
      });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  });
});



/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home-swiper', {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1220: {
      spaceBetween: -32,
    }
  }
});
