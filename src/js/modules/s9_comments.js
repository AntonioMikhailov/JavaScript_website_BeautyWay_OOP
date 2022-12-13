export default class Comments {
  constructor() {
    this.s9RequestRow = document.querySelector('.s9-request__row');
    this.s9ButtonItem = document.querySelectorAll('.s9-button__item');
  }
  init() {
    let rowWidth = getComputedStyle(this.s9RequestRow).width;
    let offset = (+rowWidth.replace(/\D/g, ''));
    this.s9ButtonItem.forEach((item, i) => {
      let slideTo = i;
      item.addEventListener('click', () => {
        this.s9RequestRow.style.transform = `translate(-${offset * slideTo}px)`;
        this.s9ButtonItem.forEach(item => {
          item.classList.remove('s9-active');
          this.s9ButtonItem[i].classList.add('s9-active');
        });
      });
    });
  }


} //