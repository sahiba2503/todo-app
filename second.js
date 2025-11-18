const input = document.getElementById("input");
const button = document.getElementById("add");
const firstlist = document.getElementById("firstlist");
const secondlist = document.getElementById("secondlist");
const firstarr = [];
const secondarr = [];
button.addEventListener("click",clickfuntion);
function clickfuntion(){
    const text = input.value.trim();
    if(text === ""){  return ;  }
    else{
        firstarr.push(text);
        input.value = "";
        firstListfunction(firstarr);
    }
};
function firstListfunction(firstarr){
    firstlist.innerHTML = "";
       for( let i=0; i<firstarr.length; i++){ 
         firstlist.insertAdjacentHTML(
            "beforeend",          
              `
              <li class=liItems> 
              <div class="input-logo">
              <span class="addicon"><i class="fa-sharp fa-regular fa-circle-check"></i></span>
              <span class="text">${firstarr[i]}</span>
              </div>             
              <span class="remove"> x </span>
              </li>
               `              
          ); 
    const rem = document.querySelectorAll(".remove");
    const edi = document.querySelectorAll(".addicon");

     rem[i].addEventListener("click",deletefunction);
             function deletefunction(){
            firstarr.splice(i,1);
             firstListfunction(firstarr);
         };

         edi[i].addEventListener("click",editfunction);
          function editfunction(){
            const secondlistitem = firstarr[i];
            secondarr.push(secondlistitem);
             firstarr.splice(i,1);
             firstListfunction(firstarr);
             secondlistfunction(secondarr);
          }          
}

};
function secondlistfunction(secondarr){
    secondlist.innerHTML = "";
   for(let i=0; i<secondarr.length; i++){
       secondlist.insertAdjacentHTML(
            "beforeend",          
              `
              <li class=liItems2> 
              <div class="input-logo2">
              <span class="addicon2"><i class="fa-sharp fa-regular fa-circle-check"></i></span>
              <span class="text2">${secondarr[i]}</span>
              </div>             
              <span class="remove2"> x </span>
              </li>
               `              
          );
              const rem2 = document.querySelectorAll(".remove2");
              const edit2 = document.querySelectorAll(".addicon2");

             rem2[i].addEventListener("click",delete2function);
             function delete2function(){
            secondarr.splice(i,1);
             secondlistfunction(secondarr);
             firstListfunction(firstarr);
         };
         edit2[i].addEventListener("click",edit2function);
        function edit2function(){
             const firstlistitem = secondarr[i];  
              firstarr.push(firstlistitem);
              secondarr.splice(i,1);
              secondlistfunction(secondarr);
             firstListfunction(firstarr);

        };
        
   }
   
}
