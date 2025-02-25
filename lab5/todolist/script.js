const form = document.querySelector("form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

let todos = [];
function addTodo(){
    const todoText = todoInput.value;
    if(todoText.length > 0){
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };

        todos.push(todo);
        todoInput.value = '';

        renderTodo();

        console.log(todo.id);
        console.log(todo.text);
        console.log(todo.completed);
    }

}

function deleteTodo(id){
    // var i = 2;
    // i = i - 1;
    // i == 1;
    todos = todos.filter((todo) =>todo.id !== id);
    renderTodo();
}

function toggleCompleted(id){
    console.log('toggle: '+id);
    todos = todos.map((todo) =>{
        if(todo.id === id){
            todo.completed = !todo.completed;
        }
        return todo;
    });
    renderTodo();
}
function renderTodo(){
    //console.log("renderTodo");

    todoList.innerHTML = '';
    todos.forEach((todo)=>{
        const todoItem = document.createElement("li");
        const todoText = document.createElement("span");
        const deleteButton = document.createElement("button");

        todoText.textContent = todo.text;
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => deleteTodo(todo.id));

        todoItem.addEventListener("click", () => toggleCompleted(todo.id));


        todoItem.appendChild(todoText);
        todoText.appendChild(deleteButton);
        todoList.append(todoItem);
    })

}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    addTodo();
});

renderTodo();