const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDENCLASSNAME = "hidden";
const USERNAMEKEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDENCLASSNAME);
  localStorage.setItem(USERNAMEKEY, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDENCLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault()
  console.log(event);
  alert("clicked!");
}

link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(USERNAMEKEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDENCLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.innerText = `Hello ${savedUsername}`
  greeting.classList.remove(HIDDENCLASSNAME);
}