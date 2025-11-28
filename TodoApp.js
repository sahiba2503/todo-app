const inputbox = document.querySelector("#AddTask");
const Addclickbutton = document.querySelector("#Addclickbutton");

const searchbox = document.querySelector("#SearchTask");
const searchlistbtn = document.querySelector("#clickSearchList");
const searchlistremovebtn = document.querySelector("#Removebutton");

const TodoList = document.querySelector("#TodoList");
const ProgressList = document.querySelector("#ProgressList");
const CompletedList = document.querySelector("#CompletedList");

const TodoListArr = [];
const ProgressListArr = [];
const CompletedListArr = [];

let addTaskbutton = -1;

Addclickbutton.addEventListener("click",Addclickbuttonfunction);
function Addclickbuttonfunction(){
 const inputboxText = inputbox.value.trim();
 if(inputboxText == ""){
    return;
 } 
 if(addTaskbutton == -1){
     TodoListArr.push(inputboxText);
     inputbox.value = "";
     TodoListcreateListfunction();
   }
 else{
      TodoList.children[addTaskbutton].querySelector(".todolistText").textContent = inputbox.value;
        inputbox.value = "";
        addTaskbutton = -1
     }
};
 function TodoListcreateListfunction(){
 TodoList.innerHTML = "";
 for(let i=0; i<TodoListArr.length; i++ ){
    TodoList.insertAdjacentHTML("beforeend",`<li class="todolist">
        <div class="icon-text">
        <span class="addListinprogress">(O)</span>
        <span class="todolistText">${TodoListArr[i]}</span>
        </div>
        <div class="TodoeditIcon">edit</div>
        <div class="TododeleteIcon"> X </div>
        </li>
        `);
              }
const todoList = document.querySelectorAll(".todolist");
for(let i=0; i<TodoListArr.length; i++ ){
todoList[i].querySelector(".TododeleteIcon").addEventListener("click",TodoDeleteListfunction);
        function TodoDeleteListfunction(){
         TodoListArr.splice(i,1);
         inputbox.value = "";
         TodoListcreateListfunction();
        }
        todoList[i].querySelector(".addListinprogress").addEventListener("click",progressListfunction);
            function progressListfunction(){
                const progtext = TodoListArr[i];
                ProgressListArr.push(progtext);
                progressCreateListfunction();
                TodoListArr.splice(i,1);
                TodoListcreateListfunction();
                        }
                        todoList[i].querySelector(".TodoeditIcon").addEventListener("click",Todoeditlist);
                        function Todoeditlist(){
                            inputbox.value = todoList[i].querySelector(".todolistText").textContent;
                            addTaskbutton = i;
                                                   }
 }
};
function progressCreateListfunction(){
    ProgressList.innerHTML = "";
    for(let i=0; i<ProgressListArr.length; i++ ){
    ProgressList.insertAdjacentHTML("beforeend",`<li class="Proglist">
        <div class="icon-text">
        <span class="addListinprogress">(O)</span>
        <span class="todolistText">${ProgressListArr[i]}</span>
        </div>
        <div class="TododeleteIcon"> X</div>
        </li>
        `);
          }
          const proglist = document.querySelectorAll(".Proglist");
           for(let i=0; i<ProgressListArr.length; i++ ){
              proglist[i].querySelector(".TododeleteIcon").addEventListener("click",ProgressDeleteListfunction);
              function ProgressDeleteListfunction(){
                ProgressListArr.splice(i,1);
                  progressCreateListfunction();
              }
               proglist[i].querySelector(".addListinprogress").addEventListener("click",completedAddListfunction);
              function completedAddListfunction(){
                const copletedText = ProgressListArr[i];
                CompletedListArr.push(copletedText);
                CompletedCreateListfunction();
                ProgressListArr.splice(i,1);
                  progressCreateListfunction();
              }
           }
};
 function CompletedCreateListfunction(){
    CompletedList.innerHTML = "";
    for(let i=0; i<CompletedListArr.length; i++){
        CompletedList.insertAdjacentHTML("beforeend",`<li class="completedlist">
        <div class="icon-text">
        <span class="todolistText">${CompletedListArr[i]}</span>
        </div>
        <div class="completelistdelete"> X</div>
        </li>
        `);
    }
    const completedlist = document.querySelectorAll(".completedlist");
     for(let i=0; i<CompletedListArr.length; i++){
completedlist[i].querySelector(".completelistdelete").addEventListener("click",completedListDeltefun);
     function completedListDeltefun(){
        CompletedListArr.splice(i,1);
        CompletedCreateListfunction();
     }
     }
 };
 searchlistbtn.addEventListener("click",SearchlistItem);
 function SearchlistItem(){
    alert("yes working");
 }
 



