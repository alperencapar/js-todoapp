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

    deleteTodoFromStorage(todo){
        let todos;
        //is there any item in local storage, if it is:
        if(localStorage.getItem("todos")!==null){
            //bring me all todo items and store it in todos variable
            todos = JSON.parse(localStorage.getItem("todos"))
            //loop in todos variable
            for(let i=0; i<todos.length; i++){
                //if localstorage todos is equal to todo that we want to delete:
                if(todos[i] == todo){
                    //delete todo from todos variable
                    todos.splice(i,1);
                }
            }
            // now deleted todo not in todos variable, we can update back local storage
            localStorage.setItem("todos",JSON.stringify(todos));
        }
        else{
            console.log("not found");
        }
        //reason of using for loop instead of forEach is efficiency
        
    }
}