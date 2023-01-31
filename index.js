const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 3,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  centeredSlides: true,
  loop: true,
  gap: 2,

  navigation: {
    nextEl: '.swiper-button-next-uni',
    prevEl: '.swiper-button-prev-uni',
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  },

})

const swiper2 = new Swiper('.swiper2', {
  slidesPerView: 4,
  allowTouchMove: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  gap: 2,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-uni2',
    prevEl: '.swiper-button-prev-uni2',
  },
  breakpoints: {
    290: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  },
})

const menu = document.getElementById('menu');
const xButton = document.getElementById('x-button');
const menuItems = document.getElementById('menu-items');


menu.addEventListener('click', () => {
  menuItems.classList.toggle('menu-show');
  console.log('clicked')
})

xButton.addEventListener('click', () => {
  menuItems.classList.remove("menu-show")
})

//Clicking the bell will change the color
const bell = document.getElementById('bell');

bell.addEventListener('click', () => {
  bell.classList.toggle('bxs-bell')
})
