export default class NavScroll {
  constructor(anchor) {
    this.link = document.querySelectorAll('a');
    this.anchor = document.querySelector(anchor);
    this.headerRow = document.querySelector('.header-row');
}
  init(durationTime) { 
    let scrollPos = 0;
    window.addEventListener('scroll', () => {
      let i = window.pageYOffset;
      let e = window.innerHeight;
      let documentScrollHeight = document.documentElement.scrollHeight;
      if ((document.body.getBoundingClientRect()).top > scrollPos && i >= e - i || i + e == documentScrollHeight) {
        this.anchor.classList.add('anchor-active');
      } else {
        this.anchor.classList.remove('anchor-active');
      }
      scrollPos = (document.body.getBoundingClientRect()).top;
    });
    function smoothScroll(targetSelector) {
      let whereTo = document.querySelector(targetSelector);
      let startPosition = window.pageYOffset;
      let targetPosition = whereTo.offsetTop - 100;
      let distance = targetPosition - startPosition;
      let duration = durationTime; // 1000 по умолчанию
      let start = null;
      window.requestAnimationFrame(step);
      function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        window.scrollTo(0, easing(progress, startPosition, distance, duration));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
    }
    function easing(t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
    this.link.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
    
        let targetPosition = item.getAttribute(`${'href'}`);
        if (item.hasAttribute('data-link')) {
          if (!item.hasAttribute('data-noTitleChange')) {
            document.querySelector('title').textContent = `BeautyWay - ${item.textContent}`;
          } else {
            document.querySelector('title').textContent = `BeautyWay – салон-парикмахерская`;
          }
          smoothScroll(targetPosition);
        }
        if (item.hasAttribute('data-delay')) {
          setTimeout(() => {
            smoothScroll(targetPosition);
          }, 0);
        }
      });
    });
  }
} //
