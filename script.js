// XView Web — Animaciones y efectos
document.addEventListener("DOMContentLoaded", () => {

  // Animación de aparición al hacer scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".feature-card, .step, .download-content").forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Navbar transparente al scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(10, 10, 26, 0.9)";
      navbar.style.backdropFilter = "blur(10px)";
    } else {
      navbar.style.background = "transparent";
      navbar.style.backdropFilter = "none";
    }
  });
});

// CSS para animaciones (inyectado por JS)
const animStyles = document.createElement("style");
animStyles.textContent = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .animate-on-scroll.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(animStyles);
