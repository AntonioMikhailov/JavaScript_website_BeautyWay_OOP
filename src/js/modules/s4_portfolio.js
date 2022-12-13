import OffsetMargin from "./marginOffset.js";
export default class Portfolio {
  constructor() {
    this.s4Item = document.querySelectorAll('.s4-item ');
    this.s4GalleryItem = document.querySelectorAll('.s4-gallery__item');
    this.s4Gallery = document.querySelector('.s4-gallery');
    this.s4ButtonPrev = document.querySelector('.s4-button__prev ');
    this.s4ButtonCancel = document.querySelector('.s4-button__cancel');
    this.s4ButtonNext = document.querySelector('.s4-button__next');
  }
  init() {
    let SlideIndex = 1;
    this.s4Item.forEach((item, i) => {
      item.addEventListener('click', () => {
        this.s4Gallery.classList.add('s4-gallery__show');
        this.s4GalleryItem[i].classList.add('s4-show__galleryImage');
        SlideIndex = i + 1;
        new OffsetMargin().addOffsetMargin();
      });
    });

    function plusSlides(n) {
      showSlides(SlideIndex += n);
    }
    let showSlides = (n) => {
      if (n > this.s4GalleryItem.length) {
        SlideIndex = 1;
      }
      if (n < 1) {
        SlideIndex = this.s4GalleryItem.length;
      }
      this.s4GalleryItem.forEach(item => {
        item.classList.remove('s4-show__galleryImage');
        this.s4GalleryItem[SlideIndex - 1].classList.add('s4-show__galleryImage');
      });
    }
    this.s4ButtonNext.addEventListener('click', () => {
      plusSlides(1);
    });
    this.s4ButtonPrev.addEventListener('click', () => {
      plusSlides(-1);
    });
    [this.s4Gallery, this.s4ButtonCancel].forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target == this.s4Gallery || item == this.s4ButtonCancel) {
          this.s4Gallery.classList.remove('s4-gallery__show');
          this.s4GalleryItem.forEach(item => {
            item.classList.remove('s4-show__galleryImage');
            setTimeout(() => {
              new OffsetMargin().removeOffsetMargin(); 
            }, 200);
          });
        }
      });
    });
  } //
}