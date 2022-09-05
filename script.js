const input = document.querySelector("#input");
let todosUL = document.querySelector("#todos-ul");
const add = document.querySelector("#add");
const todoItem = document.getElementsByClassName("todo-item");
const editItem = document.querySelectorAll(".edit-item");
const deleteItem = document.querySelectorAll(".delete-item");
const saveItem = document.querySelectorAll(".save-item");
let todos = [];

todosUL.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.classList.contains("edit-item")) {
            function editTodo(todos) {
                //edit todo
                const editTodoArray = todos.map(item => {
                    if (item.id === Number(e.target.id)) {
                        return (
                            `
                                <li class="todo-item">
                                    <input value=${item.todoItem} />
                                    <button id=${item.id} class="save-item">Save</button>
                                    <button id=${item.id} class="delete-item">Delete</button>
                                </li>
                            `
                        )
                    } else {
                        return (
                            `
                                <li class="todo-item">${item.todoItem}
                                    <button id=${item.id} class="edit-item">Edit</button>
                                    <button id=${item.id} class="delete-item">Delete</button>
                                </li>
                            `
                        )
                    }
                })
                todosUL.innerHTML = editTodoArray;
            }
            editTodo(todos)
        } else if (e.target.classList.contains("delete-item")) {
            function deleteTodo(todos) {
                //mutate array to reflect deleted item
                for (let i = 0; i < todos.length; i++) {
                    if (todos[i].id === Number(e.target.id)) {
                        todos.splice(todos.indexOf(todos[i]), 1)
                    }
                }
                //filter newly modified array and render it using map
                todos = todos.filter(item => item.id !== e.target.id)
                .map(item => {
                    return (
                        `
                            <li class="todo-item">${item.todoItem}
                                <button id=${item.id} class="edit-item">Edit</button>
                                <button id=${item.id} class="delete-item">Delete</button>
                            </li>
                        `
                    )
                })
                todosUL.innerHTML = todos
            }
            deleteTodo(todos);

        } else if (e.target.classList.contains("save-item")) {
            function saveItem(todos) {
            //save edited todo
                for (let i = 0; i < todos.length; i++) {
                    if (todos[i].id === Number(e.target.id)) {
                        for (let j = 0; j < todoItem.length; j++) {
                            if (todoItem[i].firstElementChild.tagName === "INPUT") {
                                let index = todos.indexOf(todos[i])
                        if (index !== -1) {
                            todos[index].todoItem = todoItem[i].firstElementChild.value
                        }
                            }
                        }
                      
                    }
                }

                todos = todos.map(item => {
                    return (
                            `
                                <li>${item.todoItem}
                                    <button id=${item.id} class="edit-item">Edit</button>
                                    <button id=${item.id} class="delete-item">Delete</button>
                                </li>
                            `
                        )
                    })
                todosUL.innerHTML = todos
            }
            saveItem(todos)
        }
    }
})

    input.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            const individualTodo = {
                id: Math.random(),
                todoItem: e.target.value
            }
           
            function addTodo(todo) {
                todos.push(todo)
                e.target.value = "";
                return todos
            }
            addTodo(individualTodo)

            function renderTodos(todoArray) {
                newTodos = todoArray.map(item => {
                    return (
                        item
                    )
                })
                renderNewTodos = newTodos.map(item => {
                    return (
                        `
                            <li class="todo-item">${item.todoItem}
                                <button id=${item.id} class="edit-item">Edit</button>
                                <button id=${item.id} class="delete-item">Delete</button>
                            </li>
                        `
                    )
                })
                todosUL.innerHTML = renderNewTodos
            }
            renderTodos(todos)

        }
    })
