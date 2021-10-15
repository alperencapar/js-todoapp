const todoInput = document.querySelector("#todoInput");
const searchButton = document.querySelector("#todoSearchButton");

const todoParent = document.querySelector(".todos")

searchButton.addEventListener("click", addTodo);


function addTodo(e){
    e.preventDefault()
    console.log("Eklendi");
}