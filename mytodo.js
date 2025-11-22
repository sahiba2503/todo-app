          
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
                `<li class="listitem">
                <div class="content">
                <div class="eightdot"><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-ellipsis-vertical"></i><i class="fa-solid fa-ellipsis-vertical"></i></div>
                <div class="squrebox"> </div>
                <span class="text">${firstarr[i]}</span>
                </div>
                <div class="icons">
                <span class="iconf"><i class="fa-solid fa-star"></i></span>
                <span class="iconSec"><i class="fa-solid fa-pen-clip"></i></span>
                <span class="removeicon"><i class="fa-solid fa-xmark"></i></span> 
                </div></li>`);
                 
                const li = document.querySelectorAll(".listitem");
                li[i].querySelector(".removeicon").addEventListener("click",removefunction);
                function removefunction(){
                  firstarr.splice(i,1);
                  createlist(firstarr);
                }
                li[i].querySelector(".squrebox").addEventListener("click",copylinkfunction);
                function copylinkfunction(){
                  const copytext = firstarr[i];
                   secondarr.push(copytext);
                   firstarr.splice(i,1);
                    createlist(firstarr);
                    secondlistfun(secondarr);
                }                            
                }
                   }
                   function secondlistfun(secondarr){
                    secondlist.innerHTML="";
                     for(let i=0; i<secondarr.length; i++){
              secondlist.insertAdjacentHTML("beforeend",
                `<li class="listitem2">
                <div class="content">
                <div class="squrebox checkbox"> </div>
                <span class="text2">${secondarr[i]}</span>
                </div>
                <div class="icons2">
                <span class="removeicon2"><i class="fa-solid fa-xmark"></i></span> 
                </div></li>`);
               const finalLi = document.querySelectorAll(".listitem2");
                  finalLi[i].querySelector(".removeicon2").addEventListener("click",removelisinfinal);
                  function removelisinfinal(){
                    secondarr.splice(i,1);
                    secondlistfun(secondarr);
                    
                  }
                    finalLi[i].querySelector(".squrebox").addEventListener("click",addlistinfirst);
                    function addlistinfirst(){
                    const copyseconli = secondarr[i];
                     secondarr.splice(i,1);
                    firstarr.push(copyseconli);
                     createlist(firstarr);
                    secondlistfun(secondarr);
                    }
                   }
                  };
                 


      
    //event.key possible,  
            //ArrowUp
            //a
            //" "
            //Enter