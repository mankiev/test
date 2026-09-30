import { Modal } from "./modal.js";
import { Form } from "./form.js";

// Уровень 1 подписка
const footerForm = new Form('footer__form');

footerForm.form.addEventListener('submit', event => {
  event.preventDefault(); //отменяем стандартную отправку
  
  //проверяем валидность email используя метод из класса
  if (!footerForm.isValidity()) {
    footerForm.form.reportValidity();
    return;
  };
  
  //деструктуризация - создаем переменную и получаем значение из объекта
  const { email } = footerForm.getValue();
  
  console.log(email);
  
  footerForm.resetForm();
});



// Уровень 2 модалка
const modalOpen = document.querySelector('.modal__open')
const registerModal = new Modal('modal');
const formRegister = document.querySelector(".form-register")

let user = {};

//добавляем класс к элементу по клику
modalOpen.addEventListener("click", () => {
  registerModal.open();
});

//удаляем класс по клику вне модалального окна
registerModal.modal.addEventListener("click", event => {
  if (event.target === registerModal.modal) {
    registerModal.close();
  }
});

//слушаем отправку формы
formRegister.addEventListener("submit", event => {
  event.preventDefault();
  
  //проверка валидности полей
  if (!formRegister.checkValidity()) {
    formRegister.reportValidity();
    return;
  }
  
  //проверка совпадение паролей
  if (formRegister.password.value !== formRegister.repeatPassword.value) {
    alert('Пароли не совпадают! Регистрация отклонена.');
    return;
  }
  
  //добавляем в глобольный объект user имя и значения из формы
  for (const field of formRegister.elements) {
      if (field.name !== "repeatPassword" && field.name) {
        user[field.name] = field.value;
      }
  }
  
  //добавляем в объект user время создания формы
  user.createdOn = new Date();
  
  registerModal.close();
  
  console.log(user);
  
  formRegister.reset();
});
