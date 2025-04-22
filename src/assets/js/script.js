// ====================================
// Initialize all functionality when DOM is loaded
// ====================================
document.addEventListener("DOMContentLoaded", function () {
  initAOS(); // 👈 NEW
  initImageSwitcher();
  initNavLinks();
  initCountdown();
  initGallery();
  initScrollButton();
  initCoverflow();
  initLoadingScreen();
  initTooltips();
  preventFormResubmission();
});

// ====================================
// Initialization Functions
// ====================================

function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      mirror: false,
    });
  } else {
    console.warn("AOS library not found.");
  }
}

function refreshAOS() {
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
}

function initImageSwitcher() {
  const frontImage = document.querySelector(".img-front");
  const backImage = document.querySelector(".img-back");

  if (frontImage && backImage) {
    setInterval(() => {
      const isBackVisible = backImage.style.opacity === "1";
      backImage.style.opacity = isBackVisible ? "0" : "1";
      frontImage.style.opacity = isBackVisible ? "1" : "0";
    }, 3000);
  }
}

function initNavLinks() {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

function initGallery() {
  const images = [
    "../assets/images/gallery1.jpg",
    "../assets/images/gallery2.jpg",
    "../assets/images/gallery3.jpg",
    "../assets/images/gallery4.jpg",
    "../assets/images/gallery5.jpg",
    "../assets/images/gallery6.jpg",
  ];

  let currentIndex = 0;
  const modalImage = document.getElementById("modalImage");
  const imageModal = document.getElementById("imageModal")
    ? new bootstrap.Modal(document.getElementById("imageModal"))
    : null;
  const openImages = document.querySelectorAll(".open-lightbox");

  if (!modalImage || !imageModal) return;

  openImages.forEach((img) => {
    img.addEventListener("click", function () {
      currentIndex = parseInt(this.getAttribute("data-index")) || 0;
      showImage();
      imageModal.show();
    });
  });

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    });
  }

  function showImage() {
    modalImage.src = images[currentIndex];
  }
}

function debounce(func, wait = 100) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
}

function initScrollButton() {
  const scrollBtn = document.getElementById("scrollBtn");
  if (!scrollBtn) return;

  window.addEventListener(
    "scroll",
    debounce(() => {
      const header = document.querySelector("header");
      if (header && window.scrollY > header.offsetHeight) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    }, 150)
  );

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function initCoverflow() {
  const gallerySwiperEl = document.querySelector(".gallery-swiper");
  if (!gallerySwiperEl) return;

  new Swiper(".gallery-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".gallery-swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
}

function initTooltips() {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

function preventFormResubmission() {
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
}
