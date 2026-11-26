const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("venon-theme");
if (savedTheme === "light") document.body.classList.add("light-mode");
function updateThemeButton() {
  if (!themeToggle) return;
  const isLight = document.body.classList.contains("light-mode");
  themeToggle.innerHTML = isLight
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
  themeToggle.setAttribute("title", isLight ? "Switch to dark mode" : "Switch to light mode");
}
updateThemeButton();
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("venon-theme", document.body.classList.contains("light-mode") ? "light" : "dark");
    updateThemeButton();
  });
}
const WHATSAPP_NUMBER = "2609759983355";
const slides = document.querySelectorAll(".hero-slide");
const slideButtons = document.querySelectorAll("[data-slide]");
let currentSlide = 0;
let slideTimer;
function showSlide(index) {
  if (!slides.length) return;
  currentSlide = index;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));
  slideButtons.forEach((button, i) => button.classList.toggle("active", i === index));
}
function startSlideshow() {
  if (!slides.length) return;
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide((currentSlide + 1) % slides.length), 5500);
}
slideButtons.forEach(button => button.addEventListener("click", () => {
  showSlide(Number(button.dataset.slide)); startSlideshow();
}));
startSlideshow();
const typed = document.querySelector(".typed-word");
if (typed) {
  const words = (typed.dataset.words || "Software Engineer").split(",");
  let wordIndex = 0, charIndex = words[0].length, deleting = true;
  function typeLoop() {
    const word = words[wordIndex];
    if (!deleting) {
      charIndex++;
      typed.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) { deleting = true; setTimeout(typeLoop, 1300); return; }
    } else {
      charIndex--;
      typed.textContent = word.slice(0, charIndex);
      if (charIndex === 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; }
    }
    setTimeout(typeLoop, deleting ? 55 : 95);
  }
  setTimeout(typeLoop, 1400);
}
const contactForm = document.getElementById("whatsappForm");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (WHATSAPP_NUMBER.includes("X")) {
      document.getElementById("formNote").textContent =
        "WhatsApp contact is not configured. Please check the contact settings.";
      return;
    }
    const data = new FormData(contactForm);
    const message = `Hello Vernon!%0A%0AName: ${encodeURIComponent(data.get("name"))}%0AEmail: ${encodeURIComponent(data.get("email"))}%0ASubject: ${encodeURIComponent(data.get("subject"))}%0A%0AMessage:%0A${encodeURIComponent(data.get("message"))}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
  });
}
document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());