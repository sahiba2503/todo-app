 let index = 0;
var allTaskListContainer = 20;
var slids = document.querySelector("#taskContainer");
document.querySelector("#sliderRightBtn").addEventListener("click",()=>{
    alert("yes clicking right btn");
  index++;
   if(index > 1){
    index = 0;
  }
  updateSlider();

});
document.querySelector("#sliderLeftBtn").addEventListener("click",()=>{
    alert("yes clicking left btn");
  index--;
  if(index < 0){
   index = 1;
  }
   updateSlider();
  });
  function  updateSlider(){
    slids.style.transform = `translateX(-${index * allTaskListContainer}%)`;
  };
  //create and mannage the task.
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const dueDate = document.querySelector("#dueDate");

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const clearBtn = document.querySelector("#clearBtn");

const todoList = document.querySelector("#todoList");
const progressList = document.querySelector("#progressList");
const completedList = document.querySelector("#completedList");
const delayList =  document.querySelector("#delayList");
const signList =  document.querySelector("#signList");

const todoListData = []; 
const progressListData = [];
const completedListData = [];
const delayListData = [];
const signListData = [];
let updateTodoTaskIndex = -1; 





addBtn.addEventListener("click", handleAddEditTask);
function handleAddEditTask() {
  alert("btn is clicking");
  var inputboxText = taskInput.value.trim();
  var createDate = new Date();
  var dueDatevalue = dueDate.value;
  var updatedate = "not updated";
  if (inputboxText == "")
     {    return;   }

  if (updateTodoTaskIndex == -1)
     {
    todoListData.push({title:inputboxText,createDate:createDate,update:updatedate,dueDate:dueDatevalue});
    taskInput.value = " ";
    dueDate.value = " ";
      createDate = " ";    
    // updatedate = " ";
     searchInput.value = "";
    createTodoList();
    handleSearchListItem();
      
      }
       else {
    todoList.children[updateTodoTaskIndex].querySelector(".todoTask" ).textContent = taskInput.value;
    todoListData[updateTodoTaskIndex].title = taskInput.value;
    //  todoListData[updateTodoTaskIndex].update = "updated";
    taskInput.value = "";
     handleSearchListItem();
    updateTodoTaskIndex = -1;      
  }
};
function createTodoList() {
  todoList.innerHTML = "";
  for (let i = 0; i < todoListData.length; i++)
     {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todoListItem">
        <div class="todoListDetail">
        <div class="todoTask">${todoListData[i].title}</div>
        <div class="todoCreateDate">Created: ${todoListData[i].createDate}</div>
         <div class="todoCreateDate"> ${todoListData[i].update}</div>
        <div class="todoDueDate">Due: ${todoListData[i].dueDate}</div>
        </div>
        <div class="todoiconContainer">
        <div class="todoEditButton"><i class="fa-solid fa-pencil"></i></div>
        <div class="todoMoveButton"><i class="fa-solid fa-arrow-right-long"></i></div>
        <div class="todoDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
  const todoListItem = document.querySelectorAll(".todoListItem");

  for (let i = 0; i < todoListData.length; i++)
     {
      todoListItem[i].querySelector(".todoEditButton").addEventListener("click", todoEditList);
    function todoEditList()
     {
      taskInput.value = todoListItem[i].querySelector(".todoTask").textContent;
      updateTodoTaskIndex = i;    
    }
    
    todoListItem[i].querySelector(".todoMoveButton").addEventListener("click", todoMoveList);
    function todoMoveList()
     {
      var progressListTitle = todoListData[i].title;
      var progressListCreate = todoListData[i].CreateDate;
      var progressListDue = todoListData[i].dueDate;

       progressListData.push({title:progressListTitle,createDate:progressListCreate,dueDate:progressListDue});
        todoListData.splice(i, 1);
        createTodoList();
       createProgressList();
        
    }
    todoListItem[i].querySelector(".todoDeleteButton").addEventListener("click", todoDeleteList);    
    function todoDeleteList() 
    {
      todoListData.splice(i, 1);
      taskInput.value = "";
       createTodoList();  
        }

    
  }
};
function createProgressList() {
  progressList.innerHTML = "";
  for (let i = 0; i < progressListData.length; i++) {
       progressList.insertAdjacentHTML(
      "beforeend",
      `<li class="progressListItem">
        <div class="progressListDetail">
        <div class="progressTask">${progressListData[i].title}</div>
        <div class="progressCreateDate">Created: ${progressListData[i].createDate}</div>
        <div class="progressDueDate">Due: ${progressListData[i].dueDate}</div>
        </div>
        <div class="progressIconContainer">
        <div class="progressMoveButton"><i class="fa-solid fa-arrow-right-long"></i></div>
        <div class="progressDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );

  }
  const progressListItem = document.querySelectorAll(".progressListItem");
  for (let i = 0; i < progressListData.length; i++) 
    {
    progressListItem[i].querySelector(".progressDeleteButton").addEventListener("click", ProgressDeleteList);
    function ProgressDeleteList()
     {
      progressListData.splice(i, 1);
       createProgressList();
    }
 
     progressListItem[i].querySelector(".progressMoveButton").addEventListener("click", progressMoveLists);
     function progressMoveLists(){
      alert("yes clicking");
      var completedListTitle = progressListData[i].title;
      var completedListCreate = progressListData[i].createDate;
      // var completedListDate = new Date();
      
      completedListData.push({title:completedListTitle,createDate:completedListCreate});
       progressListData.splice(i, 1);     
      createProgressList();
      createCompletedList();
     }
   
  }

};


function createCompletedList() {
   completedList.innerHTML = "";
  for (let i = 0; i < completedListData.length; i++) {
      completedList.insertAdjacentHTML(
      "beforeend",
      `<li class="completedListItem">
        <div class="completedListDetail">
        <div class="completedTask">${completedListData[i].title}</div>
        <div class="completedCreateDate">Created: ${completedListData[i].createDate}</div>
        <div class="completedDueDate">Due: ${completedListData[i].comletedDate}</div>
        </div>
        <div class="progressIconContainer">
        <div class="completedMoveButton"><i class="fa-solid fa-arrow-right-long"></i></div>
        <div class=completedDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
  const completedlistItem = document.querySelectorAll(".completedlistItem");
  for (let i = 0; i < completedListData.length; i++)
     {
    completedlistItem[i].querySelector(".completedDeleteButton").addEventListener("click", completedDeleteList);
      function completedDeleteList() 
      {
      completedListData.splice(i, 1);
        createCompletedList();
    }
    completedlistItem[i].querySelector(".completedMoveButton").addEventListener("click", completedAddList);
    function completedAddList(){ 

     var signListTitle = completedListData[i].title;
      var signListExpiry = "expiry";
      var signCompleted = "completed";

       progressListData.push({title:signListTitle,expiry:signListExpiry,completed:signCompleted});
        completedListData.splice(i, 1);
        createCompletedList();
       createSignList();
             
       }
      }
  };

  function createSignList(){
      signList.innerHTML = "";
  for (let i = 0; i < signListData.length; i++) {
        signList.insertAdjacentHTML(
      "beforeend",
      `<li class="completedListItem">
        <div class="completedListDetail">
        <div class="completedTask">${completedListData[i].title}</div>
        <div class="completedCreateDate">Created: ${completedListData[i].expiry}</div>
        <div class="completedDueDate">Due: ${completedListData[i].completed}</div>
        </div>
        <div class="progressIconContainer">
         <div class=completedDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
   const totalSignlist = document.querySelectorAll(".signListItem");
  for (let i = 0; i < signListData.length; i++)    
     {
 totalSignlist[i].querySelector(".signDeleteButton").addEventListener("click",signDeletList);
 function signDeletList(){
signListData.splice(i,1);
createSignList();
 }
     }

};


  function createDelayList(){
    
delayList.innerHTML = "";
  for (let i = 0; i < delayListData.length; i++) {
    delayList.insertAdjacentHTML(
      "beforeend",
      `<li class="delayListItem">
        <div class="iconTextOfDelayList">
        <span class="delayAddButton"><i class="fa-solid fa-right-from-bracket"></i></span>
        <span class="listText">${delayListData[i]}</span>
        </div>        
        <div class="delayDeleteButton"> <i class="fa-solid fa-xmark"></i></div>        
        </li>
        `
    );
  }
  
   const delayListItem = document.querySelectorAll(".delayListItem");
  for (let i = 0; i <delayListData.length; i++) {
    
    delayListItem[i].querySelector(".delayDeleteButton").addEventListener("click",delayDeleteList);
    function delayDeleteList()   {
      delayListData.splice(i, 1);
       createDelayList();
          }

    delayListItem[i].querySelector(".delayAddButton").addEventListener("click", delayAddList);
       function delayAddList() 
       {
      const newTextFortodo = delayListData[i];         
      todoListData.push(newTextFortodo);
           
       delayListData.splice(i, 1);
       createDelayList();    
     createTodoList();
    }
  }
 
};

searchBtn.addEventListener("click", handleSearchListItem);
function handleSearchListItem() 
{
  let searchTaskvalue = searchInput.value.toLowerCase().trim();
  addListInTodoAfterFilterListText = searchTaskvalue;

  let todoItems = todoList.getElementsByTagName("li");
  let progressItems = progressList.getElementsByTagName("li");
  let completedItems = completedList.getElementsByTagName("li");
  let delayItems = delayList.getElementsByTagName("li");
  let signItems = signList.getElementsByTagName("li");

  for (let i = 0; i < todoItems.length; i++) {
    let text = todoItems[i].querySelector(".listText").textContent.toLowerCase();
    let ismatch = text.includes(searchTaskvalue);
    if (ismatch == true) {
      todoItems[i].style.display = "flex";
    } else {
      todoItems[i].style.display = "none";
    }
  }
  for (let i = 0; i < progressItems.length; i++) {
    let progtext = progressItems[i].querySelector(".listText").textContent.toLowerCase();
    let progressismatch = progtext.includes(searchTaskvalue);
    if (progressismatch == true) {
      progressItems[i].style.display = "flex";
    } else {
      progressItems[i].style.display = "none";
    }
  }
  for (let i = 0; i < completedItems.length; i++) {
    let Comtext = completedItems[i].querySelector(".listText").textContent.toLowerCase();
    let Complistismatch = Comtext.includes(searchTaskvalue);
    if (Complistismatch == true) {
      completedItems[i].style.display = "flex";
    } 
    else{
      completedItems[i].style.display = "none";
    }
  }
    for (let i = 0; i < delayItems.length; i++) {
    let delayText = delayItems[i].querySelector(".listText").textContent.toLowerCase();
    let delayListismatch = delayText.includes(searchTaskvalue);
    if (delayListismatch == true) {
      delayItems[i].style.display = "flex";
    } 
    else {
      delayItems[i].style.display = "none";
    }
  }
    for (let i = 0; i < signItems.length; i++) {
    let signText = signItems[i].querySelector(".listText").textContent.toLowerCase();
    let signListismatch = signText.includes(searchTaskvalue);
    if (signListismatch == true) {
      signItems[i].style.display = "flex";
    } 
    else {
      signItems[i].style.display = "none";
    }
  }   
  };
 
clearBtn.addEventListener("click", handleClearTask);
function handleClearTask() {
  searchInput.value = "";
  createTodoList();
  createProgressList();
  createCompletedList();
createDelayList();
createSignList();
};