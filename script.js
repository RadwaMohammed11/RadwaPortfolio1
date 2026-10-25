
// ===============================
// Typing Effect
// ===============================

const text = "Radwa Mohamed Fahmy";
const typingElement = document.querySelector(".typing");

let index = 0;

function typing() {
  if (!typingElement) return;
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typing, 120);
  }
}

typing();


// ===============================
// Mouse Glow Effect on Cards
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(224,170,255,0.4),
      rgba(255,255,255,0.08))
    `;

  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255,255,255,.1)";
  });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";
    }

  });

});

document.querySelectorAll(".card").forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "1s";

  observer.observe(card);

});


// ===============================
// Custom Cursor Effect
// ===============================

const cursor = document.createElement("div");

cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.border = "2px solid white";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.pointerEvents = "none";
cursor.style.transition = ".1s";
cursor.style.zIndex = "9999";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});


// ===============================
// AI Bot Toggle
// ===============================

function toggleBot() {

  const box = document.getElementById("botBox");
  const preview = document.querySelector(".bot-preview");

  if (!box) return;

  const isOpen = box.classList.toggle("show");

  if (isOpen) {
    if (preview) preview.style.display = "none";
  } else {
    if (preview) preview.style.display = "block";
  }

}
/* =========================================================
   SAME-PAGE NAVIGATION
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const extraSpace = 18;
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - extraSpace;

      window.scrollTo({
        top: Math.max(0, y),
        behavior: "smooth"
      });

      history.replaceState(null, "", targetId);
    });
  });

  // If the page loads with a hash, position it correctly too.
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(function () {
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 18;
        window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
      }, 80);
    }
  }
});
