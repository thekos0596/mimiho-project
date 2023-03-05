// const { scrollTop } = require('dom7');

const animElements = document.querySelectorAll('._anim-elements');

if (animElements.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animElements.length; i++) {
      const animElement = animElements[i];
      const animElementHeight = animElement.offsetHeight;
      const animElementOffset = offset(animElement).top;
      const animStart = 1;

      let animElementPoint = (window.innerHeight - animElementHeight) / animStart;

      if (animElementHeight > window.innerHeight) {
        animElementPoint = (window.innerHeight - window.innerHeight) / animStart;
      }

      if (
        (scrollY > animElementOffset - animElementPoint) &&
        scrollY < (animElementOffset + animElementHeight)
      ) {
        animElement.classList.add('_appeared');
      } else {
        if (!animElement.classList.contains('_anim-nohide')) {
        animElement.classList.remove('_appeared');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
