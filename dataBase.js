let userDB = JSON.parse(localStorage.getItem("users"));

if (userDB === null) {
  users = [];
} else {
  users = userDB;
}

// function to set local storage
function set_local_storage() {
  localStorage.setItem("users", JSON.stringify(users));
}

// the function below checks if there is anything typed into the text box and if there is, it creates an object with a property, "userName" and sets the value of that property as the text inputed into the text box before finally adding the object to the userDB array.
function add_user_to_userDB(user_details) {
  valueInput.value.length > 0 ? users.push({ userName: user_details }) : null;

  set_local_storage();
}

let ul = document.querySelector("ul");

// function to create an li element==========================
function new_li() {
  let li = document.createElement("li");
  document.querySelector("ul").appendChild(li);
}

// function to loop through all the user details within the userDB array and fill in the created li element with the content from the userDB
function showUsers() {
  userDB.forEach((user) => {
    new_li();
    ul.lastChild.innerHTML = `${user.userName}`;
  });
}

// This function selects the ul in the html page and adds the details of the last added user {from the userDB array} to the last li element in the selected ul=========================
function add_user_to_display() {
  ul.lastChild.innerHTML = `${userDB[userDB.length - 1].userName}`;
}
// localStorage.clear();

showUsers();
