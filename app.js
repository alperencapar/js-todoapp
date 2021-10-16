//! input selection
const todoInput = document.querySelector("#todoInput");

//! input button selection
const searchButton = document.querySelector("#todoSearchButton");
//! selected todos container for todo element adding for later
const todoParent = document.querySelector(".todos")

const ui = new UI();
searchButton.addEventListener("click", addTodo);
todoParent.addEventListener("click", todoEvent)


function addTodo(e){
    e.preventDefault()
    inputValue = todoInput.value
    ui.add(inputValue)
    //! cleaning input, after adding todo to todos list 
    clearInput();
}

function todoEvent(e){
    const todoDiv = e.target.parentElement.parentElement;

    if(e.target.classList.contains("fa-times")){
        todoDiv.classList.add("remove-animation")
        todoDiv.addEventListener("transitionend", function(){
            ui.removeElement(todoDiv)
        })
    }

    if(e.target.classList.contains("fa-check")){
        ui.completeElement(todoDiv)
    }
    
}

function clearInput(){
    todoInput = ""
}