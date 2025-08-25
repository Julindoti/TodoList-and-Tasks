// TODO LIST

const unfinished = document.getElementById("unfinished")
//const taskUnfinished = document.querySelectorAll('.task');
const taksCompleted = document.getElementById("completed")


function handleTodo(){  
  console.log("KRATOS")

  const todoInput = document.getElementById("todo")
  const todo = todoInput.value.trim()
  if(!todo) return;
  
  const savedList = JSON.parse(localStorage.getItem("Tasklist")) || [];
  savedList.push(todo);
  localStorage.setItem("Tasklist", JSON.stringify(savedList));
  
  const newDiv = document.createElement('div');
  newDiv.className = "task"
  newDiv.textContent = todo
  
  newDiv.addEventListener("click", function () {
      taksCompleted.appendChild(newDiv);
      }) 
      
      unfinished.appendChild(newDiv)
      
      todoInput.value = "";
  

}