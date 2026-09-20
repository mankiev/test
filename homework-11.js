// Уровень 1 подписка

const footerForm = document.querySelector(".footer__form");

footerForm.addEventListener('submit', event => {
  event.preventDefault(); //отменяем стандартную отправку
  
  //проверяем валидность email
  if (!footerForm.checkValidity()) {
    footerForm.reportValidity();
    return;
  };
  
  const email = footerForm.elements.email.value;
  
  console.log({ email });
  
  footerForm.reset();
});



// Уровень 2 модалка

const modalOpen = document.querySelector(".modal__open");
const modalClose = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const formRegister = document.querySelector(".form-register")

let user = {};

//добавляем класс к элементу по клику
modalOpen.addEventListener("click", () => {
  modal.classList.add("modal--shown");
  overlay.classList.add("overlay--shown");
});

//удаляем класс элемента по клику
modalClose.addEventListener("click", () => {
  modal.classList.remove("modal--shown");
  overlay.classList.remove("overlay--shown");
});

//удаляем класс по клику вне модалального окна
overlay.addEventListener("click", event => {
  if (event.target === overlay) {
    modal.classList.remove("modal--shown");
    overlay.classList.remove("overlay--shown");
  }
});

//слушаем отправку формы
formRegister.addEventListener("submit", (event) => {
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
  
  modal.classList.remove("modal--shown");
  overlay.classList.remove("overlay--shown");
  
  console.log(user);
  
  formRegister.reset();
});
