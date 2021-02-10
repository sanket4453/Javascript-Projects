

//fetch all data 
let todoInput=document.querySelector(".todo-input");
let todoButton=document.querySelector(".todo-button");
let todolist=document.querySelector(".todo-list");



//EventHandling
todoButton.addEventListener('click',addToDo);
todolist.addEventListener('click',deleteCheck);

//function
function addToDo(e){
    //TODO DIV
    let todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    //Create List
    let newToDo=document.createElement("li");
    newToDo.innerHTML=todoInput.value;
    newToDo.classList.add("todo-item");
    todoDiv.appendChild(newToDo);

    //Check button mark
    let checkButton=document.createElement("button");
    checkButton.innerHTML='<i class="fas fa-check"></i>';
    checkButton.classList.add("complete-btn");
    todoDiv.appendChild(checkButton);

    //delete button mark
    let deleteButton=document.createElement("button");
    deleteButton.innerHTML='<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //todoList append child
    todolist.appendChild(todoDiv);

    //clear the box
    todoInput.value="";


    e.preventDefault();
}

function deleteCheck(e){
    console.log(e.target);

    let item=e.target;

    if(item.classList[0]==="delete-btn"){
        let todo=item.parentElement;
        todo.remove();
    }
    if(item.classList[0]==="comlete-btn"){
        let todo=item.parentElement;
        todo.classList.toggle("Completed");
    }

}