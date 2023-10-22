const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
        delay: 1000,
      },
      effect: 'coverflow',
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
  grabCursor: true,
  
  });