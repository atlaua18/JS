(function () {
    //создаем и возвращаем заголовок  приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    // создаем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';
        button.disabled = true;

        input.oninput = function () {
            if (input.value === '') {
                button.disabled = true;
            } else {
                button.disabled = false;
            }
        }

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    }

    // создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name, index, storageKey) {
        //let index = someArray.length;
        
        let item = document.createElement('li');
        // кнопки помещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        // устанавливаем стили для элемента списка, а также для размещения кнопок в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm'); //btn-group-sm - делает группу кнопок немного меньше
        doneButton.classList.add('btn', 'btn-success'); //btn-success - делает кнопку зеленой
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger'); // btn-danger делает кнопку красной
        deleteButton.textContent = 'Удалить';

        doneButton.addEventListener('click', function () {
            item.classList.toggle('list-group-item-success');
            someArray[index].done = !someArray[index].done;
            putStorage(someArray,storageKey);
            console.log(index);
        });
        deleteButton.addEventListener('click', function () {
            if (confirm('Вы уверены?')) {
                item.remove();
                someArray.splice(index, 1);
                putStorage(someArray,storageKey);
            }
        });

        // вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton,
            index,
        }
    }

    let someArray = [];

    function createTodoApp(container, title = 'Список дел', storageKey) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        someArray = pullStorage(storageKey);

        for (let i = 0; i < someArray.length; i++) {
            let todoDone = createTodoItem(someArray[i].todoName, i, storageKey);

            if (someArray[i].done === true) {
                todoDone.item.classList.add('list-group-item-success');
            }

            todoList.append(todoDone.item);
        }

        // браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function (e) {
            //эта строчка необходима, чтобы предотвратить стандартное действие браузера
            // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault();

            // игнорируем создание элемента, если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value) {
                return;
            }

            // создаем и добавляем в список новое дело с названием из поля для ввода
            // todoList.append(createTodoItem(todoItemForm.input.value).item);

            let todoItem = createTodoItem(todoItemForm.input.value, someArray.length); //someArray.length

            // создаем и добавляем в список новое дело с названием из поля для ввода
            todoList.append(todoItem.item);

            let someObj = { todoName: todoItemForm.input.value, done: false };
            someArray.push(someObj);

            putStorage(someArray, storageKey);

            // обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true;
        });
    }

    function putStorage(arrayOfObj, storageKey) {
        localStorage.setItem(storageKey, JSON.stringify(arrayOfObj));
    }

    function pullStorage(storageKey) {
        return JSON.parse(localStorage.getItem(storageKey));
    }

    window.TodoApp = createTodoApp;
    
})();

//#region Comments

// добавляем обработчики на кнопки
            // todoItem.doneButton.addEventListener('click', function () {
            //     todoItem.item.classList.toggle('list-group-item-success');
            // });
            // todoItem.deleteButton.addEventListener('click', function () {
            //     if (confirm('Вы уверены?')) {
            //         todoItem.item.remove();
            //     }
            // });

// аналог кода в html
        // <form class="input-group mb-3">
        //     <input class="form-control" placeholder="Введите название нового дела">
        //     <div class="input-group-append">
        //         <button class="btn btn-primary">Добавить дело</button>
        //     </div>
        // </form>

    // todoThings = [
    //     { name: 'Купить тортик', done: false },
    //     { name: 'Сходить в аптеку', done: true },
    //     { name: 'Проверка', done: false }
    // ]

            // putStorage(Object.assign({}, {todoName: todoItemForm.input.value, done: false}));
            // putStorage({ ...{}, todoName: todoItemForm.input.value, done: false });

// document.addEventListener('DOMContentLoaded',function () {
//     window.TodoApp(document.getElementById('todo-app'), 'Мои дела');
// });

// window.TodoApp(document.getElementById('todo-app'), 'Мои дела');

// createTodoApp(document.getElementById('todo-app'), 'Мои дела');

// let inputTitle = prompt('Это приложение для списка ваших дел. Введите название');

// window.TodoApp(document.getElementById('todo-app'), inputTitle);

// createTodoApp(document.getElementById('todo-app'), 'Мои дела');

    // document.addEventListener('DOMContentLoaded', function () {
    //     createTodoApp(document.getElementById('my-todos'), 'Мои дела');
    //     createTodoApp(document.getElementById('mom-todos'), 'Дела для мамы');
    //     createTodoApp(document.getElementById('dad-todos'), 'Дела для папы');
    // });

    

    // let someObj = { todoName: 'fdghgf', done: false };

    // someArray.push(someObj);

    // console.log(someArray);
    // let someObj = { todoName: todoItemForm.input.value, done: false };

    //#endregion 