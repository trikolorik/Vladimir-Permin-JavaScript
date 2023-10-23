

function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
}

function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';

    button.disabled = true;
    input.addEventListener("input", function() {
        button.disabled = !this.value.length;
    });

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
        form,
        input,
        button
    };
}

function createTodoItem(name, done) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    if (done) {
        item.classList.add('list-group-item-success');
    }

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
        item,
        doneButton,
        deleteButton
    };
}

function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    for (let todo of todos) {
        let todoItem = createTodoItem(todo.name, todo.done);

        todoItem.doneButton.addEventListener('click', function() {
            todoItem.item.classList.toggle('list-group-item-success');
            todo.done = !todo.done;
            saveTodos(todos);
        });
        todoItem.deleteButton.addEventListener('click', function() {
            if (confirm('Вы уверены?')) {
                todoItem.item.remove();
                todos.splice(todos.indexOf(todo), 1);
                saveTodos(todos);
            }
        });

        list.append(todoItem.item);
    }

    return list;
}

function createTodoApp(container, title = 'Список дел') {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    todoItemForm.form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!todoItemForm.input.value) {
            return;
        }

        let todoItem = createTodoItem(todoItemForm.input.value, false);
        let todo = {
            name: todoItemForm.input.value,
            done: false
        };

        todoItem.doneButton.addEventListener('click', function() {
            todoItem.item.classList.toggle('list-group-item-success');
            todo.done = !todo.done;
            saveTodos(todos);
        });
        todoItem.deleteButton.addEventListener('click', function() {
            if (confirm('Вы уверены?')) {
                todoItem.item.remove();
                todos.splice(todos.indexOf(todo), 1);
                saveTodos(todos);
            }
        });

        todoList.append(todoItem.item);
        todos.push(todo);
        saveTodos(todos);

        todoItemForm.input.value = '';
    });

    function saveTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}

window.createTodoApp = createTodoApp;