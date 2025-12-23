

//
//create and mannage the task.
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const dueDate = document.querySelector("#dueDate");

const todoList = document.querySelector("#todoList");
const progressList = document.querySelector("#progressList");
const completedList = document.querySelector("#completedList");
const delayList = document.querySelector("#delayList");
const signList = document.querySelector("#signList");

const todoListData = [];
const progressListData = [];
const completedListData = [];
const delayListData = [];
const signListData = [];
let updateTodoTaskIndex = -1;
let updateprogressTaskIndex = -1;
let updateDoneTaskIndex = -1;

addBtn.addEventListener("click", handleAddEditTask);
function handleAddEditTask() {
  var inputboxText = taskInput.value.trim();

  var createDatevalue = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  var dueDatevalue = dueDate.value;

  if (inputboxText == "") {
    return;
  }

  if (updateTodoTaskIndex == -1 && updateprogressTaskIndex == -1 && updateDoneTaskIndex == -1) {
    todoListData.push({
      title: inputboxText,
      createDate: createDatevalue,
      update: "",
      due: dueDatevalue,
    });
    taskInput.value = " ";
    dueDate.value = " ";
    searchInput.value = "";
    createTodoList();
    handleSearchListItem();
  } else if (updateTodoTaskIndex != -1){
    
    todoListData[updateTodoTaskIndex].title = taskInput.value;
    todoListData[updateTodoTaskIndex].update = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  
    todoListData[updateTodoTaskIndex].due = dueDate.value;
    dueDate.value = "";
    taskInput.value = "";
    createTodoList();
    handleSearchListItem();
    updateTodoTaskIndex = -1;
  }
  else if (updateprogressTaskIndex != -1){
    alert("run progress update button");
      progressListData[updateprogressTaskIndex].title = taskInput.value;
     progressListData[updateprogressTaskIndex].update = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  
     progressListData[updateprogressTaskIndex].due = dueDate.value;
    dueDate.value = "";
    taskInput.value = "";
    createProgressList();
    handleSearchListItem();
     updateprogressTaskIndex = -1;
  }
//here is updating done task updateDoneTaskIndex
 else if (updateDoneTaskIndex != -1){
    alert("run done update button");
      completedListData[updateDoneTaskIndex].title = taskInput.value;
     completedListData[updateDoneTaskIndex].update = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  
     completedListData[updateDoneTaskIndex].due = dueDate.value;
    dueDate.value = "";
    taskInput.value = "";
    createCompletedList();
    handleSearchListItem();
     updateDoneTaskIndex = -1;
  }
//end



}
function createTodoList() {
  todoList.innerHTML = "";
  for (let i = 0; i < todoListData.length; i++) {
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

  for (let i = 0; i < todoListData.length; i++) {
    todoListItem[i]
      .querySelector(".todoEditButton")
      .addEventListener("click", todoEditList);
    function todoEditList() {
      taskInput.value = todoListItem[i].querySelector(".todoTask").textContent;
      updateTodoTaskIndex = i;
    }

    todoListItem[i]
      .querySelector(".todoBacklog")
      .addEventListener("click", todobacklogList);
    function todobacklogList() {
      var todoBacklogListTitle = todoListData[i].title;
      var todoBacklogListCreate = todoListData[i].createDate;
      var todoBacklogListDue = todoListData[i].due;

      delayListData.push({
        title: todoBacklogListTitle,
        createDate: todoBacklogListCreate,
        due: todoBacklogListDue,
      });
      todoListData.splice(i, 1);
      createTodoList();
      createDelayList();
    }

    todoListItem[i]
      .querySelector(".todoMoveButton")
      .addEventListener("click", todoMoveList);
    function todoMoveList() {
      var progressListTitle = todoListData[i].title;
      var progressListCreate = todoListData[i].createDate;
      var progressListDue = todoListData[i].due;

      progressListData.push({
        title: progressListTitle,
        createDate: progressListCreate,
        due: progressListDue,
      });
      todoListData.splice(i, 1);
      createTodoList();
      createProgressList();
    }
    todoListItem[i]
      .querySelector(".todoDeleteButton")
      .addEventListener("click", todoDeleteList);
    function todoDeleteList() {
      todoListData.splice(i, 1);
      taskInput.value = "";
      createTodoList();
    }
  }
}
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
         <div class="progressEditButton"><i class="fa-solid fa-pencil"></i></div>
        <div class="progressMoveInTodo"><i class="fa-solid fa-arrow-left-long"></i></div>
        <div class="progressMoveButton"><i class="fa-solid fa-arrow-right-long"></i></div>
        <div class="progressDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
  const progressListItem = document.querySelectorAll(".progressListItem");
  for (let i = 0; i < progressListData.length; i++) {
    progressListItem[i]
      .querySelector(".progressDeleteButton")
      .addEventListener("click", ProgressDeleteList);
    function ProgressDeleteList() {
      progressListData.splice(i, 1);
      createProgressList();
    }
    progressListItem[i]
      .querySelector(".progressMoveInTodo")
      .addEventListener("click", progressListMoveInTodo);
    function progressListMoveInTodo() {
      var todoListTitle = progressListData[i].title;
      var todoListCreate = progressListData[i].createDate;
      var todoListDue = progressListData[i].due;

      todoListData.push({
        title: todoListTitle,
        createDate: todoListCreate,
        due: todoListDue,
      });
      progressListData.splice(i, 1);
     createTodoList();
     createProgressList();
      
    }
    progressListItem[i]
      .querySelector(".progressMoveButton")
      .addEventListener("click", progressMoveLists);
    function progressMoveLists() {
      var completedListTitle = progressListData[i].title;
      var completedListCreate = progressListData[i].createDate;
      var completedListCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      completedListData.push({
        title: completedListTitle,
        createDate: completedListCreate,
        compledDate: completedListCompleted,
      });
      progressListData.splice(i, 1);
      createCompletedList();
      createProgressList();

      
    }
 progressListItem[i]
      .querySelector(".progressEditButton")
      .addEventListener("click", progressEditList);
    function progressEditList() {
      taskInput.value = progressListData[i].title;
      updateprogressTaskIndex = i;
    }

  }
}

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
         <div class="completedEditButton"><i class="fa-solid fa-pencil"></i></div>
          <div class="comeMoveInProg"><i class="fa-solid fa-arrow-left-long"></i></div>
        <div class="completedMoveButton"><i class="fa-solid fa-arrow-right"></i></div>
        <div class="completedDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
  const completedListItem = document.querySelectorAll(".completedListItem");
  for (let i = 0; i < completedListData.length; i++) {
    completedListItem[i]
      .querySelector(".completedDeleteButton")
      .addEventListener("click", completedDeleteList);
    function completedDeleteList() {
      completedListData.splice(i, 1);
      createCompletedList();
    }
    //
      completedListItem[i].querySelector(".comeMoveInProg").addEventListener("click", progressListMoveInTodo);
    function progressListMoveInTodo(){
    alert("see chenges from done");
      var prCreateListTitle = completedListData[i].title;
      var prCreateListCreate = completedListData[i].createDate;
      var prCreateListdue = completedListData[i].completed;
       progressListData.push({
        title: prCreateListTitle,
        createDate: prCreateListCreate,
        due: prCreateListdue,
      });
     
          completedListData.splice(i, 1);
      createCompletedList();
       createProgressList();
         
  }
    //
    completedListItem[i]
      .querySelector(".completedMoveButton")
      .addEventListener("click", completedAddList);
    function completedAddList() {
      var signListTitle = completedListData[i].title;
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

      signListData.push({
        title: signListTitle,
        expiry: signListExpiry,
        completed: signCompleted,
      });
      completedListData.splice(i, 1);
      createCompletedList();
      createSignList();
    }
    //update done task
     completedListItem[i]
      .querySelector(".completedEditButton")
      .addEventListener("click", completedEditList);
    function completedEditList() {
      taskInput.value = completedListData[i].title;
      updateDoneTaskIndex = i;
    }
    //end
  }
}

