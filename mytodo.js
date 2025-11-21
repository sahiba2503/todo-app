          
const input = document.getElementById("userInput");
const firstlist = document.getElementById("firstlist");
const secondlist = document.getElementById("secondlist");
const firstarr = [];
const secondarr = [];

    input.addEventListener("keydown", function(event) {
          if (event.key === "Enter") 
          {           
            const value = input.value.trim();
            if (value !== "") {
               firstarr.push(value);
                input.value ="";
                createlist(firstarr);
               
            }
        }
               
    });
     function  createlist(firstarr){
            firstlist.innerHTML = " ";
            for(let i=0; i<firstarr.length; i++){
              firstlist.insertAdjacentHTML("beforeend",
                `<li>
                <div class="content">
                <div class="eightdot"><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-ellipsis-vertical"></i></div>
                <div class="squrebox"> </div>
                <span class="text">${firstarr[i]}</span>
                </div>
                <div class="icons">
                <span class="iconf"><i class="fa-solid fa-star"></i></span>
                <span class = "iconSec"><i class="fa-solid fa-pen-clip"></i></span>
                <span class = "iconthird"><i class="fa-solid fa-xmark"></i></span> 
                </div></li>`);
                 
                const squrebox = document.getElementsByClassName("squrebox");
                   const iconf = document.getElementsByClassName("iconf");
                      const iconSec = document.getElementsByClassName("iconSec");
                         const iconthird = document.getElementsByClassName("iconthird");
             squrebox[i].addEventListener("click",compleateTask);
              iconf[i].addEventListener("click",staricon);
               iconSec[i].addEventListener("click",coloricon);
                iconthird[i].addEventListener("click",removefun);
                function compleateTask(){
                 createlist(firstarr);
                }
                function staricon(){                 
                  createlist(firstarr);
                }
                function coloricon(){

                }
                function removefun(){
                  
                }
            }


        };
    //event.key possible,  //event object.
            //ArrowUp
            //a
            //" "
            //Enter