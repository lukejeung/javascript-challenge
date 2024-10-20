const todoform = document.getElementById("todo-form");
const todoinput = document.querySelector("#todo-form input")
const todolist = document.getElementById("todo-list");

const todos = [];

function savetodos() {
  localStorage.setItem("todos", todos);
}

function deletetodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function painttodo(newtodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newtodo;
  const button = document.createElement("button");
  button.innerText = "Delete";
  button.addEventListener("click", deletetodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newtodo;
  todolist.appendChild(li);
}

function handletodosubmit(event) {
  event.preventDefault();
  const newtodo = todoinput.value;
  todoinput.value = "";
  todos.push(newtodo);
  painttodo(newtodo);
  savetodos();
}

todoform.addEventListener("submit", handletodosubmit)