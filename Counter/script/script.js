/*Script*/

let count=document.querySelector(".count");
let number=parseInt(document.querySelector(".count").textContent);
let decrease=document.getElementById("decrease");
let reset=document.getElementById("reset");
let increase=document.getElementById("increase");



decrease.addEventListener("click", function(){
    number--;
    count.innerHTML=number;
    if(number<0){
        count.style.color="red";
    }
    if(number==0){
        count.style.color="black";  
    }
});

increase.addEventListener("click", function(){
    number++;
    count.innerHTML=number;
    if(number>0){
        count.style.color="green";
    }
    if(number==0){
        count.style.color="black";  
    }
});

reset.addEventListener("click", function(){
    number=0;
    count.innerHTML=0;
    count.style.color="black";
});
