const section = document.querySelector(".handbag");
const hiddenParagraph = document.querySelector(".handbag__info--hidden");
const handbagBtn = document.querySelector(".handbag__btn");

handbagBtn.addEventListener("click", () => {
  hiddenParagraph.classList.remove("handbag__info--hidden");
  hiddenParagraph.classList.add("handbag__info--visible");
  handbagBtn.classList.add("handbag__btn--hidden");
});

const observer = new IntersectionObserver(
  ([entry]) => {
    section.classList.toggle("handbag--visible", entry.isIntersecting);

    // restarting the state, optional
    handbagBtn.classList.remove("handbag__btn--hidden", entry.isIntersecting);
    hiddenParagraph.classList.toggle(
      "handbag__info--hidden",
      entry.isIntersecting
    );
    hiddenParagraph.classList.toggle(
      "handbag__info--visible",
      !entry.isIntersecting
    );
    // end of optional

    section.classList.toggle("handbag--hidden", !entry.isIntersecting);
  },
  { threshold: 0.1 }
);

observer.observe(section);

customElements.define("handbag-section", HandbagSection);
