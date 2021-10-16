class UI{
    
    add(todo){
        todo = `<div class="todo">${todo}<div class="btn-container"><i class="fas fa-check"></i><i class="fas fa-times"></i></div></div>`
        todoParent.innerHTML += todo
    }

    removeElement(element){
        element.remove()
    }

    completeElement(element){
        element.classList.toggle("completed")
    }
}