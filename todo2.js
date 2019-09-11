var todos = ["cook", "clean room"];

var input = prompt("What would you like to do?");

//Use while loop to repeat the question
while (input !== "quit") {
    //handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    // ask again for new input
    input = prompt("What would you like to do?");

}
console.log("YOU QUIT THE APP");

function listTodos() {
    console.log("*************");
    todos.forEach(function (todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("*************");

}
function addTodo() {
    //ask for new to do
    var newTodo = prompt("Enter new todo");
    //add to todosa array
    todos.push(newTodo);
    console.log("Added Todo");
}
function deleteTodo() {
    //ask for index of todo to deleted
    var index = prompt("Enter index of to do to delete");
    //delete that todo
    //splice() deletes items from the array 
    todos.splice(index, 1);
    console.log("Deleted todo");
}

