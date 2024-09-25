/*- wrinkles-slider -*/
const swiperConfigs = [
  { container: '#wrinkles-slider-1 .swiper', nextButton: '#wrinkles-slider-1 .swiper-button-next', prevButton: '#wrinkles-slider-1 .swiper-button-prev' },
  { container: '#wrinkles-slider-2 .swiper', nextButton: '#wrinkles-slider-2 .swiper-button-next', prevButton: '#wrinkles-slider-2 .swiper-button-prev' },
  { container: '#wrinkles-slider-3 .swiper', nextButton: '#wrinkles-slider-3 .swiper-button-next', prevButton: '#wrinkles-slider-3 .swiper-button-prev' },
];

swiperConfigs.forEach(config => {
  new Swiper(config.container, {
    autoplay: false,
    autoHeight: true,
    loop: true,
    speed: 1000,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: config.nextButton,
      prevEl: config.prevButton,
    },
  });
});

/*- wrinkles-col -*/
document.addEventListener('DOMContentLoaded', () => {
  const classes = ['top-active', 'middle-active', 'bottom-active'];

  const isElementCentered = (element) => {
    const margin = 150;

    const rect = element.getBoundingClientRect();
    const viewportCenterY = window.innerHeight / 2;
    const elementCenterY = rect.top + rect.height / 2;

    return Math.abs(elementCenterY - viewportCenterY) <= margin;
  }

  const handleScroll = () => {
    const blocks = document.querySelectorAll('.wrinkles-info__item');
    const lines = document.querySelectorAll('.line-col__item');
    const text = document.querySelectorAll('.head-text__item');
    const head = document.querySelector('.head__img-active');

    blocks.forEach((el, index) => {
      if (isElementCentered(el)) {
        el.classList.add('active');
        lines[index].classList.add('active');
        text[index].classList.add('active');

        head.className = ''
        head.classList.add(`head__img-active`, classes[index]);
      }
    });
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll);
});





