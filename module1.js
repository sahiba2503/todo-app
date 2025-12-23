//we have to set login on left button all posible condition and the write code for right btn.
var slider = document.querySelector(".taskContainer");

var leftBtn = document.querySelector("#sliderLeftBtn");
var rightBtn = document.querySelector("#sliderRightBtn");

 var backBtn = document.querySelector("#backBtn");
 var todoBtn = document.querySelector("#todoBtn");
 var proBtn = document.querySelector("#proBtn");
 var doneBtn = document.querySelector("#donBtn");
 var expiryBtn = document.querySelector("#expiryBtn");
 var index = 0;
 var STEP = 20;


leftBtn.addEventListener("click", function () {

 //it is for desktop
  if (window.innerWidth > 900) {
    if (index <= 0) {
      index = 1;
    } else {
      index--;
    }
  }
  
  // it is for tablet
  else if (window.innerWidth > 480) {
    if (index <= 0) {
      index = 4;
    } else {
      index--;
    }
  }

  slider.style.transform = "translateX(-" + (index * STEP) + "%)";
});


rightBtn.addEventListener("click", function () {

  //it is for desktop
  if (window.innerWidth > 900) {
    if (index >= 1) {
      index = 0;
    } else {
      index++;
    }
  }

  // it is for tab screen
  else if (window.innerWidth > 480) {
    if (index >= 4) {
      index = 0;
    } else {
      index++;
    }
  }

  slider.style.transform = "translateX(-" + (index * STEP) + "%)";
});

//it is for mobile screen
backBtn.addEventListener("click", function () {
  index = 0;
  slider.style.transform = "translateX(0%)";
});

todoBtn.addEventListener("click", function () {
  index = 1;
  slider.style.transform = "translateX(-20%)";
});

proBtn.addEventListener("click", function () {
  index = 2;
  slider.style.transform = "translateX(-40%)";
});

doneBtn.addEventListener("click", function () {
  index = 3;
  slider.style.transform = "translateX(-60%)";
});

expiryBtn.addEventListener("click", function () {
  index = 4;
  slider.style.transform = "translateX(-80%)";
});
 export {slider,leftBtn,rightBtn,backBtn,todoBtn,proBtn,doneBtn,expiryBtn,index, STEP};
