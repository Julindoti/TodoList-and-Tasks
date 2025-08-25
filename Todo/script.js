// TODO LIST

//const taskUnfinished = document.querySelectorAll('.task');
const unfinished = document.getElementById("unfinished");
const taskCompleted = document.getElementById("completed");

//localStorage.clear() => Use this method up here to reset the localStorage Adriano!

function handleTodo(){

  console.log("KRATOS");
  const todoInput = document.getElementById("todo");
  const todo = todoInput.value.trim();

  if(!todo) return;
  
  const savedList = JSON.parse(localStorage.getItem("Tasklist")) || [];
  savedList.push(todo);
  localStorage.setItem("Tasklist", JSON.stringify(savedList));
  console.log(savedList);
  
  const newDiv = document.createElement('div');
  newDiv.className = "task";
  newDiv.textContent = todo;
  newDiv.addEventListener("click", function () {
      taskCompleted.appendChild(newDiv);
      }) 
  
      unfinished.appendChild(newDiv);     
      todoInput.value = "";
}