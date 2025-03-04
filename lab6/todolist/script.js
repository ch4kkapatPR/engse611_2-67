const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

const MAX_TODO_LENGTH = 50; // Set character limit
let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };

    if (todoText.length > MAX_TODO_LENGTH) {
      alert(`Task is too long! Maximum ${MAX_TODO_LENGTH} characters allowed.`);
      return;
    }
    
    todos.push(todo);
    todoInput.value = "";
    renderTodos();
  }
}

function deleteTodo(id) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }
}

function toggleCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const todoDeleteButton = document.createElement("button");
    const checkbox = document.createElement("input");

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleCompleted(todo.id));

    todoText.textContent = todo.text;
    todoDeleteButton.textContent = "Delete";
    todoDeleteButton.addEventListener("click", () => deleteTodo(todo.id));

    if (todo.completed) {
      todoText.style.textDecoration = "line-through";
    }

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoDeleteButton);
    todoList.appendChild(todoItem);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

renderTodos();
