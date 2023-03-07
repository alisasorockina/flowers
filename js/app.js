// Меню
const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});
// Слайдер
const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");

sliderItems.forEach(function (slide, index) {
  if (index !== 0) slide.classList.add("hidden");
  slide.dataset.index = index;
  sliderItems[0].setAttribute("data-active", "");
  slide.addEventListener("click", function () {
    showNextSlide("next");
  });
});

btnNext.onclick = function () {
  console.log("Next Slide");
  showNextSlide("next");
};

btnPrev.onclick = function () {
  console.log("Prev Slide");
  showNextSlide("prev");
};

function showNextSlide(direction) {
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  let nextSlideIndex;
  if (direction === "next") {
    nextSlideIndex =
      currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex =
      currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }

  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
}
// Модальное окно
document
  .getElementById("open-modal-btn")
  .addEventListener("click", function (evt) {
    evt.preventDefault();

    if (document.contact_form.contact_phone.value === "") {
      document.querySelector(".title-sub").innerHTML = "Ой!";
      document.querySelector(".subtitle-sub").innerHTML =
        "Пожалуйста, проверьте введенные данные!";
    } else {
      document.querySelector(".title-sub").innerHTML = "Поздравляем!";
      document.querySelector(".subtitle-sub").innerHTML =
        "Данные были отправлены!";
    }
    document.getElementById("my-modal").classList.add("open");
  });

document
  .getElementById("close-my-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open");
  });

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("my-modal").classList.remove("open");
  }
});

document
  .querySelector("#my-modal .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
document.getElementById("my-modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
