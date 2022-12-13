export default class Tabs {
  constructor(tabSelector, tabPanel, activeClass) {
  
    this.triggerSelector = document.querySelectorAll(tabSelector);
    this.contentSelector = document.querySelectorAll(tabPanel);
    this.activeClass = activeClass;
  }
  init() {
    let ShowTab = (i = 0) => {
      this.contentSelector.forEach(item => {
        item.classList.remove(this.activeClass);
      });
      this.contentSelector[i].classList.add(this.activeClass);
      this.triggerSelector.forEach(item => {
        item.classList.remove(this.activeClass);
      });
      this.triggerSelector[i].classList.add(this.activeClass);
    };
    ShowTab();
    this.triggerSelector.forEach((item, i) => {
      item.addEventListener('click', () => {
        ShowTab(i);
      });
    });
  }
}