// localStorage.clear();
let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let dueDate = document.querySelector("#dueDate");

let todoList = document.querySelector("#todoList");
let progressList = document.querySelector("#progressList");
let completedList = document.querySelector("#completedList");
let delayList = document.querySelector("#delayList");
let signList = document.querySelector("#signList");

  // var searchInput = document.querySelector("#searchInput");

let todoListData = [];
let progressListData = [];
let completedListData = [];
let delayListData = [];
let signListData = [];

let updateTodoTaskIndex = -1;
let updateprogressTaskIndex = -1;
let updateDoneTaskIndex = -1;
let updateBacklogTaskIndex = -1;

//show all todo task after reopen and refresh the browser.
//here DOMContentLoaded is a event 
window.addEventListener("DOMContentLoaded", function () {
  var storedTodo = localStorage.getItem("TODO");
  if (storedTodo !== null) {
    todoListData = JSON.parse(storedTodo);
     }
 //show all progress task after reopen and refresh the browser.
  var storedProgress = localStorage.getItem("PROGRESS");
  if (storedProgress !== null) {
    progressListData = JSON.parse(storedProgress);
        }
  //show all completed task after reopen and refresh the browser.
  var storedCompletd = localStorage.getItem("COMPLETED");
  if (storedCompletd !== null) {
    completedListData = JSON.parse(storedCompletd);
     }
  //show all sign task after reopen and refresh the browser.
  var storedSign = localStorage.getItem("SIGN");
  if (storedSign !== null) {
    signListData = JSON.parse(storedSign);
      }
//show all backlog task after reopen and refresh the browser.
  var storedBacklog = localStorage.getItem("BACKLOG");
  if (storedBacklog !== null) {
    delayListData = JSON.parse(storedBacklog);
      }
  createAllTask();
});
function createAllTask(){
   createTodoList();
    createProgressList();
     createCompletedList();
      createSignList();
        createDelayList();
}
//clear all data from local storage.
// var clearAllTask = document.querySelector("#clearAlltask");
// clearAllTask.addEventListener("click",clearAllTaskFromLocalStorage);
// function clearAllTaskFromLocalStorage(){
//   alert("yes");
//   localStorage.clear();
// };
addBtn.addEventListener("click", handleAddEditTask);
function handleAddEditTask() {
  var inputboxText = taskInput.value.trim();
  var dueDatevalue = dueDate.value;
  var createDatevalue = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  if (inputboxText == "" || dueDatevalue == "") {
  
    return;
  }

  if (updateTodoTaskIndex == -1 && updateprogressTaskIndex == -1 &&
     updateDoneTaskIndex == -1 && updateBacklogTaskIndex == -1) {
      // Create todo task object
let todoTask = {
  title: inputboxText,
  createDate: createDatevalue,
  update: "",
  due: dueDatevalue,
};
// Add task to array
todoListData.push(todoTask);// Save array to localStorage
 var stringTodoTask = JSON.stringify(todoListData)
localStorage.setItem("TODO", stringTodoTask);
     taskInput.value = " ";
    dueDate.value = " ";
    searchInput.value = "";
    createTodoList();
    handleSearchListItem();
  }
  //logic for todo task update when click add button
   else if (updateTodoTaskIndex != -1) {
    todoListData[updateTodoTaskIndex].title = taskInput.value;
        todoListData[updateTodoTaskIndex].update = new Date().toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    todoListData[updateTodoTaskIndex].due = dueDate.value;

// update in local storage
 var stringTodoTask = JSON.stringify(todoListData)
localStorage.setItem("TODO", stringTodoTask);
//end

    dueDate.value = "";
    taskInput.value = "";
    searchInput.value = "";
    createTodoList();
    handleSearchListItem();
    updateTodoTaskIndex = -1;
  }
  //logic for progress task update when click add button
  else if (updateprogressTaskIndex != -1) {
   
    progressListData[updateprogressTaskIndex].title = taskInput.value;
    progressListData[updateprogressTaskIndex].update = new Date().toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    progressListData[updateprogressTaskIndex].due = dueDate.value;
    // update in local storage
 var stringProgresTask = JSON.stringify(progressListData)
localStorage.setItem("PROGRESS", stringProgresTask);
//end
    dueDate.value = "";
    taskInput.value = "";
    searchInput.value = "";
    createProgressList();
    handleSearchListItem();
    updateprogressTaskIndex = -1;
  }
  //logic for done task update when click add button
  else if (updateDoneTaskIndex != -1) {
   
    completedListData[updateDoneTaskIndex].title = taskInput.value;
    completedListData[updateDoneTaskIndex].update = new Date().toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    completedListData[updateDoneTaskIndex].due = dueDate.value;
     // update in local storage
 var stringDoneTask = JSON.stringify(completedListData)
localStorage.setItem("COMPLETED", stringDoneTask);
//end
    dueDate.value = "";
    taskInput.value = "";
    searchInput.value = "";
    createCompletedList();
    handleSearchListItem();
    updateDoneTaskIndex = -1;
  }
  //logic for todo task update when click add button
  else if (updateBacklogTaskIndex != -1) {
    
    delayListData[updateBacklogTaskIndex].title = taskInput.value;
    delayListData[updateBacklogTaskIndex].update = new Date().toLocaleString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    delayListData[updateBacklogTaskIndex].due = dueDate.value;
       // update in local storage
 var stringBacklogTask = JSON.stringify(delayListData)
localStorage.setItem("BACKLOG", stringBacklogTask);
//end
    dueDate.value = "";
    taskInput.value = "";
    searchInput.value = "";
    createDelayList();
    handleSearchListItem();
    updateBacklogTaskIndex = -1;
  }


}
//this logic is for create todo list
function createTodoList() {
  todoList.innerHTML = "";
 var totalTodo = document.querySelector("#tTaskHeading");
 var todoL = todoListData.length;
totalTodo.children[0].innerHTML = todoL;
  for (let i = 0; i < todoListData.length; i++) {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todoListItem">
        <div class="todoListDetail">
        <div class="todoTask">${todoListData[i].title}</div>
        <div class="todoCreateDate">Created: ${todoListData[i].createDate}</div>
         <div class="todoUpdateDate">Update: ${todoListData[i].update}</div>
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
  let todoListItem = document.querySelectorAll(".todoListItem");

  for (let i = 0; i < todoListData.length; i++) {
      var todoBacklogListTitle = todoListData[i].title;
      var todoBacklogListCreate = todoListData[i].createDate;
      var todoBacklogListDue = todoListData[i].due;

    todoListItem[i]
      .querySelector(".todoEditButton")
      .addEventListener("click", todoEditList);
    function todoEditList() {
      taskInput.value =  todoListData[i].title;
      dueDate.value = todoListData[i].due;     
      updateTodoTaskIndex = i;
    }

    todoListItem[i]
      .querySelector(".todoBacklog")
      .addEventListener("click", todobacklogList);
    // function todobacklogList() {
       function todobacklogList(){
  let backTask = {
  title: todoBacklogListTitle,
  createDate: todoBacklogListCreate,
  update: "",
  due: todoBacklogListDue,
};
// Add task to array/
delayListData.push(backTask);
  todoListData.splice(i, 1);
      createTodoList();
     // Save array to localStorage
 var stringBackInTask = JSON.stringify(delayListData);
localStorage.setItem("BACKLOG", stringBackInTask);
 
var stringTodoTask = JSON.stringify(todoListData);
localStorage.setItem("TODO",stringTodoTask );
//end
 createDelayList();
  dueDate.value = "";
    taskInput.value = "";
    }

    todoListItem[i]
      .querySelector(".todoMoveButton")
      .addEventListener("click", todoMoveList);
    function todoMoveList() {      
  let forwardTask = {
  title: todoBacklogListTitle,
  createDate: todoBacklogListCreate,
  update: "",
  due: todoBacklogListDue,
};
// Add task to array/
progressListData.push(forwardTask);
  todoListData.splice(i, 1);
      createTodoList();
      createProgressList();
      // Save array in localStorage
       var stringprogTask = JSON.stringify(progressListData);
       localStorage.setItem("PROGRESS", stringprogTask);
 
var stringTodoTask = JSON.stringify(todoListData);
localStorage.setItem("TODO",stringTodoTask );
//end
 dueDate.value = "";
    taskInput.value = "";
 
     }
        
    todoListItem[i]
      .querySelector(".todoDeleteButton")
      .addEventListener("click", todoDeleteList);
    function todoDeleteList() {
      todoListData.splice(i, 1);
      var todoStringyTask = JSON.stringify(todoListData);
      localStorage.setItem("TODO",todoStringyTask);

      taskInput.value = "";
      createTodoList();
    }
  }
}
//this logic is for create progress list
function createProgressList() {
  progressList.innerHTML = "";
  var progressHeading= document.querySelector("#pTaskHeading");
var progressL = progressListData.length;
progressHeading.children[0].innerHTML = progressL ;
  for (let i = 0; i < progressListData.length; i++) {
    progressList.insertAdjacentHTML(
      "beforeend",
      `<li class="progressListItem">
        <div class="progressListDetail">
        <div class="progressTask">${progressListData[i].title}</div>
        <div class="progressCreateDate">Created: ${progressListData[i].createDate}</div>
         <div class="progressUpdateDate">Update: ${progressListData[i].update}</div>
        <div class="progressDueDate">Due: ${progressListData[i].due}</div>
        </div>
        <div class="progressIconContainer">
         <div class="progressEditButton"><i class="fa-solid fa-pencil"></i></div>
        <div class="progressMoveInTodo"><i class="fa-solid fa-arrow-left-long"></i></div>
        <div class="progressMoveButton"><i class="fa-solid fa-arrow-right-long"></i></div>
        <div class="progressDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
  let progressListItem = document.querySelectorAll(".progressListItem");
  for (let i = 0; i < progressListData.length; i++) {
    

    progressListItem[i]
      .querySelector(".progressDeleteButton")
      .addEventListener("click", ProgressDeleteList);
    function ProgressDeleteList() {
      progressListData.splice(i, 1);
        var progressStringyTask = JSON.stringify(progressListData);
      localStorage.setItem("PROGRESS",progressStringyTask);
      createProgressList();
    }
    progressListItem[i]
      .querySelector(".progressMoveInTodo")
      .addEventListener("click", progressListMoveInTodo);
    function progressListMoveInTodo() {
       var todoListTitle = progressListData[i].title;
      var todoListCreate = progressListData[i].createDate;
      var todoListDue = progressListData[i].due;
        let forwardTaskInTodo = {
  title: todoListTitle,
  createDate: todoListCreate,
  update: "",
  due: todoListDue,
};
// Add task to array/
todoListData.push(forwardTaskInTodo);
 progressListData.splice(i, 1);

//add task from progress to todo section in local storege 
 var stringTodoTask = JSON.stringify(todoListData)
localStorage.setItem("TODO", stringTodoTask);

     // Save array to localStorage    
var stringPrTask = JSON.stringify(progressListData);
localStorage.setItem("PROGRESS",stringPrTask);
     
//END
 createTodoList();
      createProgressList();
       dueDate.value = "";
    taskInput.value = "";
        }
    progressListItem[i]
      .querySelector(".progressMoveButton")
      .addEventListener("click", progressMoveLists);
    function progressMoveLists() {
      var completedListTitle = progressListData[i].title;
      var completedListDue = progressListData[i].due;
      var completedListCreate = progressListData[i].createDate;
      var completedListCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
       let forwardTaskInCom = {
  title: completedListTitle,
  createDate: completedListCreate,
  compledDate : completedListCompleted,
  update: "",
  due: completedListDue,
};
// Add task to array/
completedListData.push(forwardTaskInCom);
  progressListData.splice(i, 1);
      createCompletedList();
      createProgressList();
      // Save array in localStorage
     
       var stringprogTask = JSON.stringify(progressListData);
       localStorage.setItem("PROGRESS", stringprogTask);
 
var stringComTask = JSON.stringify(completedListData);
localStorage.setItem("COMPLETED",stringComTask );
//end
 dueDate.value = "";
    taskInput.value = "";
     
    }
    progressListItem[i]
      .querySelector(".progressEditButton")
      .addEventListener("click", progressEditList);
    function progressEditList() {
      taskInput.value =  progressListData[i].title;
      dueDate.value = progressListData[i].due;
      updateprogressTaskIndex = i;
    }

  }
}
//this logic is for create completed list
function createCompletedList() {
  completedList.innerHTML = "";
   var doneHeading = document.querySelector("#dTaskHeading");
var doneL = completedListData.length;
doneHeading.children[0].innerHTML = doneL;
  for (let i = 0; i < completedListData.length; i++) {
    completedList.insertAdjacentHTML(
      "beforeend",
      `<li class="completedListItem">
        <div class="completedListDetail">
        <div class="completedTask">${completedListData[i].title}</div>
        <div class="completedCreateDate">Created: ${completedListData[i].createDate}</div>
         <div class="completedDueDate">due: ${completedListData[i].due}</div>
           <div class="completedUpdateDate">Update: ${completedListData[i].update}</div>
        <div class="completedDueDate">Completed: ${completedListData[i].compledDate}</div>
        </div>
        <div class="completedIconContainer">
         <div class="completedEditButton"><i class="fa-solid fa-pencil"></i></div>
          <div class="comeMoveInProg"><i class="fa-solid fa-arrow-left-long"></i></div>
        <div class="completedMoveButton"><i class="fa-solid fa-arrow-right"></i></div>
        <div class="completedDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
  let completedListItem = document.querySelectorAll(".completedListItem");
  for (let i = 0; i < completedListData.length; i++) {
    completedListItem[i]
      .querySelector(".completedDeleteButton")
      .addEventListener("click", completedDeleteList);
    function completedDeleteList() {
      completedListData.splice(i, 1);
      //after remove the task update local Storage
        var completedStringyTask = JSON.stringify(completedListData);
      localStorage.setItem("COMPLETED",completedStringyTask);
      //end
      createCompletedList();
    }
    completedListItem[i].querySelector(".comeMoveInProg").addEventListener("click", progressListMoveInTodo);
     function progressListMoveInTodo() {
      var prCreateListTitle = completedListData[i].title;
      var prCreateListCreate = completedListData[i].createDate;
      var prCreateListdue = completedListData[i].compledDate;
       let forwardTaskInprogress = {
  title: prCreateListTitle ,
  createDate: prCreateListCreate,
  compledDate :  prCreateListdue,
  update: "",
 due: prCreateListdue,
};
// Add task to array/
progressListData.push(forwardTaskInprogress);
  completedListData.splice(i, 1);
      createCompletedList();
      createProgressList();
// update in local storage
    var stringCom = JSON.stringify(completedListData);
      localStorage.setItem("COMPLETED", stringCom);
      
var stringPrTask = JSON.stringify(progressListData);
localStorage.setItem("PROGRESS",stringPrTask);
     
//END
 dueDate.value = "";
    taskInput.value = "";
    }
       completedListItem[i].querySelector(".completedMoveButton").addEventListener("click", completedAddListInsign);
    function completedAddListInsign() {      
      var signListTitle = completedListData[i].title;
      var signListCreate = completedListData[i].createDate;
      var signListDue = completedListData[i].due;
        var signListExpiry = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      var signCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
  let forwardTaskInSign = {
  title: signListTitle,
  createDate: signListCreate,
  compledDate :  signCompleted,
   expiry: signListExpiry,
  due: signListDue,
};
// Add task to array/
signListData.push(forwardTaskInSign);
  completedListData.splice(i, 1);
   createCompletedList();
      createSignList();
      //update in local
  var stringComgTask = JSON.stringify(completedListData);
       localStorage.setItem("COMPLETED", stringComgTask);
 
var stringDonTask = JSON.stringify(signListData);
localStorage.setItem("SIGN",stringDonTask );
//end
 dueDate.value = "";
    taskInput.value = "";
          }
        completedListItem[i]
      .querySelector(".completedEditButton")
      .addEventListener("click", completedEditList);
    function completedEditList() {
      taskInput.value =  completedListData[i].title;
      dueDate.value = completedListData[i].due;  
         updateDoneTaskIndex = i;
             }
   
  }
}
//this logic is for create create list
function createSignList() {
  signList.innerHTML = "";
  var signHeading = document.querySelector("#eTaskHeading");
var signL = signListData.length;
signHeading.children[0].innerHTML = signL;
  for (let i = 0; i < signListData.length; i++) {
    signList.insertAdjacentHTML(
      "beforeend",
      `<li class="signListItem">
        <div class="signListDetail">
        <div class="signTask">${signListData[i].title}</div>
         <div class="signExpiryDate">Create: ${signListData[i].createDate}</div>
        <div class="signExpiryDate">Expiry: ${signListData[i].expiry}</div>
        <div class="signCompletedDate">Completed: ${signListData[i].compledDate}</div>
        </div>
        <div class="signIconContainer">
         <div class="signMoveInCompleted"><i class="fa-solid fa-arrow-left-long"></i></div>
         <div class="signDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
  let signListItem = document.querySelectorAll(".signListItem");
  for (let i = 0; i < signListData.length; i++) {
    signListItem[i]
      .querySelector(".signDeleteButton")
      .addEventListener("click", signDeletList);
    function signDeletList() {
      signListData.splice(i, 1);
        //after remove the task update local Storage
        var signStringyTask = JSON.stringify(signListData);
      localStorage.setItem("SIGN",signStringyTask);
      //end
      createSignList();
    }
    signListItem[i].querySelector(".signMoveInCompleted").addEventListener("click", signListMoveInCompleted);
    function signListMoveInCompleted() {
           var completedListTitle = signListData[i].title;
      var completedListCreate = signListData[i].createDate;
      var completedListCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
     var  backInCompleted = {
        title: completedListTitle,
        createDate: completedListCreate,
        update: "",
        compledDate: completedListCompleted,
      };
      completedListData.push(backInCompleted);
     signListData.splice(i, 1);
//update in local storage
       var stringCom = JSON.stringify(completedListData);
      localStorage.setItem("COMPLETED", stringCom);
      
var stringsignTask = JSON.stringify(signListData);
localStorage.setItem("SIGN",stringsignTask);
//end code
      
      createCompletedList();      
      createSignList();
       dueDate.value = "";
    taskInput.value = "";
    }
  }
}
//this logic  is for create delay list
function createDelayList() {
  delayList.innerHTML = "";
  var backlogHeading = document.querySelector("#bTaskHeading");
var backlogL = delayListData.length;
backlogHeading.children[0].innerHTML = backlogL;
  for (let i = 0; i < delayListData.length; i++) {
    delayList.insertAdjacentHTML(
      "beforeend",
      `<li class="delayListItem">
        <div class="backlogListDetail">
        <div class="backlogTask">${delayListData[i].title}</div>
         <div class="backlogCreateDate">Created:${delayListData[i].createDate}</div>
         <div class="backlogupdateDate">update: ${delayListData[i].update}</div>
          <div class="backlogdueDate">Due: ${delayListData[i].due}</div>
            </div>  
        <div class="backlogIconContainer"> 
          <div class="backlogEditButton"><i class="fa-solid fa-pencil"></i></div> 
        <div class="BacklogMoveTodo"><i class="fa-solid fa-arrow-right"></i></div>    
        <div class="delayDeleteButton"> <i class="fa-regular fa-trash-can"></i></div>        
        </div>
        </li>
        `
    );
  }

  let delayListItem = document.querySelectorAll(".delayListItem");
  for (let i = 0; i < delayListData.length; i++) {
      delayListItem[i]
      .querySelector(".backlogEditButton")
      .addEventListener("click", backlogEditList);
    function backlogEditList() {
       taskInput.value = delayListData[i].title;
      dueDate.value = delayListData[i].due;
             
      updateBacklogTaskIndex = i;
    }
 
    delayListItem[i]
      .querySelector(".delayDeleteButton")
      .addEventListener("click", delayDeleteList);
    function delayDeleteList() {
      delayListData.splice(i, 1);
        //after remove the task update local Storage
        var delayStringyTask = JSON.stringify(delayListData);
      localStorage.setItem("BACKLOG",delayStringyTask);
      //end
      createDelayList();
    }

    delayListItem[i]
      .querySelector(".BacklogMoveTodo")
      .addEventListener("click", backlogAddList);
    function backlogAddList() {
      var todoListTitle = delayListData[i].title;
      var todoListCreate = delayListData[i].createDate;
      var todoListupdate = delayListData[i].update;
      var todoListCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

       var addtodoListItem = {
        title: todoListTitle,
        createDate: todoListCreate,
        update: todoListupdate,
        due: todoListCompleted,
      }
      todoListData.push(addtodoListItem);
       delayListData.splice(i, 1);
      //push task from backlog to todo in local storage
var stringBackInTask = JSON.stringify(delayListData);
localStorage.setItem("BACKLOG", stringBackInTask);
 
var stringTodoTask = JSON.stringify(todoListData);
localStorage.setItem("TODO",stringTodoTask );
//end code     
      createDelayList();
      createTodoList();
       dueDate.value = "";
    taskInput.value = "";
    }
  }
}
//this logic is for search task
 var searchInput = document.querySelector("#searchInput");
 const searchBtn = document.querySelector("#searchBtn");
  const clearBtn = document.querySelector("#clearBtn");

searchBtn.addEventListener("click", handleSearchListItem);
function handleSearchListItem() {
  let searchTaskvalue = searchInput.value.toLowerCase().trim();

  let todoItems = todoList.getElementsByTagName("li");
  let progressItems = progressList.getElementsByTagName("li");
  let completedItems = completedList.getElementsByTagName("li");
  let delayItems = delayList.getElementsByTagName("li");
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
    if (completdIsmatch == true) {
      completedItems[i].style.display = "flex";
    } else {
      completedItems[i].style.display = "none";
    }
  }
  for (let i = 0; delayListData.length; i++) {
    let delayText = delayListData[i].title;
    delayText = delayText.toLowerCase();
    let delayListismatch = delayText.includes(searchTaskvalue);
    if (delayListismatch == true) {
      delayItems[i].style.display = "flex";
    } else {
      delayItems[i].style.display = "none";
    }
  }
   for (let i = 0; signListData.length; i++) {
    let signText = signListData[i].title;
    signText = signText.toLowerCase();
    let signListismatch = signText.includes(searchTaskvalue);
    if (signListismatch == true) {
      signItems[i].style.display = "flex";
    } else {
      signItems[i].style.display = "none";
    }
  }

  
  for (let i = 0; i < signListData.length; i++) {
    let signtext = signListData[i].title;
    signtext = signtext.toLowerCase();
    let signIsmatch = signtext.includes(searchTaskvalue);
    if (signIsmatch == true) {
      signItems[i].style.display = "flex";
    } else {
      signItems[i].style.display = "none";
    }
  }
}

clearBtn.addEventListener("click", handleClearTask);
 function handleClearTask() {
  searchInput.value = "";
  createTodoList();
  createProgressList();
  createCompletedList();
  createDelayList();
  createSignList();
}


//i dont want to use any method and variable from this file to  another file .
import { } from "./module1.js";
// import { } from "./module11.js"





