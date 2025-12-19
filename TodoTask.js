 let index = 0;
var allTaskListContainer = 20;
var slids = document.querySelector("#taskContainer");
document.querySelector("#sliderRightBtn").addEventListener("click",()=>{
    index++;
   if(index > 1){
    index = 0;
  }
  updateSlider();

});
document.querySelector("#sliderLeftBtn").addEventListener("click",()=>{
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
  var inputboxText = taskInput.value.trim();
    var createDatevalue = new Date().toISOString().split("T");
  var dueDatevalue = dueDate.value;
  var updatedate = "not updated";
  if (inputboxText == "")
     {    return;   }

  if (updateTodoTaskIndex == -1)
     {
    todoListData.push({title:inputboxText,createDate:createDatevalue,update:updatedate,due:dueDatevalue});
    taskInput.value = " ";
    dueDate.value = " ";
    searchInput.value = "";
    createTodoList();
    handleSearchListItem();
      
      }
       else {
    todoList.children[updateTodoTaskIndex].querySelector(".todoTask" ).textContent = taskInput.value;
    todoListData[updateTodoTaskIndex].title = taskInput.value;
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
        <div class="todoDueDate">Due: ${todoListData[i].due}</div>
        </div>
        <div class="todoiconContainer">
        <div class="todoEditButton"><i class="fa-solid fa-pencil"></i></div>
        <div class="todoBacklog"><i class="fa-solid fa-arrow-left-long"></i></div>
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

     todoListItem[i].querySelector(".todoBacklog").addEventListener("click", todobacklogList);
    function todobacklogList()
     { alert("yes clicking");
      var todoBacklogListTitle = todoListData[i].title;
      var todoBacklogListCreate = todoListData[i].createDate;
      var todoBacklogListDue =  todoListData[i].due;

       delayListData.push({title:todoBacklogListTitle,createDate:todoBacklogListCreate,due:todoBacklogListDue});
        todoListData.splice(i, 1);
        createTodoList();
       createDelayList();        
    }
    
    todoListItem[i].querySelector(".todoMoveButton").addEventListener("click", todoMoveList);
    function todoMoveList()
     {
      var progressListTitle = todoListData[i].title;
      var progressListCreate = todoListData[i].createDate;
      var progressListDue = todoListData[i].due

       progressListData.push({title:progressListTitle,createDate:progressListCreate,due:progressListDue});
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
        <div class="progressDueDate">Due: ${progressListData[i].due}</div>
        </div>
        <div class="progressIconContainer">
        <div class="progressBacklog"><i class="fa-solid fa-arrow-left-long"></i></div>
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
      progressListItem[i].querySelector(".progressBacklog").addEventListener("click", progressBacklogMove);
     function progressBacklogMove(){
      var progBacklogListTitle = progressListData[i].title;
      var progBacklogListCreate = progressListData[i].createDate;
      var progBacklogListDue = progressListData[i].due;
      
      delayListData.push({title:progBacklogListTitle,createDate:progBacklogListCreate,due:progBacklogListDue});
       progressListData.splice(i, 1);     
      createProgressList();
      createDelayList();
     }
     progressListItem[i].querySelector(".progressMoveButton").addEventListener("click", progressMoveLists);
     function progressMoveLists(){
      var completedListTitle = progressListData[i].title;
      var completedListCreate = progressListData[i].createDate;
      var completedListCompleted = "completed";
      
      completedListData.push({title:completedListTitle,createDate:completedListCreate,compledDate:completedListCompleted});
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
        <div class="completedDueDate">Completed: ${completedListData[i].comletedDate}</div>
        </div>
        <div class="completedIconContainer">
        <div class="completedMoveButton"><i class="fa-solid fa-arrow-right"></i></div>
        <div class="completedDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
  const completedListItem = document.querySelectorAll(".completedListItem");
  for (let i = 0; i < completedListData.length; i++)
     {
    completedListItem[i].querySelector(".completedDeleteButton").addEventListener("click", completedDeleteList);
      function completedDeleteList() 
      {
        completedListData.splice(i, 1);
        createCompletedList();
    }
    completedListItem[i].querySelector(".completedMoveButton").addEventListener("click", completedAddList);
    function completedAddList(){ 

     var signListTitle = completedListData[i].title;
      var signListExpiry = "expiry date";
      var signCompleted = "completed date";

       signListData.push({title:signListTitle,expiry:signListExpiry,completed:signCompleted});
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
      `<li class="signListItem">
        <div class="signListDetail">
        <div class="signTask">${signListData[i].title}</div>
        <div class="signExpiryDate">Expiry: ${signListData[i].expiry}</div>
        <div class="signCompletedDate">Completed: ${signListData[i].completed}</div>
        </div>
        <div class="signIconContainer">
         <div class="signDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
   const signListItem = document.querySelectorAll(".signListItem");
  for (let i = 0; i < signListData.length; i++)    
     {
 signListItem[i].querySelector(".signDeleteButton").addEventListener("click",signDeletList);
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
        <div class="backlogListDetail">
        <div class="backlogTask">${delayListData[i].title}</div>
         <div class="backlogCreateDate">Created:${delayListData[i].createDate}</div>
          <div class="backlogdueDate">Due: ${delayListData[i].due}</div>
        </div>  
        <div class="backlogIconContainer">  
        <div class="BacklogMoveTodo"><i class="fa-solid fa-arrow-right"></i></div>    
        <div class="delayDeleteButton"> <i class="fa-solid fa-xmark"></i></div>        
        </div>
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

    delayListItem[i].querySelector(".BacklogMoveTodo").addEventListener("click", backlogAddList);
       function backlogAddList() 
       {
         var todoListTitle = delayListData[i].title;
      var todoListCreate = delayListData[i].createDate;
      var todoListCompleted = "due";
              
      todoListData.push({title:todoListTitle,createDate:todoListCreate,due:todoListCompleted});
      delayListData.splice(i, 1);
      createDelayList();    
     createTodoList();
    }
  }
 };

// logic on search input fiedl
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const clearBtn = document.querySelector("#clearBtn");

searchBtn.addEventListener("click", handleSearchListItem);
function handleSearchListItem() 
{
  let searchTaskvalue = searchInput.value.toLowerCase().trim();
  // addListInTodoAfterFilterListText = searchTaskvalue;

  let todoItems = todoList.getElementsByTagName("li");
  let progressItems = progressList.getElementsByTagName("li");
  let completedItems = completedList.getElementsByTagName("li");
  // let delayItems = delayList.getElementsByTagName("li");
  let signItems = signList.getElementsByTagName("li");

  for (let i = 0; i < todoListData.length; i++) {
    let todotext = todoListData[i].title;
     todotext = todotext.toLowerCase();
    let todoIsmatch = todotext.includes(searchTaskvalue);
    if (todoIsmatch == true) {
      todoItems[i].style.display = "flex";
    } else {
      todoItems[i].style.display = "none";
    }
  }
  for (let i = 0; i < progressListData.length; i++) {
       let progresstext = progressListData[i].title;
     progresstext = progresstext.toLowerCase();
    let progressismatch = progresstext.includes(searchTaskvalue);
    if (progressismatch == true) {
      progressItems[i].style.display = "flex";
    } else {
      progressItems[i].style.display = "none";
    }
  }
  for (let i = 0; i < completedListData.length; i++) {
    let completedtext = completedListData[i].title;
     completedtext = completedtext.toLowerCase();
    let completdIsmatch = completedtext.includes(searchTaskvalue);
    if (completdIsmatch == true)
       {
      completedItems[i].style.display = "flex";
    } 
    else{
      completedItems[i].style.display = "none";
    }
  }
    for (let i = 0; i < delayListData.length; i++) {
    let delayText = delayListData[i].title;
    delayText = delayText.toLowerCase();
    let delayListismatch = delayText.includes(searchTaskvalue);
    if (delayListismatch == true) {
      delayItems[i].style.display = "flex";
    } 
    else {
      delayItems[i].style.display = "none";
    }
  }
    for (let i = 0; i < signListData.length; i++) 
      {
         let signtext = signListData[i].title;
     signtext = signtext.toLowerCase();
    let signIsmatch = signtext.includes(searchTaskvalue);
       if (signIsmatch == true) {
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