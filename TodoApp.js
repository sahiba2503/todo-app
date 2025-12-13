//work on delay icons
const addTask = document.querySelector("#addTask");
const addClickButton = document.querySelector("#addClickButton");

const searchTask = document.querySelector("#searchTask");
const searchListBtn = document.querySelector("#searchListBtn");
const removeButton = document.querySelector("#removeButton");

const todoList = document.querySelector("#todoList");
const progressList = document.querySelector("#progressList");
const completedList = document.querySelector("#completedList");
const delayList =  document.querySelector("#delayList");
const signList =  document.querySelector("#signList");


const todoListArr = []; 
const progressListArr = [];
const completedListArr = [];
const delayListData = [];
const signListData = [];

let addBtnClickTime = -1; 

addClickButton.addEventListener("click", addButtonWork);//addedit,handleAddUpdateTask
function addButtonWork() {
  const inputboxText = addTask.value.trim();
  if (inputboxText == "") {    return;   }

  if (addBtnClickTime == -1)
     {

    todoListArr.push(inputboxText);
    addTask.value = "";
    TodoListcreateListfunction();
    SearchlistItem();
      
      }
       else {
    todoList.children[addBtnClickTime].querySelector(".listText" ).textContent = addTask.value;
    todoListArr.splice(addBtnClickTime, 1, addTask.value);
    addTask.value = "";
     SearchlistItem();
    addBtnClickTime = -1;     //updateTodoTaskIndex   
  }
}
function TodoListcreateListfunction() {//handleRenderTodoList
  todoList.innerHTML = "";
  for (let i = 0; i < todoListArr.length; i++) {
    todoList.insertAdjacentHTML(
      "beforeend",
      `<li class="todoListItem">
        <div class="todoIconText">
        <span class="addList"><i class="fa-regular fa-circle"></i></span>
        <span class="listText">${todoListArr[i]}</span>
        </div>
        <div class="TodoiconContainer">
        <div class="todoEditIcon"><i class="fa-solid fa-pencil"></i></div>
        <div class="moveDelayToTodoList"><i class="fa-regular fa-hand-back-fist"></i></div>
        <div class="todoDeleteIcon"><i class="fa-solid fa-xmark"></i> </div>
                </div>
        </li>
        `
    );
  }
  const todoListItem = document.querySelectorAll(".todoListItem");
  for (let i = 0; i < todoListArr.length; i++)
     {
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

    todoListItem[i].querySelector(".moveDelayToTodoList").addEventListener("click", moveLIstInDelay);

    function moveLIstInDelay()
     {
      var delayListcontent = todoListArr[i];
      delayListData.push(delayListcontent);
      delayListCreate();
      todoListArr.splice(i, 1);
      TodoListcreateListfunction();
    }


    todoListItem[i].querySelector(".todoEditIcon").addEventListener("click", Todoeditlist);
    function Todoeditlist()
     {
      addTask.value = todoListItem[i].querySelector(".listText").textContent;
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
        <div class="iconTextOfProgress">
        <span class="progressMoveInCompletedList"><i class="fa-solid fa-circle-check"></i></span>
        <span class="listText">${progressListArr[i]}</span>
        </div>  
          <div class="progressTwoIcons">
        <div class="progressListMoveInDelay"><i class="fa-regular fa-hand-back-fist"></i></div>
        <div class="progressdeleteItem"><i class="fa-solid fa-xmark"></i></div>
        </div>
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
 
     progressListItem[i].querySelector(".progressListMoveInDelay").addEventListener("click", createListinDelayFromProgless);
     function createListinDelayFromProgless(){
      var delayListcontent = progressListArr[i];
      delayListData.push(delayListcontent);
      delayListCreate();
              progressListArr.splice(i, 1);
       progressCreateListfunction();
     }

    progressListItem[i].querySelector(".progressMoveInCompletedList").addEventListener("click", completedAddListfunction);
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
        <div class="compIconText">
        <span class="completedListMoveInSign"><i class="fa-solid fa-circle-check"></i></span>
        <span class="listText">${completedListArr[i]}</span>
        </div>
        <div class="completedListdelete"><i class="fa-solid fa-xmark"></i></div>
        </li>
        `
    );
  }
  const completedlistItem = document.querySelectorAll(".completedlistItem");
  for (let i = 0; i < completedListArr.length; i++)
     {
    completedlistItem[i].querySelector(".completedListdelete").addEventListener("click", completedListDelte);
      function completedListDelte() 
      {
      completedListArr.splice(i, 1);
        CompletedCreateListfunction();
    }
    completedlistItem[i].querySelector(".completedListMoveInSign").addEventListener("click", moveListInSign);
    function moveListInSign(){ 
      var newTexSlist = completedListArr[i];
      signListData.push(newTexSlist);
      createSignList();
        completedListArr.splice(i, 1);
        CompletedCreateListfunction();
        
   
       }
      }
  }

  function createSignList(){
  signList.innerHTML = "";
  for (let i = 0; i < signListData.length; i++) {
    signList.insertAdjacentHTML(
      "beforeend",
      `<li class="signListItem">
       <div class="listText">${signListData[i]}</div>
       <div class="removeSigntext"><i class="fa-solid fa-xmark"></i></div>
        </li>
        `
    );
  }
   const totalSignlist = document.querySelectorAll(".signListItem");
  for (let i = 0; i < signListData.length; i++)    
     {
 totalSignlist[i].querySelector(".removeSigntext").addEventListener("click",removelistFromSign);
 function removelistFromSign(){
signListData.splice(i,1);
createSignList();
 }
     }

}


  function delayListCreate(){
delayList.innerHTML = "";
  for (let i = 0; i < delayListData.length; i++) {
    delayList.insertAdjacentHTML(
      "beforeend",
      `<li class="delayListItem">
        <div class="iconTextOfDelayList">
        <span class="delayListAdd"><i class="fa-solid fa-circle-check"></i></span>
        <span class="listText">${delayListData[i]}</span>
        </div>  
        
        <div class="DeleteListIconDelay"> <i class="fa-solid fa-xmark"></i></div>        
        </li>
        `
    );
  }
  
   const delayListItem = document.querySelectorAll(".delayListItem");
  for (let i = 0; i <delayListData.length; i++) {
    
    delayListItem[i].querySelector(".DeleteListIconDelay").addEventListener("click",delayDeleteListItem );
    function delayDeleteListItem()   {
      delayListData.splice(i, 1);
       delayListCreate();
          }

    delayListItem[i].querySelector(".delayListAdd").addEventListener("click", addListInTodo);
       function addListInTodo() 
       {
      const newTextFortodo = delayListData[i];         
      todoListArr.push(newTextFortodo);
           
       delayListData.splice(i, 1);
       delayListCreate();    
     TodoListcreateListfunction();
    }
  }
 
};

searchListBtn.addEventListener("click", SearchlistItem);
function SearchlistItem() 
{
  let searchTaskvalue = searchTask.value.toLowerCase().trim();
  addListInTodoAfterFilterListText =searchTaskvalue;
//  searchTask.value = "";
  let todoitems = todoList.getElementsByTagName("li");
  let progressitems = progressList.getElementsByTagName("li");
  let completeditems = completedList.getElementsByTagName("li");
  let delayListItems = delayList.getElementsByTagName("li");
  let signListItems = signList .getElementsByTagName("li");

  for (let i = 0; i < todoitems.length; i++) {
    let text = todoitems[i].querySelector(".listText").textContent.toLowerCase();
    let ismatch = text.includes(searchTaskvalue);
    if (ismatch == true) {
      todoitems[i].style.display = "flex";
    } else {
      todoitems[i].style.display = "none";
    }
  }
  for (let i = 0; i < progressitems.length; i++) {
    let progtext = progressitems[i].querySelector(".listText").textContent.toLowerCase();
    let progressismatch = progtext.includes(searchTaskvalue);
    if (progressismatch == true) {
      progressitems[i].style.display = "flex";
    } else {
      progressitems[i].style.display = "none";
    }
  }
  for (let i = 0; i < completeditems.length; i++) {
    let Comtext = completeditems[i].querySelector(".listText").textContent.toLowerCase();
    let Complistismatch = Comtext.includes(searchTaskvalue);
    if (Complistismatch == true) {
      completeditems[i].style.display = "flex";
    } 
    else{
      completeditems[i].style.display = "none";
    }
  }
    for (let i = 0; i < delayListItems.length; i++) {
    let delayText = delayListData[i].querySelector(".listText").textContent.toLowerCase();
    let delayListismatch = delayText.includes(searchTaskvalue);
    if (delayListismatch == true) {
      delayListData[i].style.display = "flex";
    } 
    else {
      delayListData[i].style.display = "none";
    }
  }
    for (let i = 0; i < signListItems.length; i++) {
    let signText = signListItems[i].querySelector(".listText").textContent.toLowerCase();
    let signListismatch = signText.includes(searchTaskvalue);
    if (signListismatch == true) {
      signListItems[i].style.display = "flex";
    } 
    else {
      signListItems[i].style.display = "none";
    }
  }   
  };

removeButton.addEventListener("click", searchlistremove);
function searchlistremove() {
  searchTask.value = "";
  TodoListcreateListfunction();
  progressCreateListfunction();
  CompletedCreateListfunction();
delayListCreate();
createSignList();
};
//outerBoxOfAllList = containerwidth
//containerOfallListBox = slider

let index = 0;
var totalSliders = 4;
var outerBoxOfAllList = 20;
var containerOfallListBox = document.querySelector('#containerOfallListBox');

document.querySelector("#rightBtn").addEventListener("click",()=>{
  index++;
  alert("yes right btn is click");
  if(index >= totalSliders){
    index = 0;

  }
  updateSlider();

});
document.querySelector("#leftBtn").addEventListener("click",()=>{
  alert("yes left btn is clicking");
  index--;
  if(index < 0){
   index = totalSliders-1;
  }
   updateSlider();
  });
  function  updateSlider(){
    containerOfallListBox.style.transform = `translateX(-${index * outerBoxOfAllList}%)`;
  }
 