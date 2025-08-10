// document.addEventListener – метод, который подписывает документ на определённое событие.
document.addEventListener('DOMContentLoaded', () => {
    let taskInput = document.getElementById("taskInput");
    let addTaskButton = document.getElementById("addTask");
    let taskList = document.getElementById("taskList");


    addTaskButton.addEventListener("click", function () {
        let taskText = taskInput.value.trim();

        // проверяет, не является ли строка taskText пустой
        // если taskInput не является пустой строкой
        if (taskText !== "") {
            let listItem = document.createElement('li');
            // создаёт span для удаления задач
            listItem.innerHTML = "<span>" + taskText + "</span><span class=\"delete\">X</span>";

            //  удаление задачи
            // выделить селектор
            listItem.querySelector('.delete').addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
            // добавляет задачу
            taskList.appendChild(listItem); 
            // очищяет 
            taskInput.value = ''
        }
    });
    // при нажатии добавить задачу
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});