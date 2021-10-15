//! input selection
const todoInput = document.querySelector("#todoInput");

//! input button selection
const searchButton = document.querySelector("#todoSearchButton");
//! selected todos container for todo element adding for later
const todoParent = document.querySelector(".todos")

searchButton.addEventListener("click", addTodo);


function addTodo(e){
    e.preventDefault()
    console.log("Eklendi");
}