const addTask = document.querySelector("#addTask");
const addClickButton = document.querySelector("#addClickButton");

const searchTask = document.querySelector("#searchTask");
const searchListBtn = document.querySelector("#searchListBtn");
const removeButton = document.querySelector("#removeButton");

const todoList = document.querySelector("#todoList");
const progressList = document.querySelector("#progressList");
const completedList = document.querySelector("#completedList");

const todoListArr = []; 
const progressListArr = [];
const completedListArr = [];

let addBtnClickTime = -1; 

addClickButton.addEventListener("click", addButtonWork);
function addButtonWork() {
  const inputboxText = addTask.value.trim();
  if (inputboxText == "") {    return;  }
  if (addBtnClickTime == -1)
     {
    todoListArr.push(inputboxText);
    addTask.value = "";
    TodoListcreateListfunction();
      SearchlistItem();
      }
       else {
    todoList.children[addBtnClickTime].querySelector(".todolistText" ).textContent = addTask.value;
    todoListArr.splice(addBtnClickTime, 1, addTask.value);
    addTask.value = "";
     SearchlistItem();
    addBtnClickTime = -1;        
  }
}
function TodoListcreateListfunction() {
  todoList.innerHTML = "";
  for (let i = 0; i < todoListArr.length; i++) {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todoListItem">
        <div class>
        <span class="addList"><i class="fa-regular fa-circle"></i></span>
        <span class="todolistText">${todoListArr[i]}</span>
        </div>
        <div class="iconContainer">
        <div class="todoEditIcon"><i class="fa-solid fa-pencil"></i></div>
        <div class="todoDeleteIcon">X </div>
        </div>
        </li>
        `
    );
  }
  const todoListItem = document.querySelectorAll(".todoListItem");
  for (let i = 0; i < todoListArr.length; i++) {
    todoListItem[i].querySelector(".todoDeleteIcon").addEventListener("click", TodoDeleteListfunction);
    function TodoDeleteListfunction() 
    {
      todoListArr.splice(i, 1);
      addTask.value = "";
       TodoListcreateListfunction();
    }
    todoListItem[i].querySelector(".addList").addEventListener("click", progressListfunction);
    function progressListfunction()
     {
      const progtext = todoListArr[i];
      progressListArr.push(progtext);
      progressCreateListfunction();
      todoListArr.splice(i, 1);
      TodoListcreateListfunction();
    }
    todoListItem[i].querySelector(".todoEditIcon").addEventListener("click", Todoeditlist);
    function Todoeditlist()
     {
      addTask.value = todoListItem[i].querySelector(".todolistText").textContent;
      addBtnClickTime = i;    
    }
  }
}
function progressCreateListfunction() {
  progressList.innerHTML = "";
  for (let i = 0; i < progressListArr.length; i++) {
    progressList.insertAdjacentHTML(
      "beforeend",
      `<li class="progressListItem">
        <div class="icon-Text">
        <span class="progressaddItem"><i class="fa-solid fa-circle-check"></i></</span>
        <span class="todolistText">${progressListArr[i]}</span>
        </div>
        <div class="progressdeleteItem">X</div>
        </li>
        `
    );
  }
  const progressListItem = document.querySelectorAll(".progressListItem");
  for (let i = 0; i < progressListArr.length; i++) {
    progressListItem[i].querySelector(".progressdeleteItem").addEventListener("click", ProgressDeleteListfunction);
    function ProgressDeleteListfunction()
     {
      progressListArr.splice(i, 1);
       progressCreateListfunction();
    }
    progressListItem[i].querySelector(".progressaddItem").addEventListener("click", completedAddListfunction);
       function completedAddListfunction() 
       {
      const copletedText = progressListArr[i];
      completedListArr.push(copletedText);
      CompletedCreateListfunction();
      progressListArr.splice(i, 1);
      progressCreateListfunction();
    }
  }
}
function CompletedCreateListfunction() {
  completedList.innerHTML = "";
  for (let i = 0; i < completedListArr.length; i++) {
    completedList.insertAdjacentHTML(
      "beforeend",
      `<li class="completedlistItem">
        <div class="icon-text">
        <span class="todolistText">${completedListArr[i]}</span>
        </div>
        <div class="completedListdelete">X</div>
        </li>
        `
    );
  }
  const completedlistItem = document.querySelectorAll(".completedlistItem");
  for (let i = 0; i < completedListArr.length; i++) {
    completedlistItem[i].querySelector(".completedListdelete").addEventListener("click", completedListDeltefun);
      function completedListDeltefun() 
      {
      completedListArr.splice(i, 1);
        CompletedCreateListfunction();
    }
  }
}
searchListBtn.addEventListener("click", SearchlistItem);
function SearchlistItem() 
{
  let searchTaskvalue = searchTask.value.toLowerCase().trim();

  let todoitems = todoList.getElementsByTagName("li");
  let progressitems = progressList.getElementsByTagName("li");
  let completeditems = completedList.getElementsByTagName("li");

  for (let i = 0; i < todoitems.length; i++) {
    let text = todoitems[i].querySelector(".todolistText").textContent.toLowerCase();
    let ismatch = text.includes(searchTaskvalue);
    if (ismatch == true) {
      todoitems[i].style.display = "flex";
    } else {
      todoitems[i].style.display = "none";
    }
  }
  for (let i = 0; i < progressitems.length; i++) {
    let progtext = progressitems[i].querySelector(".todolistText").textContent.toLowerCase();
    let progressismatch = progtext.includes(searchTaskvalue);
    if (progressismatch == true) {
      progressitems[i].style.display = "flex";
    } else {
      progressitems[i].style.display = "none";
    }
  }
  for (let i = 0; i < completeditems.length; i++) {
    let Comtext = completeditems[i].querySelector(".todolistText").textContent.toLowerCase();
    let Complistismatch = Comtext.includes(searchTaskvalue);
    if (Complistismatch == true) {
      completeditems[i].style.display = "flex";
    } 
    else {
      completeditems[i].style.display = "none";
    }
  }
}
removeButton.addEventListener("click", searchlistremove);
function searchlistremove() {
  searchTask.value = "";
  TodoListcreateListfunction();
  progressCreateListfunction();
  CompletedCreateListfunction();
}
