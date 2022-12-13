import OffsetMargin from "./marginOffset.js";
export default class Header extends OffsetMargin {
  constructor(mobileWrapper, header, button, mobileRow) {
    super();
    this.mobileWrapper = document.querySelector(mobileWrapper);
    this.header = document.querySelector(header);
    this.BurgerButton = document.querySelector(button);
    this.mobileRow = document.querySelector(mobileRow);
    this.mobileItem = document.querySelectorAll('.mobile-item ');
  }
  mobileOffset() {
    this.mobileTopOffset = this.header.getBoundingClientRect().height;
    this.mobileWrapper.style.marginTop = this.mobileTopOffset + 'px';
  }
  toggleMobileMenu() {
    this.BurgerButton.classList.toggle('burger-active');
    this.mobileRow.classList.toggle('mobile-show');
    this.mobileWrapper.classList.toggle('mobile-background');
    if (this.BurgerButton.classList.contains('burger-active')) {
      new OffsetMargin().addOffsetMargin();
    } else {
      new OffsetMargin().removeOffsetMargin();
    }
  }
  init() {
    this.mobileOffset();
    this.BurgerButton.addEventListener('click', () => {
      this.toggleMobileMenu();
    });
    window.addEventListener('resize', () => {
      this.mobileOffset();
    });
    this.mobileRow.addEventListener('click', (e) => {
      if (e.target == this.mobileRow) {
        this.toggleMobileMenu();
      }
    });
    this.mobileItem.forEach(item => {
      item.addEventListener('click', () => {
        setTimeout(() => {
          this.toggleMobileMenu();
        }, 1000);
      });
    });
  }
}