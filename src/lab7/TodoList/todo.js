//on page load 
function handlePageLoad (){
    if(!localStorage.length){
        console.log("empty")
    }else {
        Object.keys(localStorage).forEach(function(key){
        console.log(localStorage.getItem(key));
         createTask(localStorage.getItem(key))
        });
    }
}
//select elemnts for add button event functionality
let addBtn = document.getElementById("add-task");
let list = document.getElementById("list");
    list.classList.add("list")

//Add task event
addBtn.addEventListener("click", handleClick)
function handleClick () {
  let  taskName = document.getElementById("task-name").value
  localStorage.setItem(`${taskName}`, taskName);
  console.log(localStorage);
  createTask(taskName);
}

//utility function for creating tasks
function createTask (name) {
    let taskName = name;
    let task = document.createElement("div");
    let content = document.createElement("div")
        task.classList.add("task")
        content.innerHTML = `${taskName}`
    let del = document.createElement("button");
        del.innerHTML="X"
        del.style.backgroundColor = "#d32f2f"
        del.onclick = function (){
            let deleted = this.parentElement.childNodes[0].innerHTML
            localStorage.removeItem(`${deleted}`)
            this.parentElement.style.display ="none"
        }
    let complete = document.createElement("button");
        complete.innerHTML = "Complete"

        complete.style.backgroundColor = "#4BB543"
        complete.onclick = function (){
            localStorage.setItem(`Complete - ${name}` , `Complete - ${name}`)
            localStorage.removeItem(`${name}`)
            this.parentElement.style.backgroundColor = "rgba(157, 255, 166, 0.5)"
            this.parentElement.childNodes[0].style.textDecoration = "line-through"
        }
 task.appendChild(content);
 task.appendChild(complete);  
 task.appendChild(del);
 list.appendChild(task);     


 if(complete.parentElement.childNodes[0].innerHTML.includes("Complete")) {
            complete.parentElement.style.backgroundColor = "rgba(157, 255, 166, 0.5)"
        }
}