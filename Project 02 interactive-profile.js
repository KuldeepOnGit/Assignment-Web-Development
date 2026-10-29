
const themeBtn = document.querySelector("#themeBtn");
const likeBtn = document.querySelector("#likeBtn");
const likesEl = document.querySelector("#likes");
const faqBtn = document.querySelector("#faqBtn");
const faqAnswer = document.querySelector("#faqAnswer");

let likes = 0;

// Toggle between light and dark themes
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Increase like count
likeBtn.addEventListener("click", () => {
  likes++;
  likesEl.textContent = likes;
});

// Show or hide FAQ answer
faqBtn.addEventListener("click", () => {
  const isOpen = faqBtn.getAttribute("aria-expanded") === "true";

  faqBtn.setAttribute("aria-expanded", String(!isOpen));
  faqAnswer.classList.toggle("hidden");
});
