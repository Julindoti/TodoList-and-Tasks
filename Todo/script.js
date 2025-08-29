// TODO LIST
localStorage.clear()
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
     console.log("Atreus")
     
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

function handleTodo(){
     
     console.log("KRATOS");
     const todoInput = document.getElementById("todo");
     const todo =  todoInput.value.trim();

     const list_item= array_list =  {state:"unfinished", text: `${todo}`};
     console.log(array_list)
     console.log(list_item.state)
     
     const savedList = JSON.parse(localStorage.getItem("Tasklist")) || [];
     savedList.push(array_list);
     localStorage.setItem("Tasklist", JSON.stringify(savedList));
     console.log(savedList);
  

     createDiv(todo, list_item)
  

  // setTimeout(()=>{

       //     localLoad(savedList, taskCompleted)

     // },2000)
 

}

function localLoad(savedList){
     
     if(savedList){
          savedList.forEach(items => {
               if (items.state === "unfinished"){
                    
                    console.log("não salvo")

            }else if (items.state === "completed") {

               console.log("salvo")
            }
         
              console.log(items)
              createDiv(items.text)

         })

     }

}
function createDiv(text, state){
    
      
     const newDiv = document.createElement('div');
     newDiv.className = "task";
     newDiv.textContent = text;
     newDiv.draggable= "true";
     completedTask(newDiv,text, state)
     
         unfinished.appendChild(newDiv);     
         input.value = "";
        

} 
function completedTask(div, text ,state){


       div.addEventListener("click", function () {
         changeState(text, "completed")
         localStorage.setItem("Tasklist", JSON.stringify(state))
         taskCompleted.appendChild(div);
         console.log(array_list)
         completedAnimation();
         }) 
     
}
function changeState(textTofind){

let localgetitem = localGet;

const items = localgetitem.findIndex( item => item.text === textTofind)

if (items !== 1){
     localgetitem[items].state = newState;
     localStorage.setItem("Tasklist", JSON.stringify(localgetitem))

}
}
function completedAnimation(){
     
    const hr = document.getElementById("hr")
    hr.classList.add('border_change_animation ')
    
}
localLoad(localGet)
