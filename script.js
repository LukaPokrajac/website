// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle. Defaults to light; remembers the visitor's choice across visits.
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

const saved = localStorage.getItem("theme");
if (saved === "dark") {
  root.setAttribute("data-theme", "dark");
}

toggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
});

// Reveal sections on scroll
const reveals = document.querySelectorAll(".section");
reveals.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((el) => io.observe(el));
