import OffsetMargin from "./marginOffset.js"; 

export default class Modal {
  constructor(modalWrapper, showForm, modalCancelButton, modalButton, modalTextarea, modalInput) {
    this.modalWrapper = document.querySelector(modalWrapper);
    this.showForm = document.querySelectorAll(showForm);
    this.modalCancelButton = document.querySelector(modalCancelButton);
    this.modalButton = document.querySelector(modalButton);
    this.modalTextarea = document.querySelector(modalTextarea);
    this.modalInput = document.querySelectorAll(modalInput);
  }
  init() {
    this.showForm.forEach(item => {
      item.addEventListener('click', () => {
        this.modalWrapper.classList.add('showModalWindow');
        if (item.hasAttribute('data-buttons7')) {
          new OffsetMargin().addOffsetMargin(false);
        } else {
          new OffsetMargin().addOffsetMargin();
        }
      });
    });
    [this.modalCancelButton, this.modalButton, this.modalWrapper].forEach(item => {
      item.addEventListener('click', (e) => {
        new OffsetMargin().removeOffsetMargin();
        if (e.target == this.modalWrapper || item == this.modalButton || item == this.modalCancelButton) {
          this.modalWrapper.classList.remove('showModalWindow');
        }
        if (item == this.modalButton) {
          this.modalInput.forEach(item => {
            item.value = '';
          });
          this.modalTextarea.value = '';
        }
      });
    });
  }
}
