/* eslint-disable no-undef */
import '../styles/index.scss';
import '../styles/style.css';

window.onload = function () {
    const taskField = document.querySelector('#taskField');
    const addTaskButton = document.querySelector('#addTaskBtn');
    const allTasks = document.querySelector('#allTasks');

    taskField.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            // console.log('Enter Pressed');
            createNewTask(allTasks, event.target.value);
            this.value = '';
        }
    });
};

function createNewTask(parent, task) {
    // console.log(task);
    // to create only for div element we do not have t pass any thing
    // and do not have to write document.createElement simply
    let column = create({'class': ' col-sm-3'});
    let singleTask = create({'class': 'single-task d-flex'});
    let singleTaskP = create('p');

    singleTaskP.innerHTML = task;
    singleTask.appendChild(singleTaskP);

    let span = create('span', {'class': 'ml-auto'});
    span.innerHTML = '<i class="fas fa-times-circle"></i>';
    span.addEventListener('click', function () {
        parent.removeChild(column);
    });

    let taskController = createTaskController(singleTask);
    taskController.style.visibility = 'hidden';
    singleTask.appendChild(taskController);

    singleTask.onmouseenter = function () {
        taskController.style.visibility = 'visible';
    };

    singleTask.onmouseleave = function () {
        taskController.style.visibility = 'hidden';
    };

    singleTask.appendChild(span);
    column.appendChild(singleTask);
    parent.appendChild(column);
}

function createTaskController(parent) {
    let controlPanel = create({'class': 'task-control-panel d-flex align-item-center'});
    let colorPalate = createColorPalate(parent);
    controlPanel.appendChild(colorPalate);

    let editButton = createEditButton(parent);
    controlPanel.appendChild(editButton);

    return controlPanel;
}

function createEditButton(parent) {
    let span = create('span', {'class': 'ml-auto mr-2'});
    span.innerHTML = '<i class="fas fa-edit"></i>';
    span.style.color = '#fff';

    span.addEventListener('click', function () {
        let p = parent.querySelector('p');
        let textArea = create('textarea', {'class': 'inner-textarea'});
        textArea.style.width = parent.offsetWidth + 'px';
        textArea.style.height = parent.offsetHeight + 'px';
        textArea.innerHTML = p.innerHTML;
        textArea.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
              //protect conflicting among events
              event.stopPropagation();
               if(this.value){
                 p.innerHTML = this.value;
                 parent.removeChild(this);
               }else {
                 alert('Please Put Some Data');
               }
            }
        });
        parent.appendChild(textArea);
    });
    return span;
}

function createColorPalate(parent) {
    const colors = ['blue', 'red', 'yellow', 'orange', 'gray', 'pink'];
    let colorDiv = create({'class': 'd-flex'});

    colors.forEach(color => {
        let div = create({'class': 'color-circle mt-2'});
        div.style.background = color;
        div.addEventListener('click', function () {
            parent.style.background = color;
        });
        colorDiv.appendChild(div);
    });
    return colorDiv;
}

// for create new div
window.create = function () {

    if (arguments.length === 0) {
        return document.createElement('div');
    }
    if (arguments.length === 1 && typeof arguments[0] != 'object') {
        return document.createElement(arguments[0]);
    }

    let tag = arguments[0];
    let attr = arguments[1] || arguments[0];

    if (arguments.length === 1 && typeof arguments[0] === 'object') {
        tag = 'div';
    }

    let element = document.createElement(tag);

    for (let i in attr) {
        element.setAttribute(i, attr[i]);
    }
    return element;
};