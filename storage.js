class Storage {


    saveTodoToStorage(todo) {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"))
        }

        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    getTodoFromStorage(){
        let todos;
        if(localStorage.getItem("todos")===null){
            todos = []
        }
        else{
            todos = JSON.parse(localStorage.getItem("todos"))
        }

        todos.map((todo) =>{
            ui.add(todo)
        })


    }
}