class swiperTask extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="./assets/mobble-black-model-pos-1_900x.png"
              alt="Man with the glasses"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="./assets/mobble-ink-model-pos-8_900x.png"
              alt="Woman with the glasses"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="./assets/mobble-black-model-pos-2_900x.png"
              alt="Man with the glasses"
            />
          </div>
        </div>

        <img
          src="./assets/arrow_back_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png"
          alt="Back"
          class="swiper-button-prev"
        />

        <img
          src="./assets/arrow_forward_32dp_FFFFFF_FILL0_wght400_GRAD0_opsz40.png"
          alt="Froword"
          class="swiper-button-next"
        />
      </div>
      <div class="btn-container">
        <button class="swiper-btn">Destroy swiper</button>
      </div>
    </div>
        `;

    const toggleSwiperBtn = this.querySelector(".swiper-btn");

    let swiperInstance = null;
    initSwiper();

    function initSwiper() {
      swiperInstance = new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 8,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        on: {
          init: function () {
            console.log("Swiper initialized");
          },
          slideChange: function () {
            console.log("Slide:", this.activeIndex + 1);
          },
        },
      });
    }
    function destroySwiper() {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
        console.log("Swiper destroyed");
      }
    }
    toggleSwiperBtn.addEventListener("click", () => {
      if (swiperInstance) {
        destroySwiper();
        toggleSwiperBtn.textContent = "Initialize swiper";
        toggleSwiperBtn.style.backgroundColor = " #0E719C";
      } else {
        initSwiper();
        toggleSwiperBtn.textContent = "Destroy swiper";
        toggleSwiperBtn.style.backgroundColor = " #E34234";
      }
    });
  }
}

customElements.define("swiper-task", swiperTask);
