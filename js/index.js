const toggleClass = (el, className) => el.classList.toggle(className);
const removeClass = (el, className) => el.classList.remove(className);

(() => {
  // Top slider
  const slides = [
    {title:`Pink Shoes`, text: 'Now af $145.99'},
    {title:`Anna Field`, text: 'Limited Edition'},
    {title:`Prada`, text: 'Summer is coming'},
    {title:`Casadei`, text: 'All Colors avaiable'},
    {title:`Mellow Yellow`, text: 'Free delivery'},
]

  const swiper = new Swiper('[data-slider-top]', {
    loop: true,
    centeredSlides: true,

    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    pagination: {
      el: '[data-slider-top-pagination]',
      clickable: true,
      renderBullet: (index, className) => {
        return `<div class="${className}">
                  <div class="bullet__line">
                    <div class="bullet__line-inner"></div>
                </div>
                  <div class="bullet__content">
                    <h3 class="bullet__title">${slides[index].title}</h3>
                    <p class="bullet__desc">${slides[index].text}</p>
                  </div>
                </div>`
      }
    }
  })
})();

(() => {
  // fixed navigation
  const FIXED_CLASS = 'bar--fixed'
  const bar = document.querySelector('[data-fixed-bar]')
  const previousElementBar = bar.previousElementSibling
  const pointFixed = bar.offsetTop

  window.addEventListener('scroll', () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled >= pointFixed) {
      bar.classList.add(FIXED_CLASS)
      previousElementBar.style.cssText = `margin-bottom:${pointFixed}px`
    }  else {
      bar.classList.remove(FIXED_CLASS)
      previousElementBar.style.cssText = `margin-bottom:${0}px`
    }

  })

  // Fixed bar
})();

(() => {
  // Mobile menu logic
  const ACTIVE__CLASS = 'open'
  const VISIBLE__CLASS = 'visible'
  const LOCK__CLASS = 'lock'
  const burger = document.querySelector('.burger')
  const overlay = document.querySelector('[data-main-overlay]')
  const nav = document.querySelector('[data-mobile-menu]')
  const body = document.body

  burger.addEventListener('click', () => {
    toggleClass(burger, ACTIVE__CLASS)
    toggleClass(overlay, VISIBLE__CLASS)
    toggleClass(nav, ACTIVE__CLASS)
    toggleClass(body, LOCK__CLASS)
  })

  overlay.addEventListener('click', () => {
    removeClass(burger, ACTIVE__CLASS)
    removeClass(overlay, VISIBLE__CLASS)
    removeClass(nav, ACTIVE__CLASS)
    removeClass(body, LOCK__CLASS)
  })

  nav.addEventListener('click', event => {
    const target = event.target
    if (target.closest('.nav__link') || target.closest('.header__cart')) {
      removeClass(burger, ACTIVE__CLASS)
      removeClass(overlay, VISIBLE__CLASS)
      removeClass(nav, ACTIVE__CLASS)
      removeClass(body, LOCK__CLASS)
    }
  })

})();