function createSignList() {
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
         <div class="signMoveInCompleted"><i class="fa-solid fa-arrow-left-long"></i></div>
         <div class="signDeleteButton"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        </li>
        `
    );
  }
  const signListItem = document.querySelectorAll(".signListItem");
  for (let i = 0; i < signListData.length; i++) {
    signListItem[i]
      .querySelector(".signDeleteButton")
      .addEventListener("click", signDeletList);
    function signDeletList() {
      signListData.splice(i, 1);
      createSignList();
    }
    signListItem[i].querySelector(".signMoveInCompleted").addEventListener("click", signListMoveInCompleted);
    function signListMoveInCompleted(){
    alert("see chenges");
      var completedListTitle = signListData[i].title;
      var completedListCreate = signListData[i].createDate;
      var completedListCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });
       completedListData.push({
        title: completedListTitle,
        createDate: completedListCreate,
        compledDate: completedListCompleted,
      });
      createCompletedList();
      signListData.splice(i, 1);
      createSignList();    
  }
}
  }

function createDelayList() {
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
  for (let i = 0; i < delayListData.length; i++) {
    delayListItem[i]
      .querySelector(".delayDeleteButton")
      .addEventListener("click", delayDeleteList);
    function delayDeleteList() {
      delayListData.splice(i, 1);
      createDelayList();
    }

    delayListItem[i]
      .querySelector(".BacklogMoveTodo")
      .addEventListener("click", backlogAddList);
    function backlogAddList() {
      var todoListTitle = delayListData[i].title;
      var todoListCreate = delayListData[i].createDate;
      var todoListCompleted = new Date().toLocaleString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      todoListData.push({
        title: todoListTitle,
        createDate: todoListCreate,
        due: todoListCompleted,
      });
      delayListData.splice(i, 1);
      createDelayList();
      createTodoList();
    }
  }
}

// logic on search input fiedl
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const clearBtn = document.querySelector("#clearBtn");

searchBtn.addEventListener("click", handleSearchListItem);
function handleSearchListItem() {
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
    if (completdIsmatch == true) {
      completedItems[i].style.display = "flex";
    } else {
      completedItems[i].style.display = "none";
    }
  }
  for (let i = 0; i < delayListData.length; i++) {
    let delayText = delayListData[i].title;
    delayText = delayText.toLowerCase();
    let delayListismatch = delayText.includes(searchTaskvalue);
    if (delayListismatch == true) {
      delayItems[i].style.display = "flex";
    } else {
      delayItems[i].style.display = "none";
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
//i dont want to use any method and variable in another file 
import { } from "./module1.js";


//this code is also write
// import { slider, index, STEP } from "./module1.js"; 

// console.log(slider);
// console.log(index);
// console.log(STEP);

//no need to export all variable and method 
//keep in mind export only things which you have to use in anothor file
// import {slider, leftBtn, rightBtn, backBtn, todoBtn, proBtn, doneBtn, expiryBtn, index, STEP} from "./module1";
// console.log(slider);
// console.log(index);
// console.log(STEP);
// console.log(leftBtn);
// console.log(rightBtn);
// console.log(backBtn);
// console.log(todoBtn);
// console.log( proBtn);
// console.log(doneBtn);
// console.log(expiryBtn);


// var slider = document.querySelector(".taskContainer");

// var leftBtn = document.querySelector("#sliderLeftBtn");
// var rightBtn = document.querySelector("#sliderRightBtn");

// var backBtn = document.querySelector("#backBtn");
// var todoBtn = document.querySelector("#todoBtn");
// var proBtn = document.querySelector("#proBtn");
// var doneBtn = document.querySelector("#donBtn");
// var expiryBtn = document.querySelector("#expiryBtn");



// //we have to set login on left button all posible condition and the write code for right btn.
// var index = 0;
// var STEP = 20;


// leftBtn.addEventListener("click", function () {

//  //it is for desktop
//   if (window.innerWidth > 900) {
//     if (index <= 0) {
//       index = 1;
//     } else {
//       index--;
//     }
//   }
  
//   // it is for tablet
//   else if (window.innerWidth > 480) {
//     if (index <= 0) {
//       index = 4;
//     } else {
//       index--;
//     }
//   }

//   slider.style.transform = "translateX(-" + (index * STEP) + "%)";
// });


// rightBtn.addEventListener("click", function () {

//   //it is for desktop
//   if (window.innerWidth > 900) {
//     if (index >= 1) {
//       index = 0;
//     } else {
//       index++;
//     }
//   }

//   // it is for tab screen
//   else if (window.innerWidth > 480) {
//     if (index >= 4) {
//       index = 0;
//     } else {
//       index++;
//     }
//   }

//   slider.style.transform = "translateX(-" + (index * STEP) + "%)";
// });

// //it is for mobile screen
// backBtn.addEventListener("click", function () {
//   index = 0;
//   slider.style.transform = "translateX(0%)";
// });

// todoBtn.addEventListener("click", function () {
//   index = 1;
//   slider.style.transform = "translateX(-20%)";
// });

// proBtn.addEventListener("click", function () {
//   index = 2;
//   slider.style.transform = "translateX(-40%)";
// });

// doneBtn.addEventListener("click", function () {
//   index = 3;
//   slider.style.transform = "translateX(-60%)";
// });

// expiryBtn.addEventListener("click", function () {
//   index = 4;
//   slider.style.transform = "translateX(-80%)";
// });
