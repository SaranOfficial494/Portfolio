// Smooth reveal when sections enter the screen
const revealItems = document.querySelectorAll(
  ".section, .space-section, .project-card, .skill-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

// Highlight the active navigation link
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
});