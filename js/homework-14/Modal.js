export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.button = document.getElementById(buttonId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeButton = this.modal.querySelector('#modal-close-button');
    // Сохраняем функцию в свойстве объекта,
    // чтобы ТОЧНО ЭТУ ЖЕ функцию передавать в add и remove EventListener
    this.closeHandler = () => {
      this.close()
    };
    this.#initOpen();
    this.#initClose();
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    if (this.shouldCloseOnOverlay) {
      //Передаем сохраненную функцию в объекте
      this.overlay.addEventListener('click', this.closeHandler)
    }
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    //Удаляем Эту ЖЕ сохраненную функцию из обработчика событий click.
    this.overlay.removeEventListener('click', this.closeHandler);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen() {
    this.button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose() {
    this.closeButton.addEventListener('click', () => {
      this.close();
    })
  }
}