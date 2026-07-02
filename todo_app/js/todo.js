/* this function gets the task from input*/
function get_todos() {
    /*This creates an array of tasks that are inputed*/
    var todos = new Array;
    /*This pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*if the input is not null then JSON.parse will communicate with 
    the web browser to make the task a JavaScript object*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/*This function adds the inputed task to the get_todos function array*/
function add() {
    /*This takes the inputed task and creates a variable of it and prevent empty tasks from being added*/
    var task = document.getElementById('task').value.trim();
    if (task === "") {
        return false;
    }

    var todos = get_todos();
    /*This adds the new task the end of the array*/
    todos.push(task);
    /*This converts the tasks input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/*this function keeps the tasks permanently on the screen*/
function show() {
    /*This sets the task that was retrieve as a variable*/
    var todos = get_todos();

    /*This sets up each task as an unordered list*/
    var html = '<ul>';

    /*This displays a task to the list in the order that it is inputed*/
    for (var i = 0; i < todos.length; i++) {
        /*this also displays the task as a list and creates the button with the "x"*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    html += '</ul>';
    /*This displays the task as a list*/
    document.getElementById('todos').innerHTML = html;

    // Add click event to each remove button
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

/*This displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('addTask').addEventListener('click', add);
/*This will keep the inputs displayed permanently on the screen*/
show();

function remove() {
    // Get the ID of the button that was clicked
    var id = this.getAttribute('id');

    // Get the current list of todos
    var todos = get_todos();

    // Remove the selected item
    todos.splice(id, 1);

    // Save the updated list
    localStorage.setItem('todo', JSON.stringify(todos));

    // Refresh the displayed list
    show();

    return false;
}