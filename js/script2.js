if (window.matchMedia('(max-width: 860px)').matches) {
  const sliderItem = document.querySelectorAll('.stages__item'),
    sliderLine = document.querySelector('.stages__list'),
    sliderDots = document.querySelectorAll('.slider__dot'),
    sliderBtnNext = document.querySelector('.stages__slider-next'),
    sliderBtnPrev = document.querySelector('.stages__slider-prev');

  let sliderCount = 0,
    sliderWidth;

  window.addEventListener('resize', showSlide);

  sliderBtnNext.addEventListener('click', slideNext);
  sliderBtnPrev.addEventListener('click', slidePrev);

  function showSlide() {
    sliderWidth = document.querySelector('.stages__slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderItem.length + 'px';
    sliderItem.forEach((item) => (item.style.width = sliderWidth + 'px'));

    rollSlider();
  }
  showSlide();

  function updateButtons() {
    if (sliderCount === 0) {
      sliderBtnPrev.classList.add('disable');
    } else {
      sliderBtnPrev.classList.remove('disable');
    }

    if (sliderCount === sliderItem.length - 1) {
      sliderBtnNext.classList.add('disable');
    } else {
      sliderBtnNext.classList.remove('disable');
    }
  }

  function slideNext() {
    sliderCount++;
    if (sliderCount >= sliderItem.length) sliderCount = 4;

    rollSlider();
    thisSlide(sliderCount);
  }

  function slidePrev() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
  }

  function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
  }

  function thisSlide(index) {
    sliderDots.forEach((item) => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
  }

  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      sliderCount = index;
      rollSlider();
      thisSlide(sliderCount);
    });
  });
}
