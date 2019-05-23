const addUsersBtn = document.getElementById("add-users");
const usersList = new UsersModule('#users-list');

addUsersBtn.addEventListener("click", () => {
    usersList.getUsers();
});


