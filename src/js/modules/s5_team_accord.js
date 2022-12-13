export default class Accordion {
  constructor(accordTitle, accordImage) {
    this.s5_accordTitle = document.querySelectorAll(accordTitle);
    this.s5_rightImage = document.querySelectorAll(accordImage);
  }
  init() {
    this.s5_accordTitle.forEach((item, i) => {
      this.s5_accordTitle[0].nextElementSibling.style.maxHeight = this.s5_accordTitle[0].nextElementSibling.scrollHeight + 'px';
      this.s5_accordTitle[0].classList.add('accord-active');
      this.s5_rightImage[0].classList.add('accord-active');
      
      item.addEventListener('click', () => { 
        this.s5_accordTitle.forEach(item => {
          item.nextElementSibling.style.maxHeight = 0 + 'px';
          item.classList.remove('accord-active');
        });
        item.classList.toggle('accord-active');
        if (item.classList.contains('accord-active')) {
          item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';
        } else {
          item.nextElementSibling.style.maxHeight = '0px';
        }
        this.s5_rightImage.forEach(item => {
          item.classList.remove('accord-active');
        });
        this.s5_rightImage[i].classList.add('accord-active');
      });
    });
  }
}