// TODO LIST
//const taskUnfinished = document.querySelectorAll('.task');
const taskUnfinished = document.getElementById("unfinished");
const taskCompleted = document.getElementById("completed");
const todoCard = document.getElementById("todo_card");
const input= document.getElementById("todo");
const deleteZone= document.getElementById("delete_zone");
const title =  taskUnfinished.children[0]; 
const hr = taskUnfinished.children[1];
const titleC= taskCompleted.children[0];
const hrC =  taskCompleted.children[1]
const localGet = JSON.parse(localStorage.getItem("Tasklist"), [])
let array_list =  {state: "unfinished" , text :''}

//localStorage.clear() //Use this method up here to reset the localStorage Adriano!

deleteZone.addEventListener("dragover", mouseDown())

input.addEventListener("input", function(){
     this.style.height="auto";
     this.style.height =  this.scrollHeight + "px"; 
})
document.addEventListener('keydown', (event)=>{
     if(event.key === "Enter"){ handleTodo() }
     if(event.key === "Delete"){ input.value=""}
})   
function mouseDown(){
     deleteZone.addEventListener("dragleave", ()=>{clearStorage()})
}
function clearStorage(){
     
     localStorage.clear();
     taskUnfinished.replaceChildren();
     taskUnfinished.appendChild(title);
     taskUnfinished.appendChild(hr);
     taskCompleted.replaceChildren();
     taskCompleted.appendChild(titleC);
     taskCompleted.appendChild(hrC);
     
}
function deleteTask(){


}
function handleTodo(){
     
     console.log("KRATOS");
     const todoInput = document.getElementById("todo");
     const todo =  todoInput.value.trim();
     if(!todo) return;
     const list_item= array_list =  {state:"unfinished", text: `${todo}`};
     console.log(array_list)
     console.log(list_item.state)
     
     const savedList = JSON.parse(localStorage.getItem("Tasklist")) || [];
     savedList.push(array_list);
     localStorage.setItem("Tasklist", JSON.stringify(savedList));
     console.log(savedList);
     createDiv(todo, list_item)
}

function localLoad(savedList){

     if(savedList){
          savedList.forEach(items => {
              if (items.state === "unfinished"){
                    createDiv(items.text, items.state)
              }else if (items.state === "completed") {
                    createDiv(items.text, items.state)
             } 
         })
     }
}
function createDiv(text, state){
    
     const newDiv = document.createElement('div');
     newDiv.className = "task";
     newDiv.textContent = text;
     newDiv.draggable= "true";
     completedTask(newDiv,text)
        if(state === "completed"){
          taskCompleted.appendChild(newDiv)
        }else{
         unfinished.appendChild(newDiv); }    
         input.value = "";
     return newDiv;
} 
function completedTask(div, text){
      
       div.addEventListener("click", function () {
         changeState(text)
         taskCompleted.appendChild(div);
         completedAnimation();
         })   
}
function changeState(textTofind){
 
     const array_items = JSON.parse(localStorage.getItem("Tasklist") || [])
     const indexed_item = array_items.findIndex( item => item.text === textTofind)
     if (indexed_item !== -1){
          array_items[indexed_item].state = "completed";
          localStorage.setItem("Tasklist", JSON.stringify(array_items));
     }
}
function completedAnimation(){
     
    const hr = document.getElementById("hr")
    hr.classList.add('border_change_animation ')
    
}
localLoad(localGet)
