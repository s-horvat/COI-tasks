class HandbagSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="handbag handbag--hidden">
      <img
        src="./assets/model.png"
        alt="Woman holding handbag"
        class="handbag__image"
      />
      <div class="handbag__container">
        <h3 class="handbag__title">Handcrafted and Responsibly Sourced</h3>
        <p class="handbag__info">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain.
        </p>
        <p class="handbag__info handbag__info--hidden">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain.
        </p>
        <button class="handbag__btn">Learn more</button>
      </div>
    </section>
        `;

    const section = this.querySelector(".handbag");
    const hiddenParagraph = this.querySelector(".handbag__info--hidden");
    const handbagBtn = this.querySelector(".handbag__btn");

    handbagBtn.addEventListener("click", () => {
      hiddenParagraph.classList.remove("handbag__info--hidden");
      hiddenParagraph.classList.add("handbag__info--visible");
      handbagBtn.classList.add("handbag__btn--hidden");
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle("handbag--visible", entry.isIntersecting);

        // restarting the state, optional
        handbagBtn.classList.remove(
          "handbag__btn--hidden",
          entry.isIntersecting
        );
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
  }
}

customElements.define("handbag-section", HandbagSection);
