export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeButton = this.modal.querySelector('.modal__close');
    this.initCloseButton();
  }
  
  open() {
    this.modal.classList.add('modal--shown');
  }
  
  close() {
    this.modal.classList.remove('modal--shown');
  }
  
  isOpen() {
    return this.modal.classList.contains('modal--shown');
  }
  
  initCloseButton() {
    this.closeButton.addEventListener('click', () => {
      this.close();
    });
  }
};

