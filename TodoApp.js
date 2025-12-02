const AddTask = document.querySelector("#AddTask");
const Addclickbutton = document.querySelector("#Addclickbutton");

const SearchTask = document.querySelector("#SearchTask");
const searchlistbtn = document.querySelector("#clickSearchList");
const searchlistremovebtn = document.querySelector("#Removebutton");

const TodoList = document.querySelector("#TodoList");
const ProgressList = document.querySelector("#ProgressList");
const CompletedList = document.querySelector("#CompletedList");

const TodoListArr = []; //data
const ProgressListArr = [];
const CompletedListArr = [];

let addTaskbutton = -1; //we use for edit the list item

Addclickbutton.addEventListener("click", Addclickbuttonfun);
function Addclickbuttonfun() {
  const inputboxText = AddTask.value.trim();
  if (inputboxText == "") {
    return;
  }
  if (addTaskbutton == -1) {
    TodoListArr.push(inputboxText);
    AddTask.value = "";
    TodoListcreateListfunction();
    // const searchinput = SearchTask.value;
    SearchlistItem();
    // SearchTask.value = "";


  } else {
    TodoList.children[addTaskbutton].querySelector(
      ".todolistText"
    ).textContent = AddTask.value;
    TodoListArr.splice(addTaskbutton, 1, AddTask.value);
    AddTask.value = "";
     SearchlistItem();
    addTaskbutton = -1;
        
  }
}
function TodoListcreateListfunction() {
  TodoList.innerHTML = "";
  for (let i = 0; i < TodoListArr.length; i++) {
    TodoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todolist">
        <div class="icon-text">
        <span class="addList"><i class="fa-regular fa-circle"></i></span>
        <span class="todolistText">${TodoListArr[i]}</span>
        </div>
        <div class="icon-container">
        <div class="TodoeditIcon"><i class="fa-solid fa-pencil"></i></div>
        <div class="TododeleteIcon">X </div>
        </div>
        </li>
        `
    );
  }
  const todoList = document.querySelectorAll(".todolist");
  for (let i = 0; i < TodoListArr.length; i++) {
    todoList[i]
      .querySelector(".TododeleteIcon")
      .addEventListener("click", TodoDeleteListfunction);
    function TodoDeleteListfunction() {
      TodoListArr.splice(i, 1);
      AddTask.value = "";
      SearchTask.value = "";
      TodoListcreateListfunction();
    }
    todoList[i]
      .querySelector(".addList")
      .addEventListener("click", progressListfunction);
    function progressListfunction() {
      const progtext = TodoListArr[i];
      ProgressListArr.push(progtext);
      progressCreateListfunction();
      TodoListArr.splice(i, 1);
      TodoListcreateListfunction();
    }
    todoList[i]
      .querySelector(".TodoeditIcon")
      .addEventListener("click", Todoeditlist);
    function Todoeditlist() {
      AddTask.value = todoList[i].querySelector(".todolistText").textContent;
      addTaskbutton = i;
      
      
    }
  }
}
function progressCreateListfunction() {
  ProgressList.innerHTML = "";
  for (let i = 0; i < ProgressListArr.length; i++) {
    ProgressList.insertAdjacentHTML(
      "beforeend",
      `<li class="Proglist">
        <div class="icon-text">
        <span class="addList"><i class="fa-solid fa-circle-check"></i></</span>
        <span class="todolistText">${ProgressListArr[i]}</span>
        </div>
        <div class="progressdeleteIcon">X</div>
        </li>
        `
    );
  }
  const proglist = document.querySelectorAll(".Proglist");
  for (let i = 0; i < ProgressListArr.length; i++) {
    proglist[i]
      .querySelector(".progressdeleteIcon")
      .addEventListener("click", ProgressDeleteListfunction);
    function ProgressDeleteListfunction() {
      ProgressListArr.splice(i, 1);
      SearchTask.value = "";
      progressCreateListfunction();
    }
    proglist[i]
      .querySelector(".addList")
      .addEventListener("click", completedAddListfunction);
    function completedAddListfunction() {
      const copletedText = ProgressListArr[i];
      CompletedListArr.push(copletedText);
      CompletedCreateListfunction();
      ProgressListArr.splice(i, 1);
      progressCreateListfunction();
    }
  }
}
function CompletedCreateListfunction() {
  CompletedList.innerHTML = "";
  for (let i = 0; i < CompletedListArr.length; i++) {
    CompletedList.insertAdjacentHTML(
      "beforeend",
      `<li class="completedlist">
        <div class="icon-text">
        <span class="todolistText">${CompletedListArr[i]}</span>
        </div>
        <div class="completelistdelete">X</div>
        </li>
        `
    );
  }
  const completedlist = document.querySelectorAll(".completedlist");
  for (let i = 0; i < CompletedListArr.length; i++) {
    completedlist[i]
      .querySelector(".completelistdelete")
      .addEventListener("click", completedListDeltefun);
    function completedListDeltefun() {
      CompletedListArr.splice(i, 1);
      SearchTask.value = "";
      CompletedCreateListfunction();
    }
  }
}
searchlistbtn.addEventListener("click", SearchlistItem);
function SearchlistItem() {
  let searchText = SearchTask.value.toLowerCase().trim();

  let todoitems = TodoList.getElementsByTagName("li");
  let proitems = ProgressList.getElementsByTagName("li");
  let comitems = CompletedList.getElementsByTagName("li");

  for (let i = 0; i < todoitems.length; i++) {
    let text = todoitems[i]
      .querySelector(".todolistText")
      .textContent.toLowerCase();
    let ismatch = text.includes(searchText);
    if (ismatch == true) {
      todoitems[i].style.display = "flex";
    } else {
      todoitems[i].style.display = "none";
    }
  }

  for (let i = 0; i < proitems.length; i++) {
    let progtext = proitems[i]
      .querySelector(".todolistText")
      .textContent.toLowerCase();
    let progressismatch = progtext.includes(searchText);
    if (progressismatch == true) {
      proitems[i].style.display = "flex";
    } else {
      proitems[i].style.display = "none";
    }
  }

  for (let i = 0; i < comitems.length; i++) {
    let Comtext = comitems[i]
      .querySelector(".todolistText")
      .textContent.toLowerCase();
    let Complistismatch = Comtext.includes(searchText);
    if (Complistismatch == true) {
      comitems[i].style.display = "flex";
    } else {
      comitems[i].style.display = "none";
    }
  }
}
searchlistremovebtn.addEventListener("click", searchlistremove);
function searchlistremove() {
  SearchTask.value = "";
  TodoListcreateListfunction();
  progressCreateListfunction();
  CompletedCreateListfunction();
}
