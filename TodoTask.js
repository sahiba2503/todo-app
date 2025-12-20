 let index = 0;
var allTaskListContainer = 20;
var slids = document.querySelector(".taskContainer");
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
function handleAddEditTask()
 {
  var inputboxText = taskInput.value.trim();
       
    // var createDatevalue = new Date().toLocaleString("en-us", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
       var createDatevalue = new Date().toLocaleString("en-IN", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
  var dueDatevalue = dueDate.value;
   
    if (inputboxText == "")
     {    return;   }

  if (updateTodoTaskIndex == -1)
     {
    todoListData.push({title:inputboxText,createDate:createDatevalue,update:"",due:dueDatevalue});
    taskInput.value = " ";
    dueDate.value = " ";
    searchInput.value = "";
    createTodoList();
    handleSearchListItem();  
    
      }
       else {
    todoList.children[updateTodoTaskIndex].querySelector(".todoTask" ).textContent = taskInput.value;
    dueDate.value = " ";
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
         <div class="todoCreateDate">Update: ${todoListData[i].update}</div>
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
     { 
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
      var completedListCompleted = new Date().toLocaleString("en-IN", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
      
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
      var signListExpiry = new Date().toLocaleString("en-IN", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
      var signCompleted = new Date().toLocaleString("en-IN", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

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
        <div class="delayDeleteButton"> <i class="fa-regular fa-trash-can"></i></div>        
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
      var todoListCompleted = new Date().toLocaleString("en-IN", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
              
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
// set logic for medium screen width slide move one by noe 

// const smallRightBtn = document.querySelector("#sliderRightBtn");
// const smallLeftBtn = document.querySelector("#sliderLeftBtn");
// const taskContainerForSmallScreen = document.querySelector(".taskContainer");
// const count = 0;
// const width = 100;

//  smallRightBtn.addEventListener("click",moveSlideRightToLeft);
//  function moveSlideRightToLeft(){
//   alert("yes clicking right btn");
//   count++;
//    if(count == 4){
//     count = 0;
//    }
//    moveSliide();
//  }
// smallLeftBtn.addEventListener("click",moveSlideLeftToRight);
// function moveSlideLeftToRight(){
//    alert("yes clicking left btn");
//   count--;
//   if(count == 0){
//     count = 4;
//   }
//   moveSliide();
// }
//  function moveSliide(){
//   taskContainerForSmallScreen.style.transform=`translateX(-${count*width}%)`;

//  };
 //we need to check what is error .
//set logic on slider for small screen.


// var backBtn = document.querySelector("#backBtn");
// var todoBtn = document.querySelector("#todoBtn");
// var proBtn = document.querySelector("#proBtn");
// var donBtn = document.querySelector("#donBtn");
// var expiryBtn = document.querySelector("#expiryBtn");
// var smallScreenSlide = document.querySelector("#smallScreen");


// backBtn.addEventListener("click",comeBacklog);
// function comeBacklog(){
//   alert("yes click b");
//     smallScreenSlide.querySelector('#smallScreen').classList.remove("taskContainer");
//        smallScreenSlide.style.transform = `translateX(-${0}%)`;
  
//  };

//  todoBtn.addEventListener("click",comeTodo);
//  function comeTodo(){
//    alert("yes click t");
//     document.querySelector('#smallScreen').classList.remove("taskContainer");
//     smallScreenSlide.style.transform = `translateX(-${100}%)`;

//  };

//  proBtn.addEventListener("click",comeProgress);
//  function comeProgress(){
//    alert("yes click p");
//     document.querySelector('#smallScreen').classList.remove("taskContainer");
//     smallScreenSlide.style.transform = `translateX(-${200}%)`;

//  };

//  donBtn.addEventListener("click",comeDone);
//  function comeDone(){
//    alert("yes click d");
//     document.querySelector('#smallScreen').classList.remove("taskContainer");
//     smallScreenSlide.style.transform = `translateX(-${300}%)`;

//  };

//   expiryBtn.addEventListener("click",comeExpiry);
//  function comeExpiry(){
//    alert("yes click e");
//     document.querySelector('#smallScreen').classList.remove("taskContainer");
//     smallScreenSlide.style.transform = `translateX(-${400}%)`;

//  };
