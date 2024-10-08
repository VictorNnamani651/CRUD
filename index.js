// the variable below selects the input space on the webpage==========================
let keyInput = document.getElementById("key");
let valueInput = document.getElementById("value");
// ====================================================

// the two variables below are holding the memory location of the two buttons on the page=============================
let button_LocalStorage = document.querySelector(".save");
let add_to_userDB_btn = document.querySelector(".add");
// ============================================================

// function to create an li element==========================
function create_li() {
  let li = document.createElement("li");
  document.querySelector("ul").appendChild(li);
}

// the code below is an event listener attached to the "add to object" button on the html page.
// this event listener has a function which checks if there is any value within the input box on the html page and if yes , it adds that value/info as an object into the userDB array.
// the function within the event listener also calls two other functions in order of their operation, the  create_li() function and the dd_user() function
add_to_userDB_btn.addEventListener("click", () => {
  create_li();
  add_user_to_userDB(valueInput.value);
  add_user_to_display();
  console.log(userDB);
});
