let todoItems = [];

const showTodoItems = () => {
    const todoItemsListHtml = document.getElementById('todo-list-items');
    todoItemsListHtml.innerHTML = '';

    for (let item of todoItems) {
        const todoItemHtml = `
            <div class="todo-item ${item.isDone ? 'done' : ''}" data-todo-id="${item.id}">
                <p>${item.name}</p>
                <button class="context-menu-btn">...</button>
                <div class="context-menu" style="display: none;">
                    <button class="edit-option">Edit</button>
                    <button class="isDone-option">Is Done</button>
                    <button class="delete-option">Delete</button>
                </div>
            </div>
        `;
        todoItemsListHtml.insertAdjacentHTML('beforeend', todoItemHtml);          //beforebegin: Вставляет HTML непосредственно перед указанным элементом.
    }

    const contextMenuButtons = document.querySelectorAll('.context-menu-btn');

    for (let btn of contextMenuButtons) {
        btn.addEventListener('click', showContextMenu);
    }
}

const showContextMenu = (event) => {
    const contextMenu = event.target.nextElementSibling;
    contextMenu.style.display = 'block';
    contextMenu.style.left = event.clientX + 'px';
    contextMenu.style.top = event.clientY + 'px';

    const editOption = contextMenu.querySelector('.edit-option');
    const isDoneOption = contextMenu.querySelector('.isDone-option');
    const deleteOption = contextMenu.querySelector('.delete-option');

    const todoId = event.target.parentElement.dataset.todoId;

    editOption.addEventListener('click', () => {
        editTodoItem(todoId);
        hideContextMenu(contextMenu);
    });

    isDoneOption.addEventListener('click', () => {
        isDoneTodoItem(todoId);
        hideContextMenu(contextMenu);
    });

    deleteOption.addEventListener('click', () => {
        deleteTodoItem(todoId);
        hideContextMenu(contextMenu);
    });

    document.addEventListener('click', (e) => {
        if (!contextMenu.contains(e.target) && e.target !== event.target) {
            hideContextMenu(contextMenu);
        }
    });
}

const hideContextMenu = (contextMenu) => {
    contextMenu.style.display = 'none';
}

const deleteTodoItem = (id) => {
    todoItems = todoItems.filter(item => item.id.toString() !== id);
    showTodoItems();
}

const editTodoItem = (id) => {
    const newName = prompt('Enter neu name of ToDo-tak:');
    if (newName !== null) {
        const index = todoItems.findIndex(item => item.id.toString() === id);
        if (index !== -1) {
            todoItems[index].name = newName;
            showTodoItems();
        }
    }
}

const isDoneTodoItem = (id) => {
    const todoItem = todoItems.find(item => item.id.toString() === id);
    if (todoItem) {
        todoItem.isDone = !todoItem.isDone;
        showTodoItems();
    }
}

const addTodo = (todoName = '') => {
    const newTodo = { id: Math.random(), name: todoName, isDone: false };
    todoItems.push(newTodo);
    showTodoItems();
}

const addTodoBtn = document.getElementById('add-todo-btn');
const addTodoInput = document.getElementById('add-todo-input');
addTodoBtn.addEventListener('click', () => {
    const newTodoName = addTodoInput.value.trim();
    if (newTodoName !== "") {
        addTodo(newTodoName);
        addTodoInput.value = "";
    } else {
        alert("Enter neu ToDo-task!");
    }
});

showTodoItems();