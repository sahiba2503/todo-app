// export let index = 0;
// export var totalSliders = 4;
// export var allTaskListContainer = 20;
// export var rig = document.querySelector("#rightBtn");

// rig.addEventListener("click",()=>{
//   index++;
//    if(index >= totalSliders){
//     index = 0;

//   }
//   updateSlider();

// });
// export var lef = document.querySelector("#leftBtn");
// lef.addEventListener("click",()=>{
//   index--;
//   if(index < 0){
//    index = totalSliders-1;
//   }
//    updateSlider();
//   });
//  export function  updateSlider(){
//     slider.style.transform = `translateX(-${index * allTaskListContainer}%)`;
//   };
//   export {index,totalSliders,allTaskListContainer,rig,lef,updateSlider};


  // slider.js

let index = 0;
const totalSliders = 4;
const slideWidth = 20; 

const slider = document.querySelector("#slider");
const rightBtn = document.querySelector("#rightBtn");
const leftBtn = document.querySelector("#leftBtn");

function updateSlider() {
  slider.style.transform = `translateX(-${index * slideWidth}%)`;
}

rightBtn.addEventListener("click", () => {
  index++;
  if (index >= totalSliders) {
    index = 0;
  }
  updateSlider();
});

leftBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = totalSliders - 1;
  }
  updateSlider();
});

// export ONLY what is needed,here we have two variable first is index and second is totalSlider and one is method.
//you know what each mathod we will have to call for running this method 

export { index, totalSliders, updateSlider };
