const infoText = document.getElementById('info-text');
const usersList = document.querySelector('.users-list');
const deleteAllUsers = document.querySelector('.delete-all-users');
deleteAllUsers.textContent = 'Удалить всех пользователей';
const getAllUsers = document.querySelector('.get-all-users');
getAllUsers.textContent = 'Получить всех пользователей';

async function fetchUsers() {
  const response = await fetch("./async.json");
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`)
  };
  return response.json();
}

// 1. Загрузка данных и сохранение в localStorage, если их там нет
async function userData() {
  try {
    const savedUsers = localStorage.getItem("users")
    
    if(!savedUsers) {
      infoText.textContent = 'Данные загружаются';
      await new Promise(resolve => {setTimeout(resolve, 1000)});
      
      const users = await fetchUsers()
      localStorage.setItem("users", JSON.stringify(users));
      infoText.textContent = '';
    };
  } catch(error) {
    infoText.textContent = "Ошибка при загрузке данных";
    console.error(error);
  }
}

// 2. Отрисовка пользователей из localStorage
function renderUsers() {
    const users = JSON.parse(localStorage.getItem('users') || "[]");
    usersList.innerHTML = '';
    
    if(users.length === 0) {
      infoText.textContent = "Список пользователей пуст!";
      return;
    } else {
      infoText.textContent = "";
    }
    
    // Создаем кнопку для каждой карточки
    users.forEach(user => {
      const buttonDeleteUser = document.createElement('button');
      buttonDeleteUser.className = 'delete-user';
      buttonDeleteUser.textContent = 'х';
      
      // Удаление конкретного пользователя
      buttonDeleteUser.addEventListener('click', () => {
        const currentUsers = JSON.parse(localStorage.getItem('users') || "[]");
        const upgradeUsers = currentUsers.filter(u => u.id !== user.id); // Сравниваем id объекта из слушателя с id объекта из хранилища
        localStorage.setItem('users', JSON.stringify(upgradeUsers));
        renderUsers()
      })
      const li = document.createElement('li');
      li.className = 'users-item';
      const p1 = document.createElement('p');
      const p2 = document.createElement('p');
      const p3 = document.createElement('p');
      const p4 = document.createElement('p');
      const p5 = document.createElement('p');
      p1.textContent = (`ID: ${user.id}`);
      p2.textContent = (`Имя: ${user.name}`);
      p3.textContent = (`Фамилия: ${user.surname}`);
      p4.textContent = (`Возраст: ${user.age}`);
      p5.textContent = (`Email: ${user.email}`);
      li.append(buttonDeleteUser, p1, p2, p3, p4, p5);
      usersList.append(li);
    });
}

// 3. Глобальные обработчики событий (вешаются один раз)

deleteAllUsers.addEventListener('click', () => {
  const currentUsers = JSON.parse(localStorage.getItem('users') || "[]");
  if(currentUsers.length === 0) {
    infoText.textContent = 'Пользователи уже удалены!'
    return;
  }
  usersList.innerHTML = '';
  infoText.textContent = 'Пользователи удалены!'
  localStorage.setItem("users", JSON.stringify([]))
  }
);
   
getAllUsers.addEventListener('click', async () => {
  try {
    const originalUsers = await fetchUsers()
    const currentUsers = JSON.parse(localStorage.getItem('users') || "[]");
    if (originalUsers.length === currentUsers.length) {
      infoText.textContent = "Все пользователи уже отображены!";
      return;
    };
    
    localStorage.setItem('users', JSON.stringify(originalUsers));
    renderUsers();
  } catch(error) {
    infoText.textContent = "Ошибка при загрузке данных";
    console.error(error);
  }
});

// 4. Функция инициализации
async function init() {
  usersList.innerHTML = '';
  await userData();
  renderUsers();
}

init()