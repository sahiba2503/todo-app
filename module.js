// var index = 0;
// var STEP = 20;

// /* ===== SCREEN CHECK ===== */
// if (window.innerWidth > 900) {

//   /* ===== DESKTOP ===== */
//   leftBtn.addEventListener("click", function () {
//     if (index <= 0) {
//       index = 1;
//     } else {
//       index--;
//     }
//     slider.style.transform = "translateX(-" + (index * STEP) + "%)";
//   });

//   rightBtn.addEventListener("click", function () {
//     if (index >= 1) {
//       index = 0;
//     } else {
//       index++;
//     }
//     slider.style.transform = "translateX(-" + (index * STEP) + "%)";
//   });

// } else if (window.innerWidth > 480) {

//   /* ===== TABLET ===== */
//   leftBtn.addEventListener("click", function () {
//     if (index <= 0) {
//       index = 4;
//     } else {
//       index--;
//     }
//     slider.style.transform = "translateX(-" + (index * STEP) + "%)";
//   });

//   rightBtn.addEventListener("click", function () {
//     if (index >= 4) {
//       index = 0;
//     } else {
//       index++;
//     }
//     slider.style.transform = "translateX(-" + (index * STEP) + "%)";
//   });

// } else {

//   /* ===== MOBILE ===== */
//   backBtn.addEventListener("click", function () {
//     index = 0;
//     slider.style.transform = "translateX(-0%)";
//   });

//   todoBtn.addEventListener("click", function () {
//     index = 1;
//     slider.style.transform = "translateX(-20%)";
//   });

//   proBtn.addEventListener("click", function () {
//     index = 2;
//     slider.style.transform = "translateX(-40%)";
//   });

//   doneBtn.addEventListener("click", function () {
//     index = 3;
//     slider.style.transform = "translateX(-60%)";
//   });

//   expiryBtn.addEventListener("click", function () {
//     index = 4;
//     slider.style.transform = "translateX(-80%)";
//   });

// }

// var index = 0;
// var allTaskListContainer = 20;
// var slids = document.querySelector(".taskContainer");
// if (window.innerWidth > 900)
//    {
//   document.querySelector("#sliderRightBtn").addEventListener("click", () => {
//     index++;
//     if (index > 1) {
//       index = 0;
//     }
//     updateSlider(allTaskListContainer);
//   });
//   document.querySelector("#sliderLeftBtn").addEventListener("click", () => {
//     index--;
//     if (index < 0) {
//       index = 1;
//     }
//     updateSlider(allTaskListContainer);
//   });
//   function updateSlider() {
//     slids.style.transform = `translateX(-${index * allTaskListContainer}%)`;
//   }
// }
// //this is for ipad
// if (window.innerWidth > 480 && window.innerWidth < 770)
//   {
// document.querySelector("#sliderRightBtn").addEventListener("click", () => {
//     index++;
//     if (index >= 5) {
//       index = 0;
//     }
//     smallUpdateSlider(allTaskListContainer);
//   });
//   document.querySelector("#sliderLeftBtn").addEventListener("click", () => {
//     index--;
//     if (index < 0) {
//       index = 4;
//     }
//     smallUpdateSlider(allTaskListContainer);
//   });
//   function smallUpdateSlider() {
//     slids.style.transform = `translateX(-${ind * listLen}%)`;
//   }
// }
// //this logic is for ipone XR
// var backBtn = document.querySelector("#backBtn");
// var todoBtn = document.querySelector("#todoBtn");
// var proBtn = document.querySelector("#proBtn");
// var donBtn = document.querySelector("#donBtn");
// var expiryBtn = document.querySelector("#expiryBtn");
//  if(window.innerWidth < 480 && window.innerWidth > 280)
//   {
// backBtn.addEventListener("click",comeBacklog);
// function comeBacklog(){
//   alert("yes click b");
//        slids.style.transform = `translateX(-${0}%)`;
//  };

//  todoBtn.addEventListener("click",comeTodo);
//  function comeTodo(){
//    alert("yes click t");
//     slids.style.transform = `translateX(-${20}%)`;

//  };

//  proBtn.addEventListener("click",comeProgress);
//  function comeProgress(){
//    alert("yes click p");

//     slids.style.transform = `translateX(-${40}%)`;

//  };

//  donBtn.addEventListener("click",comeDone);
//  function comeDone(){
//    alert("yes click d");
//    slids.style.transform = `translateX(-${60}%)`;
    
//  };

//   expiryBtn.addEventListener("click",comeExpiry);
//  function comeExpiry(){
//    alert("yes click e");
//     slids.style.transform = `translateX(-${80}%)`;

//  };

// }