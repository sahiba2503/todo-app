const input = document.getElementById("input");
const button = document.getElementById("add");
const firstlist = document.getElementById("firstlist");
const secondlist = document.getElementById("secondlist");
const firstarr = [];
const secondarr = [];

button.addEventListener("click",clickfuntion);
function clickfuntion(){
    const text = input.value.trim();
    if(text === ""){
        return ;
    }
    else{
        firstarr.push(text);
        input.value = "";
        firstListfunction(firstarr);
    }
}; //click function is ended
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
             }             
         for( let i=0; i<firstarr.length; i++){ 
    const rem = document.querySelectorAll(".remove");
    const edi = document.querySelectorAll(".addicon");

           rem[i].addEventListener("click",deletefunction);
             function deletefunction(){
            firstarr.splice(i,1);
             firstListfunction(firstarr);
         };

          edi[i].addEventListener("click",editfunction);
          function editfunction(){
            const secondListItem = firstarr[i];
            secondarr.push(secondListItem);

             firstarr.splice(i,1);
             firstListfunction(firstarr);
             
          }

         }
         
        
        
               };
    
     
       
          

 


