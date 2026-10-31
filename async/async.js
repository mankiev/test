const infoText = document.getElementById('info-text');
const usersList = document.querySelector('.users-list');
const deleteAllUsersBtn = document.querySelector('.delete-all-users');
deleteAllUsersBtn.textContent = 'Удалить всех пользователей';
const getAllUsersBtn = document.querySelector('.get-all-users');
getAllUsersBtn.textContent = 'Получить всех пользователей';
const userTemplate = document.querySelector(".user-template");

function getSavedUsers() {
  return JSON.parse(localStorage.getItem('users') || "[]");
}

async function getUsers() {
  const response = await fetch("./async.json");
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  };
  return response.json();
}

// 1. Загрузка данных и сохранение в localStorage, если их там нет
async function loadUsers() {
  try {
    if (getSavedUsers().length === 0) {
      infoText.textContent = 'Данные загружаются';
      await new Promise(resolve => {setTimeout(resolve, 1000)});
      
      const users = await getUsers()
      localStorage.setItem("users", JSON.stringify(users));
      infoText.textContent = '';
    };
  } catch (error) {
    infoText.textContent = "Ошибка при загрузке данных";
    console.error(error);
  }
}

// 2. Отрисовка пользователей из localStorage
function renderUsers() {
    usersList.innerHTML = '';
    const currentUsers = getSavedUsers();
    if (currentUsers.length === 0) {
      infoText.textContent = "Список пользователей пуст!";
      return;
    } else {
      infoText.textContent = "";
    }
    
    // Создаем кнопку для каждой карточки
    currentUsers.forEach(user => {
      const userElement = userTemplate.content.cloneNode(true);
      const deleteUserBtn = userElement.querySelector(".delete-user");
      // Удаление конкретного пользователя
      deleteUserBtn.addEventListener('click', () => {
        const upgradeUsers = currentUsers.filter(u => u.id !== user.id); // Сравниваем id объекта из слушателя с id объекта из хранилища
        localStorage.setItem('users', JSON.stringify(upgradeUsers));
        renderUsers()
      });
      
      const li = userElement.querySelector(".users-item");
      
      for (const key in user) {
        if (key === "id") continue;
        
        const p = document.createElement("p");
        p.textContent = `${key}: ${user[key]}`
        li.append(p);
      }
      
      usersList.append(li)
    });
}

// 3. Глобальные обработчики событий (вешаются один раз)

deleteAllUsersBtn.addEventListener('click', () => {
  if (getSavedUsers().length === 0) {
    infoText.textContent = 'Пользователи уже удалены!'
    return;
  }
  
  localStorage.setItem("users", JSON.stringify([]));
  renderUsers()
  }
);
   
getAllUsersBtn.addEventListener('click', async () => {
  try {
    const originalUsers = await getUsers();
    
    if (originalUsers.length === getSavedUsers().length) {
      infoText.textContent = "Все пользователи уже отображены!";
      return;
    };
    
    localStorage.setItem('users', JSON.stringify(originalUsers));
    renderUsers();
  } catch (error) {
    infoText.textContent = "Ошибка при загрузке данных";
    console.error(error);
  }
});

// 4. Функция инициализации
async function init() {
  usersList.innerHTML = '';
  await loadUsers();
  renderUsers();
}

init()