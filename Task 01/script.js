const handbagBtn = document.querySelector(".handbag__btn");
const hiddenParagraph = document.querySelector(".handbag__info--hidden");
const paragraph = document.querySelector(".handbag__info");
const handbagSection = document.querySelector(".handbag");

handbagBtn.addEventListener("click", () => {
  hiddenParagraph.classList.remove("handbag__info--hidden");
  hiddenParagraph.classList.add("handbag__info--visible");
  handbagBtn.classList.add("handbag__btn--hidden");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        handbagSection.classList.remove("handbag--hidden");
        handbagSection.classList.add("handbag--visible");
        handbagBtn.classList.remove("handbag__btn--hidden");
        hiddenParagraph.classList.remove("handbag__info--visible");
        hiddenParagraph.classList.add("handbag__info--hidden");
      } else {
        handbagSection.classList.remove("handbag--visible");
        handbagSection.classList.add("handbag--hidden");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(handbagSection);
