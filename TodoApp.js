
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const clearBtn = document.querySelector("#clearBtn");

const todoList = document.querySelector("#todoList");
const progressList = document.querySelector("#progressList");
const completedList = document.querySelector("#completedList");
const delayList =  document.querySelector("#delayList");
const signList =  document.querySelector("#signList");
 
var slider = document.querySelector('#slider');

const todoListData = []; 
const progressListData = [];
const completedListData = [];
const delayListData = [];
const signListData = [];

let updateTodoTaskIndex = -1; 




addBtn.addEventListener("click", handleAddEditTask);
function handleAddEditTask() {
  const inputboxText = taskInput.value.trim();
  if (inputboxText == "") {    return;   }

  if (updateTodoTaskIndex == -1)
     {

    todoListData.push(inputboxText);
    taskInput.value = "";
    createTodoList();
    handleSearchListItem();
      
      }
       else {
    todoList.children[updateTodoTaskIndex].querySelector(".listText" ).textContent = taskInput.value;
    todoListData.splice(updateTodoTaskIndex, 1, taskInput.value);
    taskInput.value = "";
     handleSearchListItem();
    updateTodoTaskIndex = -1;      
  }
}
function createTodoList() {
  todoList.innerHTML = "";
  for (let i = 0; i < todoListData.length; i++) {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todoListItem">
        <div class="todoIconText">
        <span class="todoAddButton"><i class="fa-regular fa-circle"></i></span>
        <span class="listText">${todoListData[i]}</span>
        </div>
        <div class="TodoiconContainer">
        <div class="todoEditButton"><i class="fa-solid fa-pencil"></i></div>
        <div class="todoMoveButton"><i class="fa-solid fa-reply-all"></i></div>
        <div class="todoDeleteButton"><i class="fa-solid fa-xmark"></i> </div>
                </div>
        </li>
        `
    );
  }
  const todoListItem = document.querySelectorAll(".todoListItem");

  for (let i = 0; i < todoListData.length; i++)
     {
    todoListItem[i].querySelector(".todoDeleteButton").addEventListener("click", todoDeleteList);    
    function todoDeleteList() 
    {
      todoListData.splice(i, 1);
      taskInput.value = "";
       createTodoList();  
        }

    todoListItem[i].querySelector(".todoAddButton").addEventListener("click", todoAddList);
    function todoAddList()
     {
           const StoreTodoText = todoListData[i];
      progressListData.push(StoreTodoText);
       todoListData.splice(i, 1);
       createTodoList();
      createProgressList();
     
    
    
    }

    todoListItem[i].querySelector(".todoMoveButton").addEventListener("click", todoMoveList);
    function todoMoveList()
     {
      var delayListcontent = todoListData[i];
      delayListData.push(delayListcontent);
      createDelayList();
      todoListData.splice(i, 1);
      createTodoList();
    }


    todoListItem[i].querySelector(".todoEditButton").addEventListener("click", todoEditList);
    function todoEditList()
     {
      taskInput.value = todoListItem[i].querySelector(".listText").textContent;
      updateTodoTaskIndex = i;    
    }
  }
}
function createProgressList() {
  progressList.innerHTML = "";
  for (let i = 0; i < progressListData.length; i++) {
    progressList.insertAdjacentHTML(
      "beforeend",
      `<li class="progressListItem">
        <div class="iconTextOfProgress">
        <span class="progressAddButton"><i class="fa-solid fa-circle-check"></i></span>
        <span class="listText">${progressListData[i]}</span>
        </div>  
          <div class="progressTwoIcons">
        <div class="progressMoveButton"><i class="fa-solid fa-reply-all"></i></div>
        <div class="progressDeleteButton"><i class="fa-solid fa-xmark"></i></div>
        </div>
        </li>
        `
    );
  }
  const progressListItem = document.querySelectorAll(".progressListItem");
  for (let i = 0; i < progressListData.length; i++) {
    progressListItem[i].querySelector(".progressDeleteButton").addEventListener("click", ProgressDeleteList);
    function ProgressDeleteList()
     {
      progressListData.splice(i, 1);
       createProgressList();
    }
 
     progressListItem[i].querySelector(".progressMoveButton").addEventListener("click", progressMoveLists);
     function progressMoveLists(){
      let delayListcontent = progressListData[i];
      delayListData.push(delayListcontent);
      createDelayList();
              progressListData.splice(i, 1);
       createProgressList();
     }

    progressListItem[i].querySelector(".progressAddButton").addEventListener("click", progressAddList);
       function progressAddList() 
       {
              let StoreCopletedText = progressListData[i];
      completedListData.push(StoreCopletedText);
      
      progressListData.splice(i, 1);     
      createProgressList();
       createCompletedList();

     
    }
  }

}


function createCompletedList() {
   completedList.innerHTML = "";
  for (let i = 0; i < completedListData.length; i++) {
    completedList.insertAdjacentHTML(
      "beforeend",
      `<li class="completedlistItem">
        <div class="compIconText">
        <span class="completedAddButton"><i class="fa-solid fa-circle-check"></i></span>
        <span class="listText">${completedListData[i]}</span>
        </div>
        <div class="completedDeleteButton"><i class="fa-solid fa-xmark"></i></div>
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
    completedlistItem[i].querySelector(".completedAddButton").addEventListener("click", completedAddList);
    function completedAddList(){ 
      var newTexSlist = completedListData[i];
      signListData.push(newTexSlist);
      createSignList();
        completedListData.splice(i, 1);
        createCompletedList();
        
   
       }
      }
  };

  function createSignList(){
      signList.innerHTML = "";
  for (let i = 0; i < signListData.length; i++) {
    signList.insertAdjacentHTML(
      "beforeend",
      `<li class="signListItem">
       <div class="listText">${signListData[i]}</div>
       <div class="signDeleteButton"><i class="fa-solid fa-xmark"></i></div>
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
  
  let index = 0;
var totalSliders = 4;
var allTaskListContainer = 20;

clearBtn.addEventListener("click", handleClearTask);
function handleClearTask() {
  searchInput.value = "";
  createTodoList();
  createProgressList();
  createCompletedList();
createDelayList();
createSignList();
};

document.querySelector("#rightBtn").addEventListener("click",()=>{
  index++;
   if(index >= totalSliders){
    index = 0;

  }
  updateSlider();

});
document.querySelector("#leftBtn").addEventListener("click",()=>{
  index--;
  if(index < 0){
   index = totalSliders-1;
  }
   updateSlider();
  });
  function  updateSlider(){
    slider.style.transform = `translateX(-${index * allTaskListContainer}%)`;
  };
